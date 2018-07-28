import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Nav from './Nav';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: null,
    };
  }

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(params => this.setState({ params }));
  }

  render() {
    const { params } = this.state;

    return (
      <Container>
        <Nav />
        <h1 className="display-4">
          Server result:
        </h1>
        <code>
          {JSON.stringify(params)}
        </code>
      </Container>
    );
  }
}
