import React from 'react';

export default ({ info }) => (
  <div className="ds9799-server-info-card text-justify">
    {Object.keys(info).map((key, i) => (
      <div key={i} className="ds9799-server-info-text">
        <b>{`${key} :`}</b> {`${info[key]}`}
      </div>
    ))}
  </div>
);
