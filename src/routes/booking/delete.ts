import express from 'express';
import { deleteBooking } from '../../services/bookService';

const router = express.Router();

router.delete('/', async (req, res) => {
  try {
    const { userId, tripId } = req.body;
    const booking = await deleteBooking(userId, tripId);
    return res.json(booking);
  } catch (error) {
    return res.status(500).json(`error in deleting booking, ${error}`);
  }
});

export default router;
