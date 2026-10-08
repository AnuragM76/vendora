import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (process.env.NODE_ENV !== 'production') {
    console.error('Unhandled error:', err);
  }
  const status = err.status || err.statusCode || (err.name === 'ValidationError' ? 400 : 500);
  const message =
    status >= 500 && process.env.NODE_ENV === 'production'
      ? 'An unexpected error occurred. Please try again later.'
      : err.message || 'Request failed';

  res.status(status).json({
    success: false,
    error: message,
    code: err.code || (status === 401 ? 'UNAUTHORIZED' : status === 403 ? 'FORBIDDEN' : 'SERVER_ERROR'),
  });
}