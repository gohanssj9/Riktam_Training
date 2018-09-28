import React from 'react';
import '../assets/header.css';
import logo from '../assets/ola_icon.png';

const HeaderSecondary = () => {
  return (
    <div className = "secondary-header">
      <div className = "max-width">
      <div className = "pull-left">
        <a className = "hide-xs" href = "/">
          <img className = "logo" src = {logo} />
        </a>
      </div>
        <div className = "pull-right">
          <div className = "secondary-links hide-xs">
            <a className="other-links" href="/olaSelect">Ola Select</a>
            <a className="other-links" href="/fleet">Ola Fleet</a>
            <a className="other-links" href="/features">Features</a>
            <a href="/bookcabs" className="login-link">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSecondary;