import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

const ErrorTemplate = ({ code, reason }) => (
  <div>
    <Helmet
      title={`Error ${code}`}
    />
    <section className="hero is-fullheight is-danger is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Error {code}
          </h1>
          <h2 className="subtitle">
            {reason}
          </h2>
        </div>
      </div>
    </section>
  </div>
);

ErrorTemplate.propTypes = {
  code: PropTypes.number.isRequired,
  reason: PropTypes.string.isRequired,
};

export default ErrorTemplate;
