import { Express } from 'express';
import { bookingRoutes } from './booking';
import { tripRoutes } from './trip';
import { userRoutes } from './user';

export const registerRoutes = (app: Express): void => {
  app.use('/admin/trip', tripRoutes);
  app.use('/book', bookingRoutes);
  app.use('/admin/users', userRoutes);
};
