import { Express } from 'express';
import { postBooking, deleteBooking } from './booking';
import { getTrip, postTrip, patchTrip, deleteTrip } from './trip';
import { deleteUser } from './user';

export const registerRoutes = (app: Express): void => {
  const routes = [
    postBooking,
    deleteBooking,
    getTrip,
    postTrip,
    patchTrip,
    deleteTrip,
    deleteUser,
  ];
  routes.forEach((route) => {
    console.log('Route: ', route);
  });
};
