import React from 'react';

import Helmet from 'react-helmet';

const IndexPage = () => (
  <div>
    <Helmet
      title="Index"
    />
    Inside Index
  </div>
);

export default IndexPage;

export const route = {
  component: IndexPage,
};
