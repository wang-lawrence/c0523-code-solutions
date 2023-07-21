/* eslint-disable no-unused-vars -- Remove me */
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authMiddleware(req, res, next) {
  /* your code here */
  try {
    if (!req.get('Authorization'))
      throw new ClientError(401, 'authentication required');
    const auth = req.get('Authorization');
    const token = auth.split('Bearer ')[1];
    if (!token) throw new ClientError(401, 'authentication required');
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
}

/*
 * Get the 'Authorization' header from the request.
 * Parse the token from the header; e.g., auth.split('Bearer ')[1]
 * If no header or no token is provided,
 *   throw a 401 error with the message 'authentication required'
 * Use jwt.verify() to verify the authenticity of the token and extract its payload.
 * Assign the extracted payload to the user property of the req object.
 * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
 *
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
