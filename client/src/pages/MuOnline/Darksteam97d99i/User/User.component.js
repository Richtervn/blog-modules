import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Ds9799Page } from '../components';

import { Introduction } from './Introduction';

class User extends Component {
  componentWillMount() {
    const { page, onSetPage } = this.props;
    if (!page) {
      onSetPage('login');
    }
  }

  render() {
    const { page } = this.props;
    if (!page) return <Redirect to="/darksteam_97d99i/user/login" />;
    return <Ds9799Page>{_.contains(['login', 'register'], page) && <Introduction />}</Ds9799Page>;
  }
}

export default User;
