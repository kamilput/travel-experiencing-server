import express, { Request, Response } from 'express';
const router = express.Router();
import { createTrip } from '../../services/tripService';

router.post('/create', async (req: Request, res: Response) => {
  const trip = await createTrip();
  return res.json(trip);
});

export default router;
