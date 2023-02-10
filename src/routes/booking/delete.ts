import express from 'express';
const router = express.Router();
import { removeBooking } from '../../services/bookService';

router.delete('/book', async (req, res) => {
  const booking = await removeBooking();
  return res.json(booking);
});

module.exports = router;
