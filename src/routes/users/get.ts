import express, { Request, Response } from 'express';
import { getUserTrips, getUserBookings } from '../../services/userService';

const router = express.Router();

router.get('/:id/bookings', async (req: Request, res: Response) => {
  try {
    const userBookings = await getUserBookings();
    return res.json(userBookings);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.get('/:id/trips', async (req: Request, res: Response) => {
  try {
    const userTrips = await getUserTrips();
    return res.json(userTrips);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
