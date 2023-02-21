import express, { Request, Response } from 'express';
import { getData } from '../../services/dataService';
import { data as configData } from "../../config";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await getData(configData);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
