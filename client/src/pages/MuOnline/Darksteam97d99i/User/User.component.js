import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Ds9799Page } from '../components';
import { userPages } from '../Darksteam97d99i.module';
import { ContainerLoader } from 'common/Loaders';

import { Introduction } from './Introduction';
import { Dashboard } from './Dashboard';

const availableUserPages = _.pluck(userPages, 'route');

class User extends Component {
  componentWillMount() {
    const { isCheckedCurrentUser, isLoggedIn, onGetCurrentUser, onSetPage, pageParam } = this.props;
    if (!isCheckedCurrentUser && !isLoggedIn) {
      onGetCurrentUser();
    }
    onSetPage(pageParam);
  }

  componentWillReceiveProps(nextProps) {
    const { onSetPage } = this.props;
    if (nextProps.pageParam !== this.props.pageParam) {
      onSetPage(nextProps.pageParam);
    }
  }

  render() {
    const { pageParam, page, isLoggedIn, isCheckedCurrentUser } = this.props;
    if (!isCheckedCurrentUser) {
      return (
        <Ds9799Page>
          <ContainerLoader />
        </Ds9799Page>
      );
    }

    if (!isLoggedIn && !pageParam && !page) {
      return <Redirect to="/darksteam_97d99i/user/login" />;
    }

    if (!isLoggedIn && pageParam) {
      if (!_.contains(['login', 'register'], pageParam)) {
        return <Redirect to="/404" />;
      } else {
        if (page && pageParam !== page) {
          return <Redirect to={`/darksteam_97d99i/user/${pageParam}`} />;
        }
      }
    }

    if (isLoggedIn && pageParam && !_.contains(availableUserPages, pageParam)) {
      return <Redirect to="/404" />;
    }

    if (isLoggedIn && !pageParam) {
      return <Redirect to="/darksteam_97d99i/user/dashboard" />;
    }

    return (
      <Ds9799Page>
        {_.contains(['login', 'register'], pageParam) && <Introduction />}
        {pageParam === 'dashboard' && <Dashboard />}
      </Ds9799Page>
    );
  }
}

export default User;
