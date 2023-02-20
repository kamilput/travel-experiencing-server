import express, { Request, Response } from 'express';
import { removeTrip } from '../../services/tripService';

const router = express.Router();

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const trip = await removeTrip();
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
