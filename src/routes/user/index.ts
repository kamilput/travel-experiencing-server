import express from 'express';
const userRoutes = express.Router();
import deleteRouter from './delete';

userRoutes.delete('/', deleteRouter);

export { userRoutes };
