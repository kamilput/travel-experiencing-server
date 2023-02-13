import express from 'express';
const tripRoutes = express.Router();
import * as getTrip from './get';
import * as postTrip from './post';
import * as patchTrip from './patch';
import * as deleteTrip from './delete';

tripRoutes.get('/admin/trip/:id', getTrip);
tripRoutes.post('/admin/trip/create', postTrip);
tripRoutes.patch('/admin/trip/:id', patchTrip);
tripRoutes.delete('/admin/trip/:id', deleteTrip);

export { tripRoutes };
