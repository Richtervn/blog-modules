import './AppDiary.css';
import React, { useState, useEffect } from 'react';
import Timeline from 'react-time-line';

import { TabLoader } from 'common/Loaders';

export default ({ logs, onAddLog, onGetLogs }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    if (!logs) {
      onGetLogs();
    }
  }, []);
  useEffect(() => {
    if (logs) {
      const bottomNode = document.getElementById('bottom-placeholder');
      bottomNode.scrollIntoView({ behavior: 'smooth' });
    }
  });

  const handleAddLog = () => {
    if (!text) return;
    onAddLog({ text });
    setText('');
  };

  if (!logs) {
    return <TabLoader />;
  }

  return (
    <div
      className="app-diary-container"
      onKeyPress={e => {
        if (e.key === 'Enter') handleAddLog();
      }}>
      <div className="app-diary-time-line">
        <Timeline items={logs} />
        <div id="bottom-placeholder" />
      </div>
      <div className="app-diary-feature">
        <input
          type="text"
          className="form-control"
          autoFocus={true}
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
        <button className="btn btn-primary" onClick={() => handleAddLog()}>
          <i className="fa fa-send-o fa-fw" />
        </button>
      </div>
    </div>
  );
};
