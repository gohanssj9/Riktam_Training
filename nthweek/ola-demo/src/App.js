import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import BookCabComponent from './components/BookCabComponent';
import OutstationComponent from './components/OutstationComponent';
import RentalsComponent from './components/RentalsComponent';
import ExtraButMainComponent from './components/ExtraButMainComponent';

class App extends Component {
  render() {
    const browserHistory = createBrowserHistory();
    return (
      <BrowserRouter>
      	<div>
        	<Route exact path = '/' component = {ExtraButMainComponent} />
        	<Route path = '/bookcabs' component = {BookCabComponent} />
          <Route path = '/outstation' component = {OutstationComponent} />
          <Route path = '/rentals' component = {RentalsComponent} />
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
