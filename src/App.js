import './App.scss';
import React, { useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import AuthorizedPresenter from './presenters/AuthorizedPresenter';
import LoginPresenter from './presenters/LoginPresenter';
import StartPresenter from './presenters/StartPresenter';
import { connect } from 'react-redux';
import authActions from './state/auth/authActions';
import { isDateExpired } from './state/utils';
import LoadingView from './views/LoadingView';

function App(props) {
  
  const {uid} = props;
  
  useEffect(()=>{
    let storedToken = localStorage.getItem("spotifyToken");
    let tokenExpiration = localStorage.getItem("spotifyExpiration");
    if (storedToken && tokenExpiration) {
      if (isDateExpired(new Date(Date.parse(tokenExpiration)))) {
        // stored token is expired, redirect to login page
        localStorage.removeItem("spotifyToken");
        localStorage.removeItem("spotifyExpiration");
        sessionStorage.clear();
      }else{
        props.saveSpotifyToken(storedToken);
      }
    }
  }, []);


  return (
    (!uid) ? <LoadingView size="lg" />
    :
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
  uid: state.fbase.uid
})

const mapDispatchToProps = {
  saveSpotifyToken: authActions.saveSpotifyToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
