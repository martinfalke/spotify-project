// src/state/search/searchSagas.js
import { fork, all, put, take, takeLatest } from 'redux-saga/effects';
import * as types from './searchTypes';
import actions from './searchActions';

function* handleSearchInit(){
    while(true){
        yield take(types.SEARCH_INIT_TEST);

        console.log("reached initial saga (search)");
    }
}

function* searchRootSaga() {
    yield all([
        takeLatest(types.SEARCH_INIT_TEST, handleSearchInit)
    ])
};

export default searchRootSaga;