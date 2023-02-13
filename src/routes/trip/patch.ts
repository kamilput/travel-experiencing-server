import express, { Request, Response } from 'express';
const router = express.Router();
import { editTrip } from '../../services/tripService';

router.patch('/:id', async (req: Request, res: Response) => {
  const trip = await editTrip();
  return res.json(trip);
});

export default router;
