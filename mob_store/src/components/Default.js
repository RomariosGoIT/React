import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div className="main">
        <div className="error">
          <h1>404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the request URL
            <span className="error__url">
              {' '}
              "{this.props.location.pathname}"{' '}
            </span>
            was not found ;(
          </h3>
        </div>
      </div>
    );
  }
}
