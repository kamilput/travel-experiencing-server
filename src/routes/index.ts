import { Express } from 'express';
import { bookingRoutes } from './booking';
import { tripRoutes } from './trip';
import { userRoutes } from './user';
import { dataRoutes } from './data';
import { usersRoutes } from './users';
import { authRoutes } from './auth';

export const registerRoutes = (app: Express): void => {
  app.use('/admin/trips', tripRoutes);
  app.use('/book', bookingRoutes);
  app.use('/admin/users', userRoutes);
  app.use('/users', usersRoutes);
  app.use('/data', dataRoutes);
  app.use('/login', authRoutes);
};
