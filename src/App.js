import './App.scss';
import firebase from 'firebase';
import Button from 'react-bootstrap/Button';
import spotifyAuthUrl, { generateURIstate } from './api/spotifyAuth';
import React from 'react';
import { Route } from 'react-router';
import AuthPresenter from './auth/AuthPresenter';

function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <React.Fragment>
      <Route exact path="/login">
        <AuthPresenter></AuthPresenter>
      </Route>
      <Route exact path="/authorized">
        <div className="App">
          <p>Login success, authorized through Spotify!</p>
        </div>
      </Route>
      <Route exact path="/">
        <div className="App">
          <p>Firebase config options</p>
          <code>
            <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
          </code>
          <Button variant="secondary" href={`${spotifyAuthUrl}&state=${generateURIstate()}`}>
            Login with Spotify
          </Button>
        </div>
      </Route>
    </React.Fragment>
  );
}

export default App;
