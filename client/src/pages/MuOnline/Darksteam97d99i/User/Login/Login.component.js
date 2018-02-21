import './Login.css';
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import { InputGroupIcon } from 'components/FormTools';

import { SideNav, InfoCard } from '../../components';

class Login extends Component {
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
    const { history, onSetCurrentPage, onLogin, isLoggedIn, serverInfo } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/darksteam_97d99i/user/dashboard" />;
    }
    return (
      <div className="row">
        <SideNav>
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
                  onSetCurrentPage('register');
                  history.push('/darksteam_97d99i/user/register');
                }}>
                Register
              </button>
            </div>
          </div>

          <InfoCard label="Server Info">
            {Object.keys(serverInfo).map((key, i) => (
              <div key={i} className="info-text">
                <strong>{`${key} :`}</strong> {`${serverInfo[key].toLocaleString()}`}
              </div>
            ))}
          </InfoCard>
          <InfoCard label="Version Info">
            <div>
              <strong>Story Line: </strong>Chapter I - The Beginning
            </div>
            <div>
              <strong>MU Server: </strong>Darksteam 97d+99i
            </div>
            <div>
              <strong>MU Server Version: </strong>Beta 37.3
            </div>
            <div>
              <strong>MU Client Version: </strong>0.97.04
            </div>
            <div>
              <strong>Web App Version: </strong>2.0.0
            </div>

            <div>
              <strong>Web Server Version: </strong>2.0.0
            </div>
          </InfoCard>
        </SideNav>
      </div>
    );
  }
}

export default withRouter(Login);
