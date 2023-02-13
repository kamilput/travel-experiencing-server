import express, { Request, Response } from 'express';
const router = express.Router();
import { fetchTrip } from '../../services/tripService';

router.get('/:id', async (req: Request, res: Response) => {
  const trip = await fetchTrip();
  return res.json(trip);
});

export default router;
