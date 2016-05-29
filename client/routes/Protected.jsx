import React from 'react';

import Helmet from 'react-helmet';

const ProtectedPage = () => (
  <div>
    <Helmet
      title="Protected"
    />
    Inside Protected
  </div>
);

export default ProtectedPage;

import isLoggedIn from '../lib/is-logged-in';

export const route = {
  path: 'protected',
  component: ProtectedPage,
  onEnter: isLoggedIn,
};
