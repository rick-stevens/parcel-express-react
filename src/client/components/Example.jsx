import React, { Component } from 'react';
import 'whatwg-fetch';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { result: null };
  }

  componentDidMount() {
    fetch('/api/example')
      .then(res => res.json())
      .then(result => this.setState({ result }));
  }

  render() {
    const { result } = this.state;

    return (
      <React.Fragment>
        <h1 className="display-4">
          Result:
        </h1>
        <code>
          {JSON.stringify(result)}
        </code>
      </React.Fragment>
    );
  }
}
