import { AppDataSource } from '../db/data-source';
import { User, Trip } from '../db/entities';
import { ServerError } from '../error/serverError';

export const getAllUsers = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users;
};

export const getUser = async (userGoogleId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ googleUserId: userGoogleId });

  if (!user) {
    throw new ServerError('User does not exist', 401);
  }

  return user;
};

export const deleteUser = async (userId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new Error('no user');
  }

  return await userRepository.remove(user);
};

export const getUserTrips = async (userId: string): Promise<Trip[]> => {
  const tripRepository = AppDataSource.getRepository(Trip);

  const trips = await tripRepository.find({
    relations: {
      user: true,
    },
    where: {
      user: {
        id: userId,
      },
    },
  });

  if (!trips) {
    throw new Error('no trips');
  }

  return trips;
};

export const getUserBookings = async (userId: string): Promise<Trip[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      bookedTrips: true,
    },
  });

  if (!user) {
    throw new Error('no user');
  }

  const bookings = user.bookedTrips;

  return bookings;
};

export const getOrRegisterUser = async (userData: any) => {
  const { name, email, sub } = userData;

  const userRepository = await AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ googleUserId: sub });

  if (user) {
    return user;
  }

  const newUser = new User();

  newUser.name = name;
  newUser.email = email;
  newUser.admin = false;
  newUser.travelAgency = null;
  newUser.googleUserId = sub;

  await userRepository.insert(newUser);

  return newUser;
};
