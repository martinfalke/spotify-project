// src/api/spotifyUser.js
import { spotifyApiCall } from './spotifyUtil';

const getCurrentUser = (token) => {
    return spotifyApiCall(token, '/me');
}

export { getCurrentUser };