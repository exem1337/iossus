import crypto from 'crypto';
import * as jose from 'jose';

require('dotenv').config();

export default class HashService {
  public encrypt(target) {
    return crypto.createHash('sha1').update(target).digest('hex');
  }
  public async getToken(payload: {id, username, typeId, statusId}) {
    const secret = new TextEncoder().encode(process.env.SECRET);
    const alg = 'HS256';
    const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime('24h')
    .sign(secret);
    return jwt;
  }
};