// src/state/fbase/fbaseSagas.js
import { all, call, cancel, fork, put, takeLeading, take, select } from 'redux-saga/effects';
import store from '../store';
import * as types from './fbaseTypes';
import * as authTypes from '../auth/authTypes';
import { getApps, initializeApp } from 'firebase/app';
import config from '../../api/firebaseConfig';
import { initializeAuth, browserSessionPersistence, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { handleSignIn, handleSignOut } from '../../api/firebaseAuth';
import { isDateExpiredIn } from '../utils';

function* initializeFirebase(){
    let apps = yield call(getApps);
    let app = (apps.length > 0) ? apps[0] : null;
    if(!app){
        app = yield call(initializeApp, config);
    }
    let auth = yield call(getAuth);
    if(!auth){
        auth = yield call(initializeAuth, app, {persistence: browserSessionPersistence,
            popupRedirectResolver: undefined,
        });
    }
    yield put({'type': types.FBASE_INIT_COMPLETED, payload: {app, auth} });
}

function* authenticateFirebase(){
    const auth = yield call(getAuth);
    const handleInitialAuth = (persistedUser) =>{
        if(persistedUser){
            store.dispatch({'type': types.FBASE_SET_UID, uid: persistedUser.uid});
        }else{
            handleSignIn(auth).then(response => {
                store.dispatch({'type': types.FBASE_SET_UID, uid: response.user.uid})
            }).catch(error => console.error(error));
        }
    };
    const unsubscribe = yield call(onAuthStateChanged, auth, handleInitialAuth);
    unsubscribe();
}

function* logout(){
    const auth = getAuth();
    yield put({'type': authTypes.AUTH_SPOTIFY_LOGOUT});
    const { response, error } = yield call(handleSignOut, auth);
    if(error){
        yield put({'type': types.FBASE_SIGN_OUT_ERROR});
    }else{
        yield put({'type': types.FBASE_SIGN_OUT_SUCCESS});
    }
}

function* handleSetRef(action){
    const uid = yield select(getUid);
    if(uid){
        const db = yield call(getDatabase);
        set(ref(db, '/persistedState/' + uid + '/' + action.endpoint), action.value)
    }
}

function* persistToken(action){
    yield call(handleSetRef, {endpoint: "spotify", value: {token: action.token, expires_at: localStorage.getItem("spotifyExpiration")} });
}

function* listenForToken(){
    while(true){
        yield take(types.FBASE_SET_UID);
        const uid = yield select(getUid);
        if (uid) {
            const db = yield call(getDatabase);
            const tokenRef = yield call(ref, db, '/persistedState/' + uid + '/spotify');
            onValue(tokenRef, (snapshot) => {
                const data = snapshot.val();
                if(data !== null && data !== 'null'){
                    let tokenExpiration = new Date(Date.parse(data.expires_at));
                    if(!isDateExpiredIn(tokenExpiration, 600)){ // token should be valid for at least 10 minutes
                        store.dispatch({ 'type': authTypes.AUTH_SPOTIFY, token: data.token, expires_in: tokenExpiration });
                    }else{
                        store.dispatch({'type': authTypes.AUTH_SPOTIFY_LOGOUT});
                    }
                }
            })
        }
    }
}

function* fbaseRootSaga() {
    while(true){
        const tokenListener = yield fork(listenForToken);
        // set up connection to firebase
        yield call(initializeFirebase);
        yield call(authenticateFirebase);
        
        const tasks = yield all([
            takeLeading(authTypes.AUTH_SPOTIFY, persistToken),
        ]);
        // listen for signout action
        yield take(types.FBASE_SIGN_OUT);
        yield cancel(tokenListener);
        yield cancel(tasks);
        yield call(logout);
    }
};

const getUid = (state) => state.fbase.uid;

export default fbaseRootSaga;