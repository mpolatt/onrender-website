import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import cors from 'cors';
import crypto from 'crypto';

// Rate limiting configuration
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Security headers using Helmet
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https://api.acedemand.com'],
      fontSrc: ["'self'", 'https:', 'data:'],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"]
    }
  },
  xssFilter: true,
  noSniff: true,
  referrerPolicy: { policy: 'same-origin' }
});

// CORS configuration
export const corsOptions = {
  origin: ['https://acedemand.com', 'https://api.acedemand.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
  credentials: true,
  maxAge: 600 // 10 minutes
};

export const corsMiddleware = cors(corsOptions);

// XSS Protection
export const xssProtection = xss();

// HPP Protection
export const hppProtection = hpp();

// Input sanitization middleware
export const sanitizeInput = (req: Request, _res: Response, next: NextFunction) => {
  if (req.body) {
    for (let key in req.body) {
      if (typeof req.body[key] === 'string') {
        // Using a simple sanitization approach
        req.body[key] = req.body[key]
          .trim()
          .replace(/[<>]/g, '') // Remove < and > characters
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/\//g, '&#x2F;');
      }
    }
  }
  next();
};

// CSRF Protection
const generateToken = () => crypto.randomBytes(32).toString('hex');

export const csrfProtection = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'GET') {
    const token = generateToken();
    req.session.csrfToken = token;
    res.setHeader('X-CSRF-Token', token);
    next();
  } else {
    const token = req.headers['x-csrf-token'];
    const storedToken = req.session?.csrfToken;

    if (!token || !storedToken || token !== storedToken) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
    next();
  }
};

// Generate CSRF Token
export const generateCsrfToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = generateToken();
  req.session.csrfToken = token;
  next();
};

// Security middleware composition
export const securityMiddleware = [
  securityHeaders,
  corsMiddleware,
  xssProtection,
  hppProtection,
  sanitizeInput,
  limiter
]; 