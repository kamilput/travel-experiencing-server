import express, { Request, Response } from 'express';
import { getUserTrips, getUserBookings } from '../../services/userService';

const router = express.Router();

router.get('/:userId/bookings', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userBookings = await getUserBookings(userId);
    return res.json(userBookings);
  } catch (error) {
    return res.status(500).json(`error in fetching user bookings, ${error}`);
  }
});

router.get('/:userId/trips', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userTrips = await getUserTrips(userId);
    return res.json(userTrips);
  } catch (error) {
    return res.status(500).json(`error in fetching user trips, ${error}`);
  }
});

export default router;
