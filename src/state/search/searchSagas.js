// src/state/search/searchSagas.js
import { call, select, all, put, take, takeLatest } from 'redux-saga/effects';
import * as types from './searchTypes';
import actions from './searchActions';
import { getSearchResults } from "../../api/spotifySearch";

function* handleSearchInit(){
    while(true){
        yield take(types.SEARCH_INIT_TEST);

        console.log("reached initial saga (search)");
    }
}

function* getSearch(action){
    const resultTypes = yield select(getResultTypes);
    const {response, error} = yield call(getSearchResults, action.token, action.query, resultTypes);
    if (error){
        //Fetching API failed
        yield put({'type': types.SEARCH_GET_ERROR, payload: error.error});
    }else{
        const data = response.tracks;
        yield put({'type': types.SEARCH_GET_SUCCESS, payload: data});
    }

}


function* searchRootSaga() {
    yield all([
        takeLatest(types.SEARCH_INIT_TEST, handleSearchInit),
        takeLatest(types.SEARCH_GET, getSearch)
    ])
};

const getResultTypes = (state) => state.search.resultTypes;

export default searchRootSaga;