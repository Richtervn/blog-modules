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
    return (
      <InfoHeaderCard label="Forgot password ?">
        {!this.state.isForgotPassword && (
          <div className="text-center">
            <button className="btn btn-danger" onClick={() => this.setState({ isForgotPassword: true })}>
              Click Me!
            </button>
          </div>
        )}
        {this.state.isForgotPassword && (
          <div className="ds9799-register-form">
            <InputGroupIcon
              icon="user"
              type="text"
              value={this.state.value.Username}
              name="Username"
              onChange={this.handleChange}
              placeholder="Username"
            />
            <div className="feature">
              <button className="btn">Submit</button>
              <button className="btn" onClick={() => this.setState({ isForgotPassword: false })}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </InfoHeaderCard>
    );
  }
}

export default ForgotPassword;
