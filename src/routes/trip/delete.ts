import express, { Request, Response } from 'express';
const router = express.Router();
import { removeTrip } from '../../services/tripService';

router.delete('/admin/trip/:id', async (req: Request, res: Response) => {
  const trip = await removeTrip();
  return res.json(trip);
});

module.exports = router;
