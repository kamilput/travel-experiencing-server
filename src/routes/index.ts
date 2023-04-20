import { Express } from 'express';
import { bookingRoutes } from './booking';
import { tripRoutes } from './trip';
import { userRoutes } from './user';
import { dataRoutes } from './data';
import { usersRoutes } from './users';
import { authRoutes } from './auth';
import { adminAuth } from '../middlewares/adminAuth';
import { userAuth } from '../middlewares/userAuth';

export const registerRoutes = (app: Express): void => {
  app.use('/admin/trips', tripRoutes);
  app.use('/book', userAuth, bookingRoutes);
  app.use('/admin/users', adminAuth, userRoutes);
  app.use('/users', userAuth, usersRoutes);
  app.use('/data', dataRoutes);
  app.use('/login', authRoutes);
};
