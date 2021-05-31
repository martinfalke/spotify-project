// src/state/auth/authReducer.js
import * as types from './authTypes';
import { createExpirationDate, createReducer } from '../utils';

const initialState = {
    status: null,
    spotify: {
        token: null,
        expires_in: 0,
        spotify_string: null,
        error: null
    }
}

export default createReducer(initialState, {
    [types.AUTH_INIT_TEST]: (state, action) => {
        return { ...state, status: "OK"};
    },
    [types.AUTH_SPOTIFY]: (state, action) => {
        localStorage.setItem("spotifyToken", action.token);
        localStorage.setItem("spotifyExpiration", createExpirationDate(3600-5).toUTCString()); // set expiration of token to 1 hour minus 5 seconds
        return { ...state,
            spotify: {
                token: action.token,
                expires_in: action.expires_in || state.spotify.expires_in,
                spotify_string: state.spotify.spotify_string,
                error: null
            }
        }
    },
    [types.AUTH_SPOTIFY_ERROR]: (state, action) => {
        return { ...state,
            spotify: {
                token: null,
                expires_in: null,
                spotify_string: state.spotify.spotify_string,
                error: action.error
            }
        }
    },
    [types.AUTH_SPOTIFY_SET_STATE]: (state, action) => {
        localStorage.setItem("spotifyState", action.spotify_string);
        return { ...state,
            spotify: {
                ...state.spotify,
                spotify_string: action.spotify_string
            }
        }
    },
    [types.AUTH_SPOTIFY_LOGOUT]: (state, action) => {
        localStorage.removeItem("spotifyToken");
        localStorage.removeItem("spotifyExpiration");
        return {
            ...initialState
        }
    }
});