import * as dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';
import { ServerError } from '../error/serverError';
import { TokenUserData } from './types';

dotenv.config();

export const verifyToken = async (
  token: string = ''
): Promise<TokenUserData | null> => {
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
