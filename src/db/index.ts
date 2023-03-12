import { AppDataSource } from './data-source';
import { Trip, User } from './entities';

const user1 = new User();
user1.name = 'John Snow';
user1.email = 'john.snow@example.com';
user1.admin = false;
user1.travelAgency = null;
user1.googleUserId = '';

const user2 = new User();
user2.name = 'Tyrion Lannister';
user2.email = 'tyrion.lannister@example.com';
user2.admin = false;
user2.travelAgency = null;
user2.googleUserId = '';

const user3 = new User();
user3.name = 'John Doe';
user3.email = 'john.doe@example.com';
user3.admin = false;
user3.travelAgency = 'Awesome Trips';
user3.googleUserId = '';

const user4 = new User();
user4.name = 'John Smith';
user4.email = 'john.smith@example.com';
user4.admin = true;
user4.travelAgency = null;
user4.googleUserId = '';

const user5 = new User();
user5.name = 'Mike Smith';
user5.email = 'mike.smith@example.com';
user5.admin = true;
user5.travelAgency = null;
user5.googleUserId = '';

const trip1 = new Trip();
trip1.tripName = 'Albatros Sea World';
trip1.tripDestination = 'Thailand';
trip1.tripBoard = 'All inclusive';
trip1.tripHotel = 'Palm Beach Hotel';
trip1.tripTravelAgency = 'Astonishing Destinations';
trip1.tripStartDate = new Date('06/25/2023');
trip1.tripEndDate = new Date('07/02/2023');
trip1.tripPrice = 1199;
trip1.tripImage =
  'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
trip1.tripDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
trip1.user = user1;

const trip2 = new Trip();
trip2.tripName = 'Azuline Pacific';
trip2.tripDestination = 'Spain';
trip2.tripBoard = 'Two meals';
trip2.tripHotel = 'Seaside Apartments';
trip2.tripTravelAgency = 'Wonderful Experiences';
trip2.tripStartDate = new Date('07/15/2023');
trip2.tripEndDate = new Date('07/22/2023');
trip2.tripPrice = 999;
trip2.tripImage =
  'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80';
trip2.tripDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
trip2.user = user2;

const trip3 = new Trip();
trip3.tripName = 'Diamond Hotel & SPA';
trip3.tripDestination = 'Turkey';
trip3.tripBoard = 'All inclusive';
trip3.tripHotel = 'Exclusive Hotel';
trip3.tripTravelAgency = 'Awesome Trips';
trip3.tripStartDate = new Date('08/13/2023');
trip3.tripEndDate = new Date('08/26/2023');
trip3.tripPrice = 1999;
trip3.tripImage =
  'https://images.unsplash.com/photo-1569660073216-1a6762baad6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
trip3.tripDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
trip3.user = user3;

const trip4 = new Trip();
trip4.tripName = 'Carefree Moments';
trip4.tripDestination = 'Greece';
trip4.tripBoard = 'Three meals';
trip4.tripHotel = 'Beautiful Apartments';
trip4.tripTravelAgency = 'Super Travel';
trip4.tripStartDate = new Date('08/20/2023');
trip4.tripEndDate = new Date('08/31/2023');
trip4.tripPrice = 1499;
trip4.tripImage =
  'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2704&q=80';
trip4.tripDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const trip5 = new Trip();
trip5.tripName = 'Ancient Miracles';
trip5.tripDestination = 'Italy';
trip5.tripBoard = 'Breakfast';
trip5.tripHotel = 'Stars Hotel';
trip5.tripTravelAgency = 'Safety & Relax';
trip5.tripStartDate = new Date('07/18/2023');
trip5.tripEndDate = new Date('07/26/2023');
trip5.tripPrice = 1399;
trip5.tripImage =
  'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
trip5.tripDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// const users = [user1, user2, user3, user4, user5];
// const trips = [trip1, trip2, trip3, trip4, trip5];

// const userRepository = AppDataSource.getRepository(User);
// const tripRepository = AppDataSource.getRepository(Trip);

export const initializeDatabase = (): void => {
  AppDataSource.initialize()
    .then(async () => {
      // await userRepository.insert(users);
      // await tripRepository.insert(trips);
    })
    .catch((error) => console.log(error));
};
