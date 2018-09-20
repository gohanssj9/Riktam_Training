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
            <a href="https://book.olacabs.com?utm_source=book_now_top_right" className="login-link">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSecondary;

// <a className = "show-xs menu-icon" href = "">
//           <img src = "../assets/ola_icon.png">
//         </a>