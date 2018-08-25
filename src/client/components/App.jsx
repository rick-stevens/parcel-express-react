import React from 'react';
import { Switch, Route } from 'react-router';
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import Home from './Home';
import ServerExample from './ServerExample';
import Error from './Error';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <Container>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/server-example" component={ServerExample} />
      <Route component={Error} status={404} />
    </Switch>
  </Container>
);
