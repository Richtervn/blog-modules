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
    const { isCheckedCurrentUser, isLoggedIn, onGetCurrentUser } = this.props;
    if (!isCheckedCurrentUser && !isLoggedIn) {
      onGetCurrentUser();
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { onSetPage } = this.props;
    const { pageParam, isCheckedCurrentUser } = nextProps;
    onSetPage(pageParam);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.page === this.props.pageParam){
      return false;
    }
    return true;
  }

  render() {
    const { page, pageParam, isLoggedIn, isCheckedCurrentUser } = this.props;
    if (!isCheckedCurrentUser) {
      return (
        <Ds9799Page>
          <ContainerLoader />
        </Ds9799Page>
      );
    }

    if (!isLoggedIn && !pageParam) {
      return <Redirect to="/darksteam_97d99i/user/login" />;
    }
    if (!isLoggedIn && pageParam) {
      if (!_.contains(['login', 'register'], pageParam)) {
        return <Redirect to="/404" />;
      } else {
        return <Redirect to={`/darksteam_97d99i/user/${pageParam}`} />;
      }
    }

    if (pageParam && !_.contains(availableUserPages, pageParam)) {
      return <Redirect to="/404" />;
    }

    if (!pageParam) {
      return <Redirect to="/darksteam_97d99i/user/dashboard" />;
    }
    console.log('pageParam');
    console.log(pageParam);
    return (
      <Ds9799Page>
        {_.contains(['login', 'register'], pageParam) && <Introduction />}
        {pageParam === 'dashboard' && <Dashboard />}
      </Ds9799Page>
    );
  }
}

export default User;
