import './LoginForm.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { InputGroupIcon } from 'components/FormTools';

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
    const { onLogin, onSetPage, history } = this.props;

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
            onClick={() => {
              onSetPage('register');
              history.push('/darksteam_97d99i/user/register');
            }}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
