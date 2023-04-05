import { fetchAllTrips } from './tripService';
import { GetDataI } from '../routes/types';
import { Data } from '../config/types';

export const getData = async (data: Data): Promise<GetDataI> => {
  const trips = await fetchAllTrips();

  const { board, destinations, hotels, travelAgencies } = data;

  return {
    board,
    destinations,
    hotels,
    travelAgencies,
    trips,
  };
};
