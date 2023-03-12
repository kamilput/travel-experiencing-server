import express from 'express';
import getData from './get';

const dataRoutes = express.Router();

dataRoutes.use('/', getData);

export { dataRoutes };
