import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  Router, Switch, Route, Redirect,
} from 'react-router';
import Home from './Home';
import Example from './Example';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={Example} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
