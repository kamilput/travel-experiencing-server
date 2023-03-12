import express from 'express';
import deleteBooking from './delete';
import postBooking from './post';

const bookingRoutes = express.Router();

bookingRoutes.use('/', postBooking);
bookingRoutes.use('/', deleteBooking);

export { bookingRoutes };
