import { InsertResult } from 'typeorm';
import { AppDataSource } from '../db/data-source';
import { User, Trip } from '../db/entities';
import { TripData } from '../config/types';

export const fetchTrip = async (tripId: string): Promise<Trip> => {
  const tripRepository = AppDataSource.getRepository(Trip);
  const trip = await tripRepository.findOneBy({ id: tripId });

  if (!trip) {
    throw Error;
  }

  return trip;
};

export const createTrip = async (data: TripData): Promise<InsertResult> => {
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
  const user = await userRepository.findOneBy({ userId: userId });

  if (!user) {
    throw Error;
  }

  const trip = new Trip();
  trip.name = tripName;
  trip.destination = tripDestination;
  trip.board = tripBoard;
  trip.hotel = tripHotel;
  trip.travelAgency = tripTravelAgency;
  trip.startDate = tripStartDate;
  trip.endDate = tripEndDate;
  trip.price = tripPrice;
  trip.description = tripDescription;
  trip.image = tripImage;
  trip.user = user;

  user.createdTrips.push(trip);
  // await AppDataSource.manager.save(user);
  await userRepository.save(user);
  return await tripRepository.insert(trip);
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
    userId,
  } = data;
  const tripRepository = AppDataSource.getRepository(Trip);
  const trip = await tripRepository.findOneBy({ id: tripId });

  if (!trip) {
    throw Error;
  }

  trip.name = tripName;
  trip.destination = tripDestination;
  trip.board = tripBoard;
  trip.hotel = tripHotel;
  trip.travelAgency = tripTravelAgency;
  trip.startDate = tripStartDate;
  trip.endDate = tripEndDate;
  trip.price = tripPrice;
  trip.description = tripDescription;
  trip.image = tripImage;

  return await tripRepository.save(trip);
};

export const deleteTrip = async (
  tripId: string,
  userId: string
): Promise<Trip> => {
  const tripRepository = AppDataSource.getRepository(Trip);
  const userRepository = AppDataSource.getRepository(User);
  const trip = await tripRepository.findOneBy({ id: tripId });
  const user = await userRepository.findOneBy({ userId: userId });

  if (!trip || !user) {
    throw Error;
  }

  user.createdTrips.filter((bookedTrip) => {
    return bookedTrip.id !== tripId;
  });

  await userRepository.save(user);
  return await tripRepository.remove(trip);
};
