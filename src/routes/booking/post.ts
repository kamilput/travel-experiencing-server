import express from 'express';
const router = express.Router();
import { createBooking } from '../../services/bookService';

router.post('/', async (req, res) => {
  const booking = await createBooking();
  return res.json(booking);
});

export default router;
