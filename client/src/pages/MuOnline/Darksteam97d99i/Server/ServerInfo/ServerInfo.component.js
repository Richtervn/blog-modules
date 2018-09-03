import './ServerInfo.css';
import React, { Component } from 'react';
import { ContainerLoader } from 'common/Loaders';

class ServerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.serverInfo ? this.props.serverInfo : {}, isHideNotice: false };
  }

  componentWillMount() {
    this.props.onGetServerInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.serverInfo && nextProps.serverInfo) {
      this.setState({ value: nextProps.serverInfo });
    }
  }

  render() {
    const { serverInfo, onSave } = this.props;
    const { value, isHideNotice } = this.state;
    if (!serverInfo) {
      return <ContainerLoader />;
    }

    return (
      <div id="ds9799-server-info">
        {!isHideNotice && (
          <div className="alert alert-danger">
            Server Info is just the information to display about the server. To really edit it, open commonserver.cfg
            with notepad in Mu server folder.
            <div className="feature">
              <button className="btn" onClick={() => this.setState({ isHideNotice: true })}>
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
        )}
        {Object.keys(value).map((field, i) => (
          <div className="col-6" key={i}>
            <label>{field} : </label>
            <input
              className="form-control"
              type={field !== 'Server IP' ? 'number' : 'text'}
              name={field}
              value={value[field]}
              onChange={e => this.setState({ value: { ...value, [field]: e.target.value } })}
            />
          </div>
        ))}
        <div className="feature">
          <button className="btn btn-primary" onClick={() => onSave(this.state.value)}>
            Save
          </button>
          <button className="btn btn-danger" onClick={() => this.setState({ value: serverInfo })}>
            Undo
          </button>
        </div>
      </div>
    );
  }
}

export default ServerInfo;
