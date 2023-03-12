import { AppDataSource } from '../db/data-source';
import { User, Trip } from '../db/entities';
import { TripData } from '../config/types';

export const fetchTrip = async (tripId: string): Promise<Trip> => {
  const tripRepository = AppDataSource.getRepository(Trip);
  const trip = await tripRepository.findOneBy({ id: tripId });

  if (!trip) {
    throw new Error('no trip');
  }

  return trip;
};

export const fetchAllTrips = async (): Promise<Trip[]> => {
  const tripRepository = AppDataSource.getRepository(Trip);
  const trips = await tripRepository.find();

  if (trips.length === 0) {
    throw new Error('no trips');
  }

  return trips;
};

export const createTrip = async (data: TripData): Promise<Trip> => {
  const {
    tripName,
    tripPrice,
    tripBoard,
    tripDestination,
    tripHotel,
    tripTravelAgency,
    tripImage,
    tripStartDate,
    tripEndDate,
    tripDescription,
    userId,
  } = data;
  const tripRepository = AppDataSource.getRepository(Trip);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new Error('no user');
  }

  const trip = new Trip();
  trip.tripName = tripName;
  trip.tripDestination = tripDestination;
  trip.tripBoard = tripBoard;
  trip.tripHotel = tripHotel;
  trip.tripTravelAgency = tripTravelAgency;
  trip.tripStartDate = tripStartDate;
  trip.tripEndDate = tripEndDate;
  trip.tripPrice = tripPrice;
  trip.tripDescription = tripDescription;
  trip.tripImage = tripImage;
  trip.user = user;

  await tripRepository.insert(trip);

  return trip;
};

export const editTrip = async (
  tripId: string,
  data: TripData
): Promise<Trip> => {
  const {
    tripName,
    tripPrice,
    tripBoard,
    tripDestination,
    tripHotel,
    tripTravelAgency,
    tripImage,
    tripStartDate,
    tripEndDate,
    tripDescription,
  } = data;
  const tripRepository = AppDataSource.getRepository(Trip);
  const trip = await tripRepository.findOneBy({ id: tripId });

  if (!trip) {
    throw new Error('no trip');
  }

  trip.tripName = tripName;
  trip.tripDestination = tripDestination;
  trip.tripBoard = tripBoard;
  trip.tripHotel = tripHotel;
  trip.tripTravelAgency = tripTravelAgency;
  trip.tripStartDate = tripStartDate;
  trip.tripEndDate = tripEndDate;
  trip.tripPrice = tripPrice;
  trip.tripDescription = tripDescription;
  trip.tripImage = tripImage;

  return await tripRepository.save(trip);
};

export const deleteTrip = async (tripId: string): Promise<Trip> => {
  const tripRepository = AppDataSource.getRepository(Trip);
  const trip = await tripRepository.findOneBy({ id: tripId });

  if (!trip) {
    throw new Error('no trip');
  }

  return await tripRepository.remove(trip);
};
