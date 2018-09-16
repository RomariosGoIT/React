import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CourseList from './components/CourseList.js'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
