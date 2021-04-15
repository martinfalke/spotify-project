// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import firebaseConfig from './api/firebaseConfig';
import { Provider } from 'react-redux';
import store from './state/store';

import { HashRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter hashType="noslash">
        <App />
      </HashRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
