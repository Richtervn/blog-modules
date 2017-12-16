import React from 'react';

export default ({ channels, activeChannel, onChangeActiveChannel }) => (
  <div className="row no-row-margin">
    {channels.map((channel, i) => (
      <div className="col no-col-margin">
        <div
          key={i}
          className={`d2-channel-btn ${activeChannel == channel ? 'd2-channel-btn-active' : ''}`}
          onClick={() => onChangeActiveChannel(channel)}>
          {channel.toUpperCase()}
        </div>
      </div>
    ))}
  </div>
);
