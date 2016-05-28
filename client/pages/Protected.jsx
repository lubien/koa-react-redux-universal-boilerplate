import React from 'react';

import requireAuth from '../lib/require-auth';
import Helmet from 'react-helmet';

const ProtectedPage = () => (
  <div>
    <Helmet
      title="Protected"
    />
    Inside Protected
  </div>
);

export default requireAuth(ProtectedPage);
