import './AppDiary.css';
import React, { Component } from 'react';
import Timeline from 'react-time-line';

import { TabLoader } from 'common/Loaders';

class AppDiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleAddLog = this.handleAddLog.bind(this);
  }

  componentWillMount() {
    if (!this.props.logs) {
      this.props.onGetLogs();
    }
  }

  handleAddLog() {
    this.props.onAddLog({ text: this.state.text });
    this.setState({ text: '' });
  }

  render() {
    if (!this.props.logs) {
      return <TabLoader />;
    }

    return (
      <div
        className="app-diary-container"
        onKeyPress={e => {
          if (e.key === 'Enter') {
            this.handleAddLog();
          }
        }}>
        <div className="app-diary-time-line">
          <Timeline items={this.props.logs} />
        </div>
        <div className="app-diary-feature">
          <input
            type="text"
            className="form-control"
            autoFocus={true}
            value={this.state.text}
            onChange={({ target: { value } }) => this.setState({ text: value })}
          />
          <button className="btn btn-primary" onClick={() => this.handleAddLog()}>
            <i className="fa fa-send-o fa-fw" />
          </button>
        </div>
      </div>
    );
  }
}

export default AppDiary;
