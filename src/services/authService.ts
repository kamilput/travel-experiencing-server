import * as dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import { AppDataSource } from '../db/data-source';
import { User } from '../db/entities';
import { ServerError } from '../error/serverError';

dotenv.config();

export const verifyToken = async (authorizationHeaders: any) => {
  const authToken = authorizationHeaders || '';
  const match = authToken.match(/Bearer (.+)/);

  if (!match) {
    throw new ServerError('Authorization error', 401);
  }

  const [, accessToken] = match;

  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const ticket = await client.verifyIdToken({
    idToken: accessToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userGoogleId = payload?.['sub'];

  return userGoogleId;
};

export const getOrRegisterUser = async (userGoogleId: any) => {
  const userRepository = await AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ googleUserId: userGoogleId });

  if (user) {
    return user;
  }

  const newUser = new User();

  // TODO fill in user data

  await userRepository.insert(newUser);

  return newUser;
};
