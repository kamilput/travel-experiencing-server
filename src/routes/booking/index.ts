import express from 'express';
const bookingRoutes = express.Router();
import * as deleteBooking from './delete';
import * as postBooking from './post';

bookingRoutes.post('/book', postBooking);
bookingRoutes.delete('/book', deleteBooking);

export { bookingRoutes };
