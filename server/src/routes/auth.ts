import { Router } from 'express';
import { authService, signupSchema, loginSchema } from '../services/authService';
import { createSession, destroySession, AuthRequest, requireAuth } from '../lib/session';

const router = Router();

// POST /register (or /signup)
router.post(['/register', '/signup'], async (req, res, next) => {
  try {
    const parse = signupSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        success: false,
        error: parse.error.errors[0]?.message || 'Invalid input data',
      });
    }

    const result = await authService.signup(parse.data);
    if ('error' in result) {
      const status = result.code === 'EMAIL_EXISTS' ? 409 : 400;
      return res.status(status).json({ success: false, error: result.error });
    }

    await createSession(result.id, res);
    const user = await authService.getCurrentUser(result.id);
    return res.status(201).json({ success: true, data: { user } });
  } catch (e) {
    next(e);
  }
});

// POST /login
router.post('/login', async (req, res, next) => {
  try {
    const parse = loginSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({
        success: false,
        error: parse.error.errors[0]?.message || 'Invalid email or password',
      });
    }

    const result = await authService.login(parse.data);
    if ('error' in result) {
      return res.status(401).json({ success: false, error: result.error });
    }

    await createSession(result.id, res);
    const user = await authService.getCurrentUser(result.id);
    return res.json({ success: true, data: { user } });
  } catch (e) {
    next(e);
  }
});

// POST /logout
router.post('/logout', async (_req, res, next) => {
  try {
    await destroySession(res);
    return res.json({ success: true, message: 'Logged out successfully' });
  } catch (e) {
    next(e);
  }
});

// GET /me
router.get('/me', async (req: AuthRequest, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Not authenticated' });
    }
    const user = await authService.getCurrentUser(req.user.id);
    if (!user) {
      await destroySession(res);
      return res.status(401).json({ success: false, error: 'User session invalid' });
    }
    return res.json({ success: true, data: { user } });
  } catch (e) {
    next(e);
  }
});

export default router;
