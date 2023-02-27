import express, { Request, Response } from 'express';
import { deleteUser } from '../../services/userService';

const router = express.Router();

router.delete('/', async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user = await deleteUser(userId);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
