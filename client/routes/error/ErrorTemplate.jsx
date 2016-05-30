import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';
import HeroTitle from 'components/HeroTitle';

const ErrorTemplate = ({ code, reason }) => (
  <div>
    <Helmet
      title={`Error ${code}`}
    />
    <HeroTitle
      title={`Error ${code}`}
      subtitle={reason}
      classes="is-fullheight is-danger is-bold"
    />
  </div>
);

ErrorTemplate.propTypes = {
  code: PropTypes.number.isRequired,
  reason: PropTypes.string.isRequired,
};

export default ErrorTemplate;
