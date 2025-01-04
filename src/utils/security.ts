import crypto from 'crypto';

/**
 * Generate a secure random token
 * @param length Length of the token
 * @returns Secure random token
 */
export const generateSecureToken = (length: number = 32): string => {
  return crypto.randomBytes(length).toString('hex');
};

/**
 * Hash a password using PBKDF2
 * @param password Password to hash
 * @param salt Salt for hashing (optional)
 * @returns Object containing hash and salt
 */
export const hashPassword = async (
  password: string,
  salt?: string
): Promise<{ hash: string; salt: string }> => {
  const useSalt = salt || crypto.randomBytes(16).toString('hex');
  
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      useSalt,
      100000,
      64,
      'sha512',
      (err, derivedKey) => {
        if (err) reject(err);
        resolve({
          hash: derivedKey.toString('hex'),
          salt: useSalt
        });
      }
    );
  });
};

/**
 * Verify a password against a hash
 * @param password Password to verify
 * @param hash Hash to verify against
 * @param salt Salt used in hashing
 * @returns Boolean indicating if password is valid
 */
export const verifyPassword = async (
  password: string,
  hash: string,
  salt: string
): Promise<boolean> => {
  const { hash: newHash } = await hashPassword(password, salt);
  return newHash === hash;
};

/**
 * Sanitize user input
 * @param input Input to sanitize
 * @returns Sanitized input
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
};

/**
 * Generate a nonce for CSP
 * @returns Nonce string
 */
export const generateNonce = (): string => {
  return crypto.randomBytes(16).toString('base64');
};

/**
 * Validate email format
 * @param email Email to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check password strength
 * @param password Password to check
 * @returns Object containing password strength assessment
 */
export const checkPasswordStrength = (
  password: string
): {
  isStrong: boolean;
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumbers: boolean;
  hasSpecialChars: boolean;
} => {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return {
    isStrong: minLength && hasUpper && hasLower && hasNumbers && hasSpecialChars,
    hasMinLength: minLength,
    hasUpperCase: hasUpper,
    hasLowerCase: hasLower,
    hasNumbers: hasNumbers,
    hasSpecialChars: hasSpecialChars
  };
};

/**
 * Mask sensitive data
 * @param data Data to mask
 * @param start Number of characters to show at start
 * @param end Number of characters to show at end
 * @returns Masked string
 */
export const maskSensitiveData = (
  data: string,
  start: number = 4,
  end: number = 4
): string => {
  if (data.length <= start + end) return '*'.repeat(data.length);
  
  const startStr = data.slice(0, start);
  const endStr = data.slice(-end);
  const maskLength = data.length - start - end;
  
  return `${startStr}${'*'.repeat(maskLength)}${endStr}`;
}; 