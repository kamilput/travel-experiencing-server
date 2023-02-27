export type TravelAgencies =
  | 'Super Travel'
  | 'Awesome Trips'
  | 'Astonishing Destinations'
  | 'Safety & Relax'
  | 'Wonderful Experiences';

export type Board =
  | 'No board'
  | 'Breakfast'
  | 'Supper'
  | 'Two meals'
  | 'Three meals'
  | 'All inclusive';

export type Hotels =
  | 'Exclusive Hotel'
  | 'Beautiful Apartments'
  | 'Seaside Apartments'
  | 'Stars Hotel'
  | 'Palm Beach Hotel';

export type Destinations = 'Spain' | 'Italy' | 'Greece' | 'Turkey' | 'Thailand';

export interface Data {
  board: Board[];
  destinations: Destinations[];
  hotels: Hotels[];
  travelAgencies: TravelAgencies[];
}

export interface TripData {
  tripName: string;
  tripPrice: number;
  tripBoard: Board;
  tripDestination: Destinations;
  tripHotel: Hotels;
  tripTravelAgency: TravelAgencies;
  tripImage: string;
  tripStartDate: Date;
  tripEndDate: Date;
  tripDescription: string;
  userId: string;
}
