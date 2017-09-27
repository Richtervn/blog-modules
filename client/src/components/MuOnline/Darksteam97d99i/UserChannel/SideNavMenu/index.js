import React from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default ({user, activeForm, onChangeActiveForm, onRegister}) => (
  <div className="ds9799-user-sidenav">
    {!user && activeForm == 'Login' && <LoginForm onChangeActiveForm={onChangeActiveForm}/>}
    {!user && activeForm == 'Register' && <RegisterForm onChangeActiveForm={onChangeActiveForm} onRegister={onRegister}/>}
  </div>
);