import express from 'express';
const usersRoutes = express.Router();

import getRouter from './get';

usersRoutes.use('/', getRouter);

export { usersRoutes };
