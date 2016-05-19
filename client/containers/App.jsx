import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const App = ({ children }) => (
  <div>
    <Helmet
      titleTemplate="%s - Koa React Boilerplate"
      title="Index"
    />
    App
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
