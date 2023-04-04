import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../services/authService';
import { ServerError } from '../error/serverError';

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization ?? '';
  const verifiedAccessToken = await verifyToken(token);

  if (!verifiedAccessToken) {
    return res.status(401);
  }

  next();
};
