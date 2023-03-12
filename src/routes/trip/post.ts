import express, { Request, Response } from 'express';
import { createTrip } from '../../services/tripService';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const trip = await createTrip(data);
    return res.json(trip);
  } catch (error) {
    return res.status(500).json(`error in creating trip, ${error}`);
  }
});

export default router;
