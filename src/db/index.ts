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
trip1.name = 'Albatros Sea World';
trip1.destination = 'Thailand';
trip1.board = 'All inclusive';
trip1.hotel = 'Palm Beach Hotel';
trip1.travelAgency = 'Astonishing Destinations';
trip1.startDate = '06/25/2023';
trip1.endDate = '07/02/2023';
trip1.price = 1199;
trip1.image =
  'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
trip1.description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
trip1.user = user1;

const trip2 = new Trip();
trip2.name = 'Azuline Pacific';
trip2.destination = 'Spain';
trip2.board = 'Two meals';
trip2.hotel = 'Seaside Apartments';
trip2.travelAgency = 'Wonderful Experiences';
trip2.startDate = '07/15/2023';
trip2.endDate = '07/22/2023';
trip2.price = 999;
trip2.image =
  'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80';
trip2.description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
trip2.user = user2;

const trip3 = new Trip();
trip3.name = 'Diamond Hotel & SPA';
trip3.destination = 'Turkey';
trip3.board = 'All inclusive';
trip3.hotel = 'Exclusive Hotel';
trip3.travelAgency = 'Awesome Trips';
trip3.startDate = '08/13/2023';
trip3.endDate = '08/26/2023';
trip3.price = 1999;
trip3.image =
  'https://images.unsplash.com/photo-1569660073216-1a6762baad6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
trip3.description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
trip3.user = user2;

const trip4 = new Trip();
trip4.name = 'Carefree Moments';
trip4.destination = 'Greece';
trip4.board = 'Three meals';
trip4.hotel = 'Beautiful Apartments';
trip4.travelAgency = 'Super Travel';
trip4.startDate = '08/20/2023';
trip4.endDate = '08/31/2023';
trip4.price = 1499;
trip4.image =
  'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2704&q=80';
trip4.description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const trip5 = new Trip();
trip5.name = 'Ancient Miracles';
trip5.destination = 'Italy';
trip5.board = 'Breakfast';
trip5.hotel = 'Stars Hotel';
trip5.travelAgency = 'Safety & Relax';
trip5.startDate = '07/18/2023';
trip5.endDate = '07/26/2023';
trip5.price = 1399;
trip5.image =
  'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80';
trip5.description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const items = [
  user1,
  user2,
  user3,
  user4,
  user5,
  trip1,
  trip2,
  trip3,
  trip4,
  trip5,
];

export const initializeDatabase = () => {
  AppDataSource.initialize()
    .then(async () => {
      for (let item of items) {
        await AppDataSource.manager.save(item);
      }
    })
    .catch((error) => console.log(error));
};
