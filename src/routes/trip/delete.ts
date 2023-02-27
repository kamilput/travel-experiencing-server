import express, { Request, Response } from 'express';
import { deleteTrip } from '../../services/tripService';

const router = express.Router();

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { tripId, userId } = req.body;
    const trip = await deleteTrip(tripId, userId);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
