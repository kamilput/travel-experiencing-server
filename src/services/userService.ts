import { AppDataSource } from '../db/data-source';
import { User, Trip } from '../db/entities';

export const getAllUsers = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users;
};

export const deleteUser = async (userId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ userId: userId });

  if (!user) {
    throw Error;
  }

  return userRepository.remove(user);
};

export const getUserTrips = async (userId: string): Promise<Trip[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ userId: userId });

  if (!user) {
    throw Error;
  }

  const userTrips = user.createdTrips;

  return userTrips;
};

export const getUserBookings = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ userId: userId });

  if (!user) {
    throw Error;
  }

  const userBookings = user.bookedTrips;

  return userBookings;
};
