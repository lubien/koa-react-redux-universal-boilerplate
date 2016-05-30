import React from 'react';

const PassProps = (Component, bindProps) => props => (
  <Component {...props} {...bindProps} />
);

export default PassProps;
