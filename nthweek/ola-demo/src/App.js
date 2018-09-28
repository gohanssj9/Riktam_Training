import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import BookCabComponent from './components/BookCabComponent';
import ExtraButMainComponent from './components/ExtraButMainComponent';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
        	<Route exact path = '/' component = {ExtraButMainComponent} />
        	<Route path = '/bookcabs' component = {BookCabComponent} />
      	</div>
      </Router>
    );
  }
}

export default App;
