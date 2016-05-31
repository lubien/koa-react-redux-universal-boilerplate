import React from 'react';

import Helmet from 'react-helmet';
import HeroTitle from 'components/HeroTitle';

const ProtectedPage = () => (
  <div>
    <Helmet
      title="Protected"
    />
    <HeroTitle
      title="Protected Page"
      subtitle="If you're seeing this, congratulations, you're logged in."
      classes="is-success"
    />
  </div>
);

export default ProtectedPage;
