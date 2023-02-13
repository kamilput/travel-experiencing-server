import express from 'express';
const router = express.Router();
import { removeBooking } from '../../services/bookService';

router.delete('/', async (req, res) => {
  const booking = await removeBooking();
  return res.json(booking);
});

export default router;
