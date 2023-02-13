import express from 'express';
const tripRoutes = express.Router();
import getTrip from './get';
import postTrip from './post';
import patchTrip from './patch';
import deleteTrip from './delete';

tripRoutes.get('/', getTrip);
tripRoutes.post('/', postTrip);
tripRoutes.patch('/', patchTrip);
tripRoutes.delete('/', deleteTrip);

export { tripRoutes };
