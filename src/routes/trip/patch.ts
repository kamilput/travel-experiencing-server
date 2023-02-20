import express, { Request, Response } from 'express';
import { editTrip } from '../../services/tripService';

const router = express.Router();

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const trip = await editTrip();
    return res.json(trip);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
