import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Username: '',
      Password: '',
      PasswordRepeat: '',
      BirthDay: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegist = this.handleRegist.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleRegist(){
    this.props.onRegister(this.state);
  }

  render() {
    const { onChangeActiveForm, onRegister } = this.props;
    return (
      <div className="form-group ds9799-sidenav-form">
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-user fa-fw" />
          </span>
          <input
            name="Name"
            type="text"
            className="form-control ds9799-sidenav-form-input"
            placeholder="Your Name"
            value={this.state.Name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-envelope fa-fw" />
          </span>
          <input
            name="Email"
            type="email"
            className="form-control ds9799-sidenav-form-input"
            placeholder="Email Address"
            value={this.state.Email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-user-o fa-fw" />
          </span>
          <input
            name="Username"
            type="text"
            className="form-control ds9799-sidenav-form-input"
            placeholder="Username"
            value={this.state.Username}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-lock fa-fw" />
          </span>
          <input
            type="password"
            name="Password"
            className="form-control ds9799-sidenav-form-input"
            placeholder="Password"
            value={this.state.Password}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-lock fa-fw" />
          </span>
          <input
            type="password"
            name="PasswordRepeat"
            className="form-control ds9799-sidenav-form-input"
            placeholder="Repeat Password"
            value={this.state.PasswordRepeat}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="input-group" style={{ paddingTop: '5px' }}>
          <span className="input-group-addon">
            <i className="fa fa-birthday-cake fa-fw" />
          </span>
          <input
            type="date"
            name="BirthDay"
            className="form-control ds9799-sidenav-form-input"
            placeholder="Your Birth Day"
            value={this.state.BirthDay}
            onChange={this.handleChange}
            required
          />
        </div>
        <div style={{ paddingTop: '5px' }} className="pull-right">
          <button className="btn btn-primary" style={{ marginRight: '5px' }} onClick={this.handleRegist}>
            <span>
              <i className="fa fa-pencil-square-o fa-fw" />
            </span>Register
          </button>
          <button className="btn btn-danger" onClick={() => onChangeActiveForm('Login')}>
            <span>
              <i className="fa fa-close fa-fw" />
            </span>Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
