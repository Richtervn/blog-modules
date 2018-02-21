import React, { Component } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { Dashboard } from './Dashboard';

class User extends Component {
  render() {
    const { currentPage } = this.props;
    return (
      <div>
        {currentPage === 'login' && <Login />}
        {currentPage === 'register' && <Register />}
        {currentPage === 'dashboard' && <Dashboard />}
      </div>
    );
  }
}

export default User;
