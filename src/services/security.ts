import { securityConfig } from '../config/security';
import {
  generateSecureToken,
  hashPassword,
  verifyPassword,
  sanitizeInput,
  generateNonce,
  isValidEmail,
  checkPasswordStrength,
  maskSensitiveData
} from '../utils/security';

class SecurityService {
  private static instance: SecurityService;
  private activeTokens: Set<string> = new Set();
  private rateLimitMap: Map<string, { count: number; timestamp: number }> = new Map();

  private constructor() {
    // Initialize security service
    this.cleanupExpiredTokens();
  }

  public static getInstance(): SecurityService {
    if (!SecurityService.instance) {
      SecurityService.instance = new SecurityService();
    }
    return SecurityService.instance;
  }

  /**
   * Generate and store a new authentication token
   */
  public async generateAuthToken(): Promise<string> {
    const token = generateSecureToken();
    this.activeTokens.add(token);
    return token;
  }

  /**
   * Validate an authentication token
   */
  public isValidToken(token: string): boolean {
    return this.activeTokens.has(token);
  }

  /**
   * Revoke an authentication token
   */
  public revokeToken(token: string): void {
    this.activeTokens.delete(token);
  }

  /**
   * Hash a password for storage
   */
  public async hashUserPassword(password: string): Promise<{ hash: string; salt: string }> {
    return hashPassword(password);
  }

  /**
   * Verify a password against stored hash
   */
  public async verifyUserPassword(
    password: string,
    hash: string,
    salt: string
  ): Promise<boolean> {
    return verifyPassword(password, hash, salt);
  }

  /**
   * Check if an IP address is rate limited
   */
  public isRateLimited(ip: string): boolean {
    const now = Date.now();
    const limit = this.rateLimitMap.get(ip);

    if (!limit) {
      this.rateLimitMap.set(ip, { count: 1, timestamp: now });
      return false;
    }

    if (now - limit.timestamp > securityConfig.rateLimit.windowMs) {
      this.rateLimitMap.set(ip, { count: 1, timestamp: now });
      return false;
    }

    if (limit.count >= securityConfig.rateLimit.max) {
      return true;
    }

    limit.count++;
    return false;
  }

  /**
   * Sanitize user input data
   */
  public sanitizeUserInput(data: Record<string, any>): Record<string, any> {
    const sanitized: Record<string, any> = {};

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string') {
        sanitized[key] = sanitizeInput(value);
      } else if (typeof value === 'object' && value !== null) {
        sanitized[key] = this.sanitizeUserInput(value);
      } else {
        sanitized[key] = value;
      }
    }

    return sanitized;
  }

  /**
   * Validate email format
   */
  public validateEmail(email: string): boolean {
    return isValidEmail(email);
  }

  /**
   * Check password strength
   */
  public validatePasswordStrength(password: string): ReturnType<typeof checkPasswordStrength> {
    return checkPasswordStrength(password);
  }

  /**
   * Mask sensitive data for logging
   */
  public maskSensitiveInfo(data: string): string {
    return maskSensitiveData(data);
  }

  /**
   * Generate CSP nonce
   */
  public generateCspNonce(): string {
    return generateNonce();
  }

  /**
   * Clean up expired tokens periodically
   */
  private cleanupExpiredTokens(): void {
    setInterval(() => {
      const now = Date.now();
      
      // Clean up rate limit entries
      for (const [ip, limit] of this.rateLimitMap.entries()) {
        if (now - limit.timestamp > securityConfig.rateLimit.windowMs) {
          this.rateLimitMap.delete(ip);
        }
      }
    }, 60000); // Run every minute
  }
}

export const securityService = SecurityService.getInstance(); 