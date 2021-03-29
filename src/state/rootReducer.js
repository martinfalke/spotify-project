// src/state/rootReducer.js
import { combineReducers } from "redux";
import auth from "./auth/authReducer";
// TODO: import different reducers

// TODO: add imported reducers in object
export default auth;/*combineReducers(
    { auth }
);
*/