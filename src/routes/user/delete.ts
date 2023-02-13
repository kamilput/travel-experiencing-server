import express, { Request, Response } from 'express';
const router = express.Router();
import { removeUser } from '../../services/userService';

router.delete('/', async (req: Request, res: Response) => {
  const user = await removeUser();
  return res.json(user);
});

export default router;
