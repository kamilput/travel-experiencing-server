import express, { Request, Response } from 'express';
const router = express.Router();
import { createTrip } from '../../services/tripService';

router.post('/admin/trip/create', async (req: Request, res: Response) => {
  const trip = await createTrip();
  return res.json(trip);
});

module.exports = router;
