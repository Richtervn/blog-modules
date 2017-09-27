import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {onChangeActiveForm} = this.props;
    return (
      <div className="form-group ds9799-sidenav-form">
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-user-o fa-fw" />
          </span>
          <input
            name="Username"
            type="text"
            className="form-control ds979-sidenav-form-input"
            placeholder="Username"
            value={this.state.Username}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-lock fa-fw" />
          </span>
          <input
            type="password"
            name="Password"
            className="form-control ds979-sidenav-form-input"
            placeholder="Password"
            value={this.state.Password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ paddingTop: '5px' }} className="pull-right">
          <button className="btn btn-primary" style={{marginRight: '5px'}}>
            <span>
              <i className="fa fa-sign-in fa-fw" />
            </span>Login
          </button>
          <button className="btn btn-primary" onClick={() => onChangeActiveForm('Register')}>
            <span>
              <i className="fa fa-pencil-square-o fa-fw" />
            </span>Register
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
