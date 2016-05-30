import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadAllUsers, clearAllUsers } from 'reducers/users';

class UsersList extends Component {
  componentWillUnmount() {
    this.props.clearAllUsers();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                User list
              </h1>
            </div>
          </div>
        </section>
        <section className="section is-medium">
          <div className="container">
            <div className="columns is-multiline is-desktop is-mobile">
              {list.map((user, key) => (
                <div
                  className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile"
                  key={key}
                >
                  <div className="card">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-64x64">
                            <img src={`https://avatars1.githubusercontent.com/u/${user.id}`} alt="Avatar" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-5">{user.name || user.username}</p>
                          <p className="subtitle is-6">@{user.username}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

UsersList.propTypes = {
  list: PropTypes.array.isRequired,
  clearAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  list: state.users.list,
});

const mapDispatchToProps = dispatch => ({
  clearAllUsers: () => dispatch(clearAllUsers()),
});

const BoundUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default BoundUsersList;

import prepareForComponent from '../../lib/prepare-for-component';

export const route = {
  path: 'list',
  getComponent: prepareForComponent((_, dispatch, callback) => {
    dispatch(loadAllUsers())
      .then(__ => callback(null, BoundUsersList)); // eslint-disable-line
  }),
};
