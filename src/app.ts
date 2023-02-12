import express from 'express';
import bodyParser from 'body-parser';
import { registerRoutes } from './routes';

const app = express();

app.use(bodyParser.json());
registerRoutes(app);

const port = 4000;

app.get('/', (req, res) => {
  res.send('Server is running properly!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
