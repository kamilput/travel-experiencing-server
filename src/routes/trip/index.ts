import express from 'express';
import getTrip from './get';
import postTrip from './post';
import patchTrip from './patch';
import deleteTrip from './delete';
import { managerAuth } from '../../middlewares/managerAuth';

const tripRoutes = express.Router();

tripRoutes.use('/', getTrip);
tripRoutes.use('/', managerAuth, postTrip);
tripRoutes.use('/', managerAuth, patchTrip);
tripRoutes.use('/', managerAuth, deleteTrip);

export { tripRoutes };
