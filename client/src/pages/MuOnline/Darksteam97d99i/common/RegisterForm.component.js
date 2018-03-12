import './RegisterForm.css';
import React, { Component } from 'react';
import { InputGroupIcon } from 'components/FormTools';

import { withRouter } from 'react-router-dom';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        Name: '',
        Email: '',
        Username: '',
        Password: '',
        PasswordRepeat: '',
        BirthDay: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ value: { ...this.state.value, [name]: value } });
  }

  render() {
    const { history, onSetPage } = this.props;

    return (
      <div className="ds9799-register-form">
        <InputGroupIcon
          icon="user-o"
          type="text"
          value={this.state.value.Name}
          name="Name"
          onChange={this.handleChange}
          placeholder="Name"
        />
        <InputGroupIcon
          icon="envelope"
          type="email"
          value={this.state.value.Email}
          name="Email"
          onChange={this.handleChange}
          placeholder="Email Address"
        />
        <InputGroupIcon
          icon="user"
          type="Username"
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
        <InputGroupIcon
          icon="lock"
          type="password"
          value={this.state.value.PasswordRepeat}
          name="PasswordRepeat"
          onChange={this.handleChange}
          placeholder="Repeat Password"
        />
        <InputGroupIcon
          icon="birthday-cake"
          type="date"
          value={this.state.value.BirthDay}
          name="BirthDay"
          onChange={this.handleChange}
          placeholder="Birth Day"
        />
        <div className="feature">
          <button className="btn">OK</button>
          <button
            className="btn"
            onClick={() => {
              onSetPage('login');
              history.push('/darksteam_97d99i/user/login');
            }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);