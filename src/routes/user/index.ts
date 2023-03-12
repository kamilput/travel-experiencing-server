import express from 'express';
import deleteRouter from './delete';
import getRouter from './get';

const userRoutes = express.Router();

userRoutes.use('/', getRouter);
userRoutes.use('/', deleteRouter);

export { userRoutes };
