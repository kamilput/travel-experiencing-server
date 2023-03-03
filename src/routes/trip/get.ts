import express, { Request, Response } from 'express';
import {fetchAllTrips, fetchTrip} from '../../services/tripService';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    // const { tripId } = req.body;
    const tripId = req.params.id;
    const trip = await fetchTrip(tripId);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const trip = await fetchAllTrips();
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
