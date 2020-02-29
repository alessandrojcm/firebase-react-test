import * as React from 'react';
import classnames from 'classnames';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav
      className={classnames('navbar')}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={classnames('navbar-menu')}>
        <div className={classnames('navbar-start')}>
          <div className={classnames('navbar-item')}>
            <p className={classnames('is-text-black')}>
              React Firebase FCM Proof of Concept
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
