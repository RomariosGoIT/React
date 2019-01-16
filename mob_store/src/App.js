import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-1">Column number one</div>
        <div className="col-2">
          <span>
            <i className="fas fa-home" />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
