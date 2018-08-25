import React, { Component } from 'react';
import 'whatwg-fetch';

export default class ServerExample extends Component {
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
          Server example
        </h1>
        <p>
          Fetch result:
          {' '}
          <code>
            {JSON.stringify(result)}
          </code>
        </p>
      </React.Fragment>
    );
  }
}
