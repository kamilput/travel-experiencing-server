import express from 'express';
import { createBooking } from '../../services/bookService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const booking = await createBooking();
    return res.json(booking);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
