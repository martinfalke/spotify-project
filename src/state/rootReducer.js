// src/state/rootReducer.js
import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import search from './search/searchReducer';
// TODO: import different reducers

// TODO: add imported reducers in object
export default combineReducers(
    { auth, search }
);