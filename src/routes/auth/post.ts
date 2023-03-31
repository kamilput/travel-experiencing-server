import express from 'express';
import { verifyToken, getOrRegisterUser } from '../../services/authService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // const userGoogleId = await verifyToken(req.headers.authorization);
    const userData = await verifyToken(req.body);
    const user = await getOrRegisterUser(userData);
    return res.json(user);
  } catch (error) {
    return res.status(500).json(`error in posting token, ${error}`);
  }
});

export default router;
