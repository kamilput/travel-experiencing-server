import { NextFunction, Request, Response } from 'express';
import { getUser } from '../services/userService';
import { ServerError } from '../error/serverError';

export const managerAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const token = req.headers.authorization || '';
  // const isManager = await getUser(token).travelAgency;
  //
  // if (!isManager) {
  //   throw new ServerError('Not manager', 401);
  // }

  next();
};
