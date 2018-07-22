import React, { Component } from 'react';
import { Container } from 'reactstrap';
import styles from './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <h1 className={`display-4 ${styles.title}`}>
          Server result:
        </h1>
        <code>
          {JSON.stringify(data)}
        </code>
      </Container>
    );
  }
}
