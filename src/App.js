import './App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Redirect, Route, useHistory } from 'react-router';
import AuthorizedPresenter from './presenters/AuthorizedPresenter';
import LoginPresenter from './presenters/LoginPresenter';
import StartPresenter from './presenters/StartPresenter';
import { connect } from 'react-redux';
import fbaseActions from './state/fbase/fbaseActions';
import authActions from './state/auth/authActions';
import { isDateExpired } from './state/utils';
import { onAuthStateChanged } from 'firebase/auth';

function App(props) {
  const {fbaseApp, fbaseAuth, fbaseUid, token} = props;
  const [initialized, setInitialized] = useState(false);
  const history = useHistory();
  
  useEffect(()=>{
    // set up firebase (app+rtdb) connection and auth
    if(!initialized){
      setInitialized(true);
      props.initFirebase();
    }else if(fbaseApp && fbaseAuth){
      // authenticate anonymously with firebase,
      // but only if auth info is not in session already
      if(sessionStorage.length === 0){
        props.authenticateFirebase();
      }
      let storedToken = localStorage.getItem("spotifyToken");
      let tokenExpiration = localStorage.getItem("spotifyExpiration");
      if(storedToken && tokenExpiration){
        if(isDateExpired(new Date(Date.parse(tokenExpiration)))){
          // stored token is expired, redirect to login page
          localStorage.removeItem("spotifyToken");
          localStorage.removeItem("spotifyExpiration");
          sessionStorage.clear();
          if(!token)
            history.push("/login");
        }else if(!token){
          // stored token is valid, save to redux
          props.saveSpotifyToken(storedToken);
        }
      }else if(!token){
        // no stored token, no redux token
        // redirect to login
        sessionStorage.clear();
        history.push("/login");
      }

      // save the uid of the user to redux
      // when the user gets authenticated through firebase
      onAuthStateChanged(fbaseAuth, (user) => {
        if(user && !fbaseUid){
          props.setUid(user.uid);
        }
      });
    }
  }, [fbaseAuth, token]);

  return (
    <Switch>
      <Route path="/access_token=:token(.*)&token_type=Bearer&expires_in=:expires_in(.*)&state=:state(.*)" component={LoginPresenter} />
      <Route path="/error=:error(.*)&state=:state(.*)" component={LoginPresenter} />
      <Route exact path="/login" component={StartPresenter} />
      <Route exact path="/" component={AuthorizedPresenter} />
      <Route path="/*" render={()=>{return <Redirect to="/" />;}} />
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.spotify.token,
  fbaseApp: state.fbase.app,
  fbaseAuth: state.fbase.auth,
  fbaseUid: state.fbase.uid,
})

const mapDispatchToProps = {
  initFirebase: fbaseActions.initFbase,
  authenticateFirebase: fbaseActions.authFbase,
  setUid: fbaseActions.setUid,
  saveSpotifyToken: authActions.saveSpotifyToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
