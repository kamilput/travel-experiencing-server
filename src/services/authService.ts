import * as dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import { AppDataSource } from '../db/data-source';
import { User } from '../db/entities';
import { ServerError } from '../error/serverError';

dotenv.config();

export const verifyToken = async (token: any) => {
  const { access_token, token_type } = token;
  const match = token_type === 'Bearer';

  if (!match) {
    throw new ServerError('Authorization error', 401);
  }

  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const tokenInfo = await client.getTokenInfo(access_token);

  // const ticket = await client.verifyIdToken({
  //   idToken: access_token,
  //   audience: process.env.GOOGLE_CLIENT_ID,
  // });
  //
  // const payload = ticket.getPayload();
  // const userGoogleId = payload?.['sub'];

  const { email, sub } = tokenInfo;

  if (!email || !sub) {
    throw new ServerError('Authorization error', 401);
  }

  const userData = {
    // name,
    email,
    sub,
  };

  return userData;
};

export const getOrRegisterUser = async (userData: any) => {
  const { email, sub } = userData;

  const userRepository = await AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ googleUserId: sub });

  if (user) {
    return user;
  }

  const newUser = new User();

  newUser.name = 'TEST';
  newUser.email = email;
  newUser.admin = false;
  newUser.travelAgency = null;
  newUser.googleUserId = sub;

  await userRepository.insert(newUser);

  return newUser;
};
