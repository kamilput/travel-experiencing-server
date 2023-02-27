import express from 'express';
import { createBooking } from '../../services/bookService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, tripId } = req.body;
    const booking = await createBooking(userId, tripId);
    return res.json(booking);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
