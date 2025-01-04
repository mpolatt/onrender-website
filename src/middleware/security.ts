import { NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import cors from 'cors';

// Rate limiting
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Security headers middleware
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://www.google-analytics.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      connectSrc: ["'self'", 'https://www.google-analytics.com'],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  },
  crossOriginEmbedderPolicy: false
});

// CORS configuration
export const corsOptions = {
  origin: process.env.VITE_ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// XSS Protection middleware
export const xssProtection = xss();

// HPP (HTTP Parameter Pollution) protection
export const hppProtection = hpp();

// Input sanitization middleware
export const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key].trim().replace(/[<>]/g, '');
      }
    });
  }
  next();
};

// CSRF Token middleware
export const csrfProtection = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-csrf-token'];
  const storedToken = req.session?.csrfToken;

  if (!token || token !== storedToken) {
    return res.status(403).json({ message: 'Invalid CSRF token' });
  }

  next();
};

// Generate CSRF Token
export const generateCsrfToken = (req: Request, res: Response, next: NextFunction) => {
  const token = Math.random().toString(36).substring(2);
  req.session.csrfToken = token;
  res.locals.csrfToken = token;
  next();
};

// Security middleware composition
export const securityMiddleware = [
  securityHeaders,
  cors(corsOptions),
  xssProtection,
  hppProtection,
  sanitizeInput,
  limiter
]; 