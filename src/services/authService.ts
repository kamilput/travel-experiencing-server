import * as dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import { AppDataSource } from '../db/data-source';
import { User } from '../db/entities';
import { ServerError } from '../error/serverError';

dotenv.config();

export const verifyToken = async (token: string = '') => {
  const match = token.match(/Bearer (.+)/);

  if (!match) {
    return null;
  }

  const [, accessToken] = match;

  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const tokenInfo = await client.getTokenInfo(accessToken);

  const { email, sub } = tokenInfo;

  if (!email || !sub) {
    throw new ServerError('Authorization error', 401);
  }

  const userData = {
    name: email.split('@')[0],
    email,
    sub,
  };

  return userData;
};
