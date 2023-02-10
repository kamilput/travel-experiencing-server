import express, { Request, Response } from 'express';
const router = express.Router();
import { editTrip } from '../../services/tripService';

router.patch('/admin/trip/:id', async (req: Request, res: Response) => {
  const trip = await editTrip();
  return res.json(trip);
});

module.exports = router;
