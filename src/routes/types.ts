import { Trip } from '../db/entities';
import { Board, Destinations, Hotels, TravelAgencies } from '../config/types';

export interface GetDataI {
  board: Board[];
  destinations: Destinations[];
  hotels: Hotels[];
  travelAgencies: TravelAgencies[];
  trips: Trip[];
}
