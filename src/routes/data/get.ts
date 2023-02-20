import express, { Request, Response } from 'express';
import { getData } from '../../services/dataService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await getData();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
