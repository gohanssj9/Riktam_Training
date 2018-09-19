import React, { Component } from 'react';

import {Provider} from 'react-redux';
import store from './store';

import AllDepartments from './components/AllDepartments';
import AddDepartment from './components/AddDepartment';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <AllDepartments />
          <AddDepartment />
        </div>
      </Provider>
    );
  }
}

export default App;
