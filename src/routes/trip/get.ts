import express, { Request, Response } from 'express';
import { fetchAllTrips, fetchTrip } from '../../services/tripService';

const router = express.Router();

router.get('/:tripId', async (req: Request, res: Response) => {
  try {
    const { tripId } = req.params;
    const trip = await fetchTrip(tripId);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json(`error in fetching single trip, ${error}`);
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const trip = await fetchAllTrips();
    return res.json(trip);
  } catch (error) {
    return res.status(500).json(`error in fetching all trips, ${error}`);
  }
});

export default router;
