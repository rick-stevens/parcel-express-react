import React from 'react';
import { Switch, Route } from 'react-router';
import { Container } from 'reactstrap';
import Nav from './Nav';
import Home from './Home';
import Example from './Example';

export default () => (
  <Container>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={Example} />
    </Switch>
  </Container>
);
