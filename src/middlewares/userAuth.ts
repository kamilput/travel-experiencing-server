import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../services/authService';
import { ServerError } from '../error/serverError';

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const token = req.headers.authorization || '';
  const verifiedAccessToken = await verifyToken(req.body);
  if (!verifiedAccessToken) {
    throw new ServerError('Not logged in', 401);
  }

  next();
};
