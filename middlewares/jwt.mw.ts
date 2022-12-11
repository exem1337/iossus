import * as jose from "jose";

require("dotenv").config();

export async function checkJWT(token) {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET);
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
  } catch (e) {
    return null;
  }
}
