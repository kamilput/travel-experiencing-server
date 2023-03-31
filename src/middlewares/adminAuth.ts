import { NextFunction, Request, Response } from 'express';
import { getUser } from '../services/userService';
import { ServerError } from '../error/serverError';
import { verifyToken } from '../services/authService';

export const adminAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const token = req.headers.authorization || '';
  const { sub } = await verifyToken(req.body);
  const user = await getUser(sub);
  const isAdmin = user.admin;

  if (!isAdmin) {
    throw new ServerError('Not manager', 401);
  }

  next();
};
