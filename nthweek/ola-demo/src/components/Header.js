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

// <div>
//       <Navbar id = "smallHeader" inverse collapseOnSelect>
//         <Nav pullRight>
//           <NavItem eventKey={1} href="#" divider>
//             <div className = "applyTextColor">Drive with Ola</div>
//           </NavItem>
//           <NavItem eventKey={2} href="#">
//             <div className = "applyTextColor">Ola Money</div>
//           </NavItem>
//           <NavItem eventKey={3} href="#">
//             <div className = "applyTextColor">Ola Corporate</div>
//           </NavItem>
//           <NavItem eventKey={4} href="#">
//             <div className = "applyTextColor">Share</div>
//           </NavItem>
//           <NavItem eventKey={5} href="#">
//             <div className = "applyTextColor">Offers</div>
//           </NavItem>
//           <NavItem eventKey={6} href="#">
//             <div className = "applyTextColor">Support</div>
//           </NavItem>
//         </Nav>
//       </Navbar>

//       <Navbar id = "bigHeader" inverse collapseOnSelect>
//         <Nav pullRight>
//           <NavItem eventKey={1} href="#" divider>
//             <div className = "applyTextColor">Drive with Ola</div>
//           </NavItem>
//           <NavItem eventKey={2} href="#">
//             <div className = "applyTextColor">Ola Money</div>
//           </NavItem>
//           <NavItem eventKey={3} href="#">
//             <div className = "applyTextColor">Ola Corporate</div>
//           </NavItem>
//           <NavItem eventKey={4} href="#">
//             <div className = "applyTextColor">Share</div>
//           </NavItem>
//           <NavItem eventKey={5} href="#">
//             <div className = "applyTextColor">Offers</div>
//           </NavItem>
//           <NavItem eventKey={6} href="#">
//             <div className = "applyTextColor">Support</div>
//           </NavItem>
//         </Nav>
//       </Navbar>
//       </div>
