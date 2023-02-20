import express from 'express';
const dataRoutes = express.Router();

import getData from './get';

dataRoutes.use('/', getData);

export { dataRoutes };
