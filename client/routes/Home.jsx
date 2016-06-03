import React from 'react';

import Helmet from 'react-helmet';
import HeroTitle from 'components/HeroTitle';

const HomePage = () => (
  <div>
    <Helmet
      title="Index"
    />
    <HeroTitle
      title="Homepage"
      subtitle="Welcome to the Koa React Redux Universal Boilerplate!"
      classes="is-primary"
    />
  </div>
);

export default HomePage;
