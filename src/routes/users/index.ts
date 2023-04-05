import express from 'express';
import getRouter from './get';

const usersRoutes = express.Router();

usersRoutes.use('/', getRouter);

export { usersRoutes };
