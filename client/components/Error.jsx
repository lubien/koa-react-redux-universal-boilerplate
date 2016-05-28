import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

const Error = ({ code, reason }) => (
  <div>
    <Helmet
      title={`Error ${code}`}
    />
    <h1>Error {code}.</h1>
    <h4>{reason}</h4>
  </div>
);

Error.propTypes = {
  code: PropTypes.number.isRequired,
  reason: PropTypes.string.isRequired,
};

export default Error;
