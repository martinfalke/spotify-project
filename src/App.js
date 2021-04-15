import './App.scss';
import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import AuthorizedView from './views/AuthorizedView';
import LoginPresenter from './presenters/LoginPresenter';
import StartPresenter from './presenters/StartPresenter';

function App() {
  return (
    <Switch>
      <Route exact path="/authorized" component={AuthorizedView}/>
      <Route path="/access_token=:token(.*)&token_type=Bearer&expires_in=:expires_in(.*)&state=:state(.*)" component={LoginPresenter} />
      <Route path="/error=:error(.*)&state=:state(.*)" component={LoginPresenter} />
      <Route exact path="/" component={StartPresenter}>
      </Route>
      <Route path="/*" render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
