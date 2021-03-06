import './LoginForm.css';
import React, { Component } from 'react';

import { InputGroupIcon } from 'components/FormTools';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        Username: '',
        Password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ value: { ...this.state.value, [name]: value } });
  }

  render() {
    const { onLogin, isLoggedIn, onSetActiveForm } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/darksteam_97d99i/user/dashboard" />;
    }
    return (
      <div className="ds9799-login-form">
        <InputGroupIcon
          icon="user"
          type="text"
          value={this.state.value.Username}
          name="Username"
          onChange={this.handleChange}
          placeholder="Username"
        />
        <InputGroupIcon
          icon="lock"
          type="password"
          value={this.state.value.Password}
          name="Password"
          onChange={this.handleChange}
          placeholder="Password"
        />
        <div className="feature">
          <button className="btn" onClick={() => onLogin(this.state.value)}>
            Login
          </button>
          <button
            className="btn"
            onClick={() => onSetActiveForm('register')}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
