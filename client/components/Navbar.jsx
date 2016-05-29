import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const Navbar = ({ auth }) => {
  const rightNavItems = [(
    <Link to="/">
      Home
    </Link>
  ), (
    <Link to="/about">
      About
    </Link>
  ), (
    <Link to="/users/list">
      Users
    </Link>
  ), (
    <Link to="/protected">
      Protected
    </Link>
  )];

  if (!auth.loggedIn) {
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
      <span>Hello, {auth.username}</span>
    ));
    rightNavItems.push((
      <a className="button" href="/logout">
        <span>Logout</span>
      </a>
    ));
  }

  return (
    <section className="hero is-info  is-bold">
      <div className="hero-head">
        <div className="container is-fluid">
          <nav className="nav">
            <div className="nav-left">
              <span className="nav-item" style={{ fontWeight: 'bolder' }}>
                Koa React Boilerplate
              </span>
            </div>

            <div className="nav-center">
              <a className="nav-item" href="https://github.com/lubien/koa-react-redux-universal-boilerplate" target="_blank">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <a className="nav-item" href="https://twitter.com/@joao_lubien" target="_blank">
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
        </div>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Navbar;
