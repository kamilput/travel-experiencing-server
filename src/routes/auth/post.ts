import express from 'express';
import { verifyToken, getOrRegisterUser } from '../../services/authService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userGoogleId = await verifyToken(req.headers.authorization);
    const user = await getOrRegisterUser(userGoogleId);
    return res.json(user);
  } catch (error) {
    return res.status(500).json(`error in posting token, ${error}`);
  }
});

export default router;
