import express, { Request, Response } from 'express';
const router = express.Router();
import { removeTrip } from '../../services/tripService';

router.delete('/:id', async (req: Request, res: Response) => {
  const trip = await removeTrip();
  return res.json(trip);
});

export default router;
