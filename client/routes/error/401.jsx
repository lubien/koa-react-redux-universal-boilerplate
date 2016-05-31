import React from 'react';

import ErrorTemplate from './ErrorTemplate';

const Error401 = () => (
  <ErrorTemplate code={401} reason="Must be logged in" />
);

export default Error401;
