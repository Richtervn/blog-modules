import './ForgotPassword.css';
import React, { Component } from 'react';
import { InfoHeaderCard } from 'components/Cards';

import { InputGroupIcon } from 'components/FormTools';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForgotPassword: false,
      value: {
        Username: ''
      }
    };
  }

  render() {
    const { onRecoverPassword, lostPassword } = this.props;
    return (
      <InfoHeaderCard label="Forgot password ?">
        {!lostPassword &&
          !this.state.isForgotPassword && (
            <div className="text-center">
              <button className="btn btn-danger" onClick={() => this.setState({ isForgotPassword: true })}>
                Click Me!
              </button>
            </div>
          )}
        {!lostPassword &&
          this.state.isForgotPassword && (
            <div className="ds9799-register-form">
              <InputGroupIcon
                icon="user"
                type="text"
                value={this.state.value.Username}
                name="Username"
                onChange={e => this.setState({ value: { Username: e.target.value } })}
                placeholder="Username"
              />
              <div className="feature">
                <button
                  className="btn"
                  onClick={() => {
                    onRecoverPassword(this.state.value.Username);
                    this.setState({ value: { Username: '' } });
                  }}>
                  Submit
                </button>
                <button className="btn" onClick={() => this.setState({ isForgotPassword: false })}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        {lostPassword && (
          <div id="ds9799-recovered-pwd">
            <div className="alert alert-warning">Password recovered! Select the box below</div>
            <div className="pwd-box">{lostPassword}</div>
          </div>
        )}
      </InfoHeaderCard>
    );
  }
}

export default ForgotPassword;
