import './HeaderBar.css';
import React from 'react';

export default ({ name, quote, author }) => (
  <div className="row header-bar-container">
    <div className="col">
      <div className="row">
        <i className="fa fa-server fa-2x header-bar-icon" />
        <a className="header-bar-title" href="/">
          <h5>{name}</h5>
        </a>
      </div>
    </div>
    <div className="col">
      <div className="text-center">
        <i className="header-bar-quote">&#10077; {quote}&#10078;</i>
        <br />
        <div className="header-bar-quote-author">{author}</div>
      </div>
    </div>
  </div>
);
