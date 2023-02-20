import express from 'express';
import { removeBooking } from '../../services/bookService';

const router = express.Router();

router.delete('/', async (req, res) => {
  try {
    const booking = await removeBooking();
    return res.json(booking);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
