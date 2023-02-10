import express, { Request, Response } from 'express';
const router = express.Router();
import { removeUser } from '../../services/userService';

router.delete('/admin/users', async (req: Request, res: Response) => {
  const user = await removeUser();
  return res.json(user);
});

module.exports = router;
