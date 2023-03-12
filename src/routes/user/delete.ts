import express, { Request, Response } from 'express';
import { deleteUser } from '../../services/userService';

const router = express.Router();

router.delete('/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await deleteUser(userId);
    return res.json(user);
  } catch (error) {
    return res.status(500).json(`error in deleting user, ${error}`);
  }
});

export default router;
