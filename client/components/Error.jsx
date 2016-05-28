import React, { PropTypes } from 'react';

const Error = ({ code, reason }) => (
  <div>
    <h1>Error {code}.</h1>
    <h4>{reason}</h4>
  </div>
);

Error.propTypes = {
  code: PropTypes.number.isRequired,
  reason: PropTypes.string.isRequired,
};

export default Error;
