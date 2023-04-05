import express from 'express';
import getTrip from './get';
import postTrip from './post';
import patchTrip from './patch';
import deleteTrip from './delete';

const tripRoutes = express.Router();

tripRoutes.use('/', getTrip);
tripRoutes.use('/', postTrip);
tripRoutes.use('/', patchTrip);
tripRoutes.use('/', deleteTrip);

export { tripRoutes };
