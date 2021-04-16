import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router';
import AuthorizedPresenter from './presenters/AuthorizedPresenter';
import LoginPresenter from './presenters/LoginPresenter';
import StartPresenter from './presenters/StartPresenter';

function App() {
  return (
    <Switch>
      <Route exact path="/authorized" component={AuthorizedPresenter} />
      <Route path="/access_token=:token(.*)&token_type=Bearer&expires_in=:expires_in(.*)&state=:state(.*)" component={LoginPresenter} />
      <Route path="/error=:error(.*)&state=:state(.*)" component={LoginPresenter} />
      <Route exact path="/" component={StartPresenter} />
    </Switch>
  );
}

export default App;
