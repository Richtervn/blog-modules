import React, { Component } from 'react';
import { Login } from './Login';

class User extends Component {
  render() {
    const { currentPage } = this.props;
    return <div>{currentPage === 'login' && <Login />}</div>;
  }
}

export default User;
