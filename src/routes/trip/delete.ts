import express, { Request, Response } from 'express';
import { deleteTrip } from '../../services/tripService';

const router = express.Router();

router.delete('/:tripId', async (req: Request, res: Response) => {
  try {
    const { tripId } = req.params;
    const trip = await deleteTrip(tripId);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json(`error in deleting trip, ${error}`);
  }
});

export default router;
