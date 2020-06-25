import React from 'react';

export const NavBar = () => (
  <div className="position-relative js-header-wrapper ">

    <div className="Header py-0 js-details-container Details flex-wrap flex-lg-nowrap px-3">
      <div className="Header-item">
        <a className="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage "
           data-ga-click="Header, go to dashboard, icon:logo">
          <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1"
               width="32" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>

      <div className="Header-item Header-item--full">
        <nav className="d-flex flex-row" aria-label="Global">
          <a
            className="js-selected-navigation-item Header-link py-3 mr-0 mr-3 border-top border-top-0 border-white-fade-15"
            data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user"
            aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
            href="/pulls">
            Dashboard
          </a>

          <a
            className="js-selected-navigation-item Header-link py-3 mr-0 mr-3 border-top border-top-0 border-white-fade-15"
            data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user"
            aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
            href="/pulls">
            Profile
          </a>
          

        </nav>
      </div>

      <div className="Header-item position-relative mr-0">
        <details className="details-overlay details-reset">
          <summary className="Header-link" aria-label="View profile and more"
                   data-ga-click="Header, show menu, icon:avatar" aria-haspopup="menu" role="button">
            <img alt="@sunwei" width="20" height="20" 
                 src="https://avatars0.githubusercontent.com/u/47708665?s=60&amp;v=4" className="avatar avatar-user "/>
            <div className="hidden-space"> </div>
            <span className="dropdown-caret"> </span>
          </summary>
          <div className="dropdown-menu dropdown-menu-sw mt-n2" role="menu">

            <a role="menuitem" className="dropdown-item" href="/new" data-ga-click="Header, create new repository">
              Sign out
            </a>

          </div>
        </details>

      </div>
      
      
    </div>

  </div>
);
