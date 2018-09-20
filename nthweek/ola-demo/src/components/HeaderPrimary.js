import React from 'react';
import '../assets/header.css';

const HeaderPrimary = () => {
  return (
    <div className = "primary-header hide-xs">
      <div className = "max-width">
        <div className = "pull-right">
          <div className = "primary-links">
            <div className = "link-wrapper">
              <a href="https://partners.olacabs.com/" target="_blank">Drive with Ola</a>
            </div>

            <div className="link-wrapper">
              <a href="https://www.olamoney.com" target="_blank"> Ola Money</a>
            </div>

            <div className="link-wrapper">
              <a href="https://corporate.olacabs.com" target="_blank">Ola Corporate</a>
            </div>

            <div className="link-wrapper">
              <a href="/share" target="_blank">Share</a>
            </div>

            <div className="link-wrapper">
              <a href="https://blog.olacabs.com/" target="_blank">Offers</a>
            </div>

            <div className="link-wrapper">
              <a href="https://help.olacabs.com/support" target="_blank">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;