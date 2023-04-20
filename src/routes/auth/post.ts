import express from 'express';
import { verifyToken } from '../../services/authService';
import { getOrRegisterUser } from '../../services/userService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userData = await verifyToken(req.headers.authorization);
    const user = await getOrRegisterUser(userData);
    return res.json(user);
  } catch (error) {
    return res.status(500).json(`error in login, ${error}`);
  }
});

export default router;
