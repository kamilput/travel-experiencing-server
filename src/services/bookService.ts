import { AppDataSource } from '../db/data-source';
import { User, Trip } from '../db/entities';

export const createBooking = async (
  userId: string,
  tripId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const tripRepository = AppDataSource.getRepository(Trip);
  const user = await userRepository.findOneBy({ userId: userId });
  const bookedTrip = await tripRepository.findOneBy({ id: tripId });

  if (!bookedTrip || !user) {
    throw Error;
  }

  user.bookedTrips.push(bookedTrip);

  return await userRepository.save(user);
};

export const deleteBooking = async (
  userId: string,
  tripId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ userId: userId });

  if (!user) {
    throw Error;
  }

  user.bookedTrips.filter((bookedTrip) => {
    return bookedTrip.id !== tripId;
  });

  return await userRepository.save(user);
};
