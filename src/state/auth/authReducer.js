// src/state/auth/authReducer.js
import * as types from './authTypes';
import { createReducer } from '../utils';

const initialState = {
    token: null,
    status: null
}

export default createReducer(initialState, {
    [types.AUTH_INIT_TEST]: (state, action) => {
        return { ...state, status: "initialized"};
    },
    [types.AUTH_SPOTIFY]: (state, action) => {
        if(false){
            // TODO: check that action.state is correct with state.spotify_state
            // if it's not (false), dispatch an error - in saga?
        }
        return { ...state,
            spotify: {
                token: action.token,
                expires_in: action.expires_in,
                spotify_string: state.spotify.spotify_string
            }
        }
    },
    [types.AUTH_SPOTIFY_ERROR]: (state, action) => {
        return { ...state,
            spotify: {
                ...state.spotify,
                error: action.error
            }
        }
    }
});