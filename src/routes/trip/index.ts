import express from 'express';
const tripRoutes = express.Router();
import getTrip from './get';
import postTrip from './post';
import patchTrip from './patch';
import deleteTrip from './delete';

tripRoutes.use('/', getTrip);
tripRoutes.use('/', postTrip);
tripRoutes.use('/', patchTrip);
tripRoutes.use('/', deleteTrip);

export { tripRoutes };
