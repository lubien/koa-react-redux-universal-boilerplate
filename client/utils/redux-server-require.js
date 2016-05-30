import React, { Component } from 'react';
import store from '../store';

export default function reduxServerRequire(actions) {
  return ChildComponent => {
    class ReduxServerRequire extends Component {
      componentDidMount() {
        actions.map(action => store.dispatch(action()));
      }

      render() {
        return <ChildComponent {...this.props} />;
      }
    }

    ReduxServerRequire.displayName =
      `ReduxServerRequire(${ChildComponent.displayName || 'Component'})`;
    ReduxServerRequire.requiredActions = actions;

    return ReduxServerRequire;
  };
}
