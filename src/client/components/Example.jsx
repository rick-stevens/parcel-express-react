import React, { Component } from 'react';
import 'whatwg-fetch';

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
      <React.Fragment>
        <h1 className="display-4">
          Server result:
        </h1>
        <code>
          {JSON.stringify(params)}
        </code>
      </React.Fragment>
    );
  }
}
