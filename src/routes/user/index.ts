import express from 'express';
const userRoutes = express.Router();
import * as deleteUser from './delete';

userRoutes.delete('/admin/users', deleteUser);

export { userRoutes };
