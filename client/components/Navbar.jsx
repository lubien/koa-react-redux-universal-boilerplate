import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Link } from 'react-router';

const Navbar = ({ user }) => {
  const rightNavItems = [(
    <Link to="/">
      Home
    </Link>
  ), (
    <Link to="/about">
      About
    </Link>
  )];

  if (!user.get('loggedIn')) {
    rightNavItems.push((
      <a className="button" href="/login">
        <span className="icon">
          <i className="fa fa-github"></i>
        </span>
        <span>Login</span>
      </a>
    ));
  } else {
    rightNavItems.push((
      <span>Hello, {user.get('username')}</span>
    ));
    rightNavItems.push((
      <a className="button" href="/logout">
        <span>Logout</span>
      </a>
    ));
  }

  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="nav-item" style={{ fontWeight: 'bolder' }}>
          Koa React Boilerplate
        </span>
      </div>

      <div className="nav-center">
        <a className="nav-item" href="https://github.com/lubien/koa-react-boilerplate">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item" href="https://twitter.com/@joao_lubien">
          <span className="icon">
            <i className="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        {rightNavItems.map((el, key) => (
          <span className="nav-item" key={key}>
            {el}
          </span>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: ImmutablePropTypes.map.isRequired,
};

export default Navbar;
