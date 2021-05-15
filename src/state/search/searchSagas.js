// src/state/search/searchSagas.js
import { call, select, all, put, take, takeLatest } from 'redux-saga/effects';
import * as types from './searchTypes';
import actions from './searchActions';
import { getSearchResults } from "../../api/spotifySearch";
import { baseUrl, spotifyApiCall } from "../../api/spotifyUtil";

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

function* getNextPage(action){
    const nextPage = yield select(getNextPageURL);
    if(nextPage){
        const endpoint = nextPage.slice(baseUrl.length);
        const {response, error} = yield call(spotifyApiCall, action.token, endpoint);
        if(error){
            yield put({'type': types.SEARCH_GET_ERROR, payload: error.error});
        }else{
            const data = response.tracks;
            yield put({'type': types.SEARCH_GET_SUCCESS, payload: data});
        }
    }
}

function* getPrevPage(action){
    const prevPage = yield select(getPrevPageURL);
    if(prevPage){
        const endpoint = prevPage.slice(baseUrl.length);
        const {response, error} = yield call(spotifyApiCall, action.token, endpoint);
        if(error){
            yield put({'type': types.SEARCH_GET_ERROR, payload: error.error});
        }else{
            const data = response.tracks;
            yield put({'type': types.SEARCH_GET_SUCCESS, payload: data});
        }
    }
}

function* searchRootSaga() {
    yield all([
        takeLatest(types.SEARCH_INIT_TEST, handleSearchInit),
        takeLatest(types.SEARCH_GET, getSearch),
        takeLatest(types.SEARCH_NEXT, getNextPage),
        takeLatest(types.SEARCH_PREV, getPrevPage)

    ])
};

const getResultTypes = (state) => state.search.resultTypes;
const getNextPageURL = (state) => state.search.activePage.next;
const getPrevPageURL = (state) => state.search.activePage.previous;

export default searchRootSaga;