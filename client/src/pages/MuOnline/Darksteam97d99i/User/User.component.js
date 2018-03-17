import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Ds9799Page } from '../components';
import { userPages } from '../Darksteam97d99i.module';

import { Introduction } from './Introduction';

class User extends Component {
  render() {
    const { page, isLoggedIn } = this.props;
    if (!isLoggedIn && page !== 'login') {
      return <Redirect to="/darksteam_97d99i/user/login" />;
    }
    if (isLoggedIn && !_.contains(_.pluck(userPages, 'route'), page)) {
      return <Redirect to="/darksteam_97d99i/user/dashboard" />;
    }
    
    return <Ds9799Page>{_.contains(['login', 'register'], page) && <Introduction />}</Ds9799Page>;
  }
}

export default User;
