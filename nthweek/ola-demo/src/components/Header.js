import React, {Component} from 'react';
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from 'react-bootstrap';
import '../assets/header.css';

import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

class Header extends Component {
  render(){
    return (
      <header className = "ola-header sticky">
        <HeaderPrimary />
        <HeaderSecondary />
      </header>
    );
  }
}

export default Header;