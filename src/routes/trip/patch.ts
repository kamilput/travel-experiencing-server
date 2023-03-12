import express, { Request, Response } from 'express';
import { editTrip } from '../../services/tripService';

const router = express.Router();

router.patch('/:tripId', async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const { tripId } = req.params;
    const trip = await editTrip(tripId, data);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json(`error in editing trip, ${error}`);
  }
});

export default router;
