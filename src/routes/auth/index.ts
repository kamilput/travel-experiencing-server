import express from 'express';
import postAuth from './post';

const authRoutes = express.Router();

authRoutes.use('/', postAuth);

export { authRoutes };
