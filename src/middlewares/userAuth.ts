import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../services/authService';

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token = req.headers.authorization ?? '';
  const verifiedAccessToken = await verifyToken(token);

  if (!verifiedAccessToken) {
    return res.status(401);
  }

  next();
};
