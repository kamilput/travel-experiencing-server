import express, { Request, Response } from 'express';
const router = express.Router();
import { fetchTrip } from '../../services/tripService';

router.get('/admin/trip/:id', async (req: Request, res: Response) => {
  const trip = await fetchTrip();
  return res.json(trip);
});

module.exports = router;
