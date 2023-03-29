import { NextFunction, Request, Response } from 'express';
import { getUser } from '../services/userService';
import { ServerError } from '../error/serverError';

export const adminAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const token = req.headers.authorization || '';
  // const isAdmin = await getUser(token).admin;
  //
  // if (!isAdmin) {
  //   throw new ServerError('Not manager', 401);
  // }

  next();
};
