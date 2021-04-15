// src/state/auth/authActions.js
import { createAction } from '../utils';
import * as types from './authTypes';

export default {
    initAuth: () => createAction(types.AUTH_INIT_TEST),
    saveSpotifyToken: (token, expires_in, spotify_string) => createAction(types.AUTH_SPOTIFY, {token, expires_in, spotify_string}),
    saveSpotifyTokenError: (error) => createAction(types.AUTH_SPOTIFY_ERROR, {error}),
    setSpotifyState: (spotify_string) => createAction(types.AUTH_SPOTIFY_SET_STATE, {spotify_string}),
}