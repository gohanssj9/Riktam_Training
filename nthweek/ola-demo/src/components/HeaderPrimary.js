import React from 'react';
import '../assets/header.css';

const HeaderPrimary = () => {
  return (
    <div className = "primary-header hide-xs">
      <div className = "max-width">
        <div className = "pull-right">
          <div className = "primary-links">
            <div className = "link-wrapper">
              <a href="https://partners.olacabs.com/">Drive with Ola</a>
            </div>

            <div className="link-wrapper">
              <a href="https://www.olamoney.com"> Ola Money</a>
            </div>

            <div className="link-wrapper">
              <a href="https://corporate.olacabs.com">Ola Corporate</a>
            </div>

            <div className="link-wrapper">
              <a href="/share">Share</a>
            </div>

            <div className="link-wrapper">
              <a href="https://blog.olacabs.com/">Offers</a>
            </div>

            <div className="link-wrapper">
              <a href="https://help.olacabs.com/support">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;