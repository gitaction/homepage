import React from 'react';
import logo from '../_assets/500.svg';

export const NavBar = () => (
  <div className="position-relative js-header-wrapper ">

    <div className="Header py-0 js-details-container Details flex-wrap flex-lg-nowrap px-3">
      <div className="Header-item">
        <a className="Header-link" href="https://gitaction.com/">
          <img className="avatar" height="40" width="40" alt="icon" src={logo} />
        </a>
      </div>

      <div className="Header-item Header-item--full">
        <nav className="d-flex flex-row" aria-label="Global">
          <a
            className="js-selected-navigation-item Header-link py-3 mr-0 mr-3 border-top border-top-0 border-white-fade-15"
            href="/admin/dashboard">
            Dashboard
          </a>
        </nav>
      </div>

      <div className="Header-item position-relative mr-0">
        <details className="details-overlay details-reset">
          <summary className="Header-link" role="button">
            <img alt="@sunwei" width="20" height="20" 
                 src={"https://avatars0.githubusercontent.com/u/" + JSON.parse(localStorage.getItem('user')).id + "?s=60&amp;v=4"} className="avatar avatar-user "/>
            <div className="hidden-space"> </div>
            <span className="dropdown-caret"> </span>
          </summary>
          <div className="dropdown-menu dropdown-menu-sw mt-n2" role="menu">
            <a role="menuitem" className="dropdown-item" href="/new">
              Sign out
            </a>

          </div>
        </details>

      </div>
      
      
    </div>

  </div>
);
