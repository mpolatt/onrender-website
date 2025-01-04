import { useState, useCallback, useEffect } from 'react';
import { securityService } from '../services/security';

interface SecurityHook {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  validateInput: (input: string) => string;
  validateEmail: (email: string) => boolean;
  validatePassword: (password: string) => {
    isStrong: boolean;
    hasMinLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasNumbers: boolean;
    hasSpecialChars: boolean;
  };
  maskSensitiveData: (data: string) => string;
  generateNonce: () => string;
}

export const useSecurity = (): SecurityHook => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('auth_token');
    if (token && securityService.isValidToken(token)) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = useCallback((token: string) => {
    if (securityService.isValidToken(token)) {
      localStorage.setItem('auth_token', token);
      setIsAuthenticated(true);
    }
  }, []);

  const logout = useCallback(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      securityService.revokeToken(token);
      localStorage.removeItem('auth_token');
    }
    setIsAuthenticated(false);
  }, []);

  const validateInput = useCallback((input: string) => {
    return securityService.sanitizeUserInput({ input }).input;
  }, []);

  const validateEmail = useCallback((email: string) => {
    return securityService.validateEmail(email);
  }, []);

  const validatePassword = useCallback((password: string) => {
    return securityService.validatePasswordStrength(password);
  }, []);

  const maskSensitiveData = useCallback((data: string) => {
    return securityService.maskSensitiveInfo(data);
  }, []);

  const generateNonce = useCallback(() => {
    return securityService.generateCspNonce();
  }, []);

  return {
    isAuthenticated,
    login,
    logout,
    validateInput,
    validateEmail,
    validatePassword,
    maskSensitiveData,
    generateNonce
  };
}; 