import React, { Component } from 'react';
import api from 'utils/api';

import Helmet from 'react-helmet';
import HeroTitle from 'components/HeroTitle';

class ProtectedPage extends Component {
  componentWillMount() {
    this.setState({
      secret: 'Loading...',
    });
  }

  componentDidMount() {
    setTimeout(() => {
      api.users.secret()
        .then(({ message }) => this.setState({ secret: message }));
    }, 3000);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Protected"
        />
        <HeroTitle
          title="Protected Page"
          subtitle="If you're seeing this, congratulations, you're logged in."
          classes="is-success"
        />
        <div className="container content">
          <p>Trying to get secret data from the server:</p>
          <p><b>{this.state.secret}</b></p>
        </div>
      </div>
    );
  }
}

export default ProtectedPage;
