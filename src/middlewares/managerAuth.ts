import { NextFunction, Request, Response } from 'express';
import { getUser } from '../services/userService';
import { ServerError } from '../error/serverError';
import { verifyToken } from '../services/authService';

export const managerAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization || '';
  const verifiedAccessToken = await verifyToken(token);

  if (!verifiedAccessToken) {
    return res.status(401);
  }

  const user = await getUser(verifiedAccessToken.sub);
  const isManager = user.travelAgency;

  if (!isManager) {
    return res.status(401);
  }

  next();
};
