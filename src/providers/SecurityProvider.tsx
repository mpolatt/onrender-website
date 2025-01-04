import React, { createContext, useContext, useEffect, useState } from 'react';
import { securityService } from '../services/security';
import { securityConfig } from '../config/security';

interface SecurityContextType {
  isAuthenticated: boolean;
  csrfToken: string | null;
  nonce: string;
  login: (token: string) => void;
  logout: () => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [nonce] = useState(() => securityService.generateCspNonce());

  useEffect(() => {
    const initializeSecurity = async () => {
      // Check for existing authentication
      const token = localStorage.getItem('auth_token');
      if (token && securityService.isValidToken(token)) {
        setIsAuthenticated(true);
      }

      // Generate CSRF token
      const newCsrfToken = await securityService.generateAuthToken();
      setCsrfToken(newCsrfToken);

      // Add security headers
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = generateCspHeader();
      document.head.appendChild(meta);

      return () => {
        document.head.removeChild(meta);
      };
    };

    initializeSecurity();
  }, []);

  const generateCspHeader = () => {
    const { csp } = securityConfig;
    return Object.entries(csp)
      .map(([key, value]) => {
        if (key === 'scriptSrc') {
          return `${key.replace(/[A-Z]/g, '-$&').toLowerCase()} ${value.join(' ')} 'nonce-${nonce}'`;
        }
        return `${key.replace(/[A-Z]/g, '-$&').toLowerCase()} ${value.join(' ')}`;
      })
      .join('; ');
  };

  const login = async (token: string) => {
    if (securityService.isValidToken(token)) {
      localStorage.setItem('auth_token', token);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      securityService.revokeToken(token);
      localStorage.removeItem('auth_token');
    }
    setIsAuthenticated(false);
  };

  return (
    <SecurityContext.Provider
      value={{
        isAuthenticated,
        csrfToken,
        nonce,
        login,
        logout
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurityContext must be used within a SecurityProvider');
  }
  return context;
}; 