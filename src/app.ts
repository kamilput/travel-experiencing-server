import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import { registerRoutes } from './routes';
import { initializeDatabase } from './db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

registerRoutes(app);

initializeDatabase();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Server is running properly!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
