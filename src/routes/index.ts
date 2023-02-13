import express, { Express } from 'express';
const apiRoutes = express.Router();
import { bookingRoutes } from './booking';
import { tripRoutes } from './trip';
import { userRoutes } from './user';

export const registerRoutes = (app: Express): void => {
  apiRoutes.use('/admin/trip', tripRoutes);
  apiRoutes.use('/book', bookingRoutes);
  apiRoutes.use('/admin/users', userRoutes);
};
