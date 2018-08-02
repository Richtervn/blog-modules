import './VerifyModal.css';
import React, { Component } from 'react';
import { InputGroupIcon } from 'components/FormTools';

class VerifyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    const { onVerify } = this.props;

    return (
      <div id="verify-modal" className="row">
        <div className="verify-box">
          <form className="text-right">
            <InputGroupIcon
              icon="user"
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
              placeholder="Admin username"
            />
            <InputGroupIcon
              icon="lock"
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
              placeholder="Admin password"
            />
          </form>
          <div className="btn-container">
            <button className="btn btn-primary btn-block" onClick={() => onVerify(this.state)}>
              Unlock Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyModal;
