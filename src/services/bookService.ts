import { AppDataSource } from '../db/data-source';
import { User, Trip } from '../db/entities';

export const createBooking = async (
  userId: string,
  tripId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const tripRepository = AppDataSource.getRepository(Trip);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      bookedTrips: true,
    },
  });
  const bookedTrip = await tripRepository.findOneBy({ id: tripId });

  if (!bookedTrip || !user) {
    throw new Error('no user or booked trip');
  }

  try {
    user.bookedTrips.push(bookedTrip);
  } catch (error) {
    console.log(`create error ${JSON.stringify(error)}`);
  }

  return await userRepository.save(user);
};

export const deleteBooking = async (
  userId: string,
  tripId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const tripRepository = AppDataSource.getRepository(Trip);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      bookedTrips: true,
    },
  });
  const bookedTripToRemove = await tripRepository.findOneBy({ id: tripId });

  if (!bookedTripToRemove || !user) {
    throw new Error('no user or booked trip');
  }

  user.bookedTrips.filter(
    (bookedTrip) => bookedTrip.id !== bookedTripToRemove.id
  );

  return await userRepository.save(user);
};
