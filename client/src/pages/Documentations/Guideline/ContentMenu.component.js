import './ContentMenu.css';
import React from 'react';

export default () => (
  <div className="dc-content-menu">
    <a href="#personal-database">
      <div className="group-section">Personal Database</div>
    </a>
    <a href="#pd-about">
      <div className="group-item">&bull; About</div>
    </a>
    <a href="#pd-server">
      <div className="group-item">&bull; Server</div>
    </a>
    <a href="#pd-client">
      <div className="group-item">&bull; Client</div>
    </a>
    <a href="#collections">
      <div className="group-section">Collections</div>
    </a>
    <a href="#mangas-reading">
      <div className="group-item">&bull; Mangas Reading</div>
    </a>
  </div>
);
