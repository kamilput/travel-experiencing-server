import express from 'express';
const bookingRoutes = express.Router();
import deleteBooking from './delete';
import postBooking from './post';

bookingRoutes.post('/', postBooking);
bookingRoutes.delete('/', deleteBooking);

export { bookingRoutes };
