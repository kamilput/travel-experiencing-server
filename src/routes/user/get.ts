import express, { Request, Response } from 'express';
import { getAllUsers } from '../../services/userService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
