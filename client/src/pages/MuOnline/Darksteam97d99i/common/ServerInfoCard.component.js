import React, { Component } from 'react';
import { InfoHeaderCard } from 'components/Cards';

class ServerInfoCard extends Component {
  componentWillMount() {
    const { serverInfo, onGetServerInfo } = this.props;
    if (!serverInfo) {
      onGetServerInfo();
    }
  }

  render() {
    const { serverInfo } = this.props;
    if (!serverInfo) {
      return null;
    }
    return (
      <InfoHeaderCard key="si_c" label="Server Info">
        {Object.keys(serverInfo).map((key, i) => (
          <div key={i} className="info-text">
            <strong>{`${key} :`}</strong> {`${serverInfo[key].toLocaleString()}`}
          </div>
        ))}
      </InfoHeaderCard>
    );
  }
}

export default ServerInfoCard;
