import express, { Request, Response } from 'express';
import { fetchTrip } from '../../services/tripService';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { tripId } = req.body;
    const trip = await fetchTrip(tripId);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
