import express, { Request, Response } from 'express';
import { createTrip } from '../../services/tripService';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  try {
    const trip = await createTrip();
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
