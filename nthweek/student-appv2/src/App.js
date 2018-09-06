import React, { Component } from 'react';
import AllDepartments from './components/allDepartments.js';
import AddDepartment from './components/AddDepartment.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AllDepartments />
      <AddDepartment />
      </div>
    );
  }
}

export default App;
