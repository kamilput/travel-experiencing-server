import express from 'express';
const bookingRoutes = express.Router();
import deleteBooking from './delete';
import postBooking from './post';

bookingRoutes.use('/', postBooking);
bookingRoutes.use('/', deleteBooking);

export { bookingRoutes };
