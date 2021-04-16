// src/state/store.js

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = (process.env.NODE_ENV !== 'production') ? 
    createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools))       // development mode
    : createStore(rootReducer, applyMiddleware(sagaMiddleware));                            // production mode (should not require Redux devtools extension)

export default store;

sagaMiddleware.run(rootSaga);