export const securityConfig = {
  // Rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
  },

  // CORS configuration
  cors: {
    allowedOrigins: process.env.VITE_ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    credentials: true,
    maxAge: 86400 // 24 hours
  },

  // Content Security Policy configuration
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com'
    ],
    imgSrc: [
      "'self'",
      'data:',
      'https:',
      'blob:'
    ],
    fontSrc: [
      "'self'",
      'https://fonts.gstatic.com'
    ],
    connectSrc: [
      "'self'",
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com'
    ],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: []
  },

  // Session configuration
  session: {
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  },

  // Security headers
  headers: {
    hsts: {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true
    },
    noSniff: true,
    xssFilter: true,
    noCache: false,
    referrerPolicy: 'same-origin',
    frameOptions: 'DENY'
  }
}; 