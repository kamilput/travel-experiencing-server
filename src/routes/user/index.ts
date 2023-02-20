import express from 'express';
const userRoutes = express.Router();
import deleteRouter from './delete';
import getRouter from './get';

userRoutes.use('/', getRouter);
userRoutes.use('/', deleteRouter);

export { userRoutes };
