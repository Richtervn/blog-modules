import './HeaderBar.css';
import React from 'react';

import { Link } from 'react-router-dom';

export default ({ name, quote, author, onShowHeaderMenu, onHideHeaderMenu, isShowHeaderMenu }) => (
  <div className="row header-bar-container">
    <div className="flex-center">
      <i className="fa fa-server fa-2x header-bar-icon" />
      <Link className="header-bar-title" to="/">
        <h5>{name}</h5>
      </Link>
    </div>
    <div className="header-bar-texts-wrapper">
      <div>
        <i className="header-bar-quote">&#10077; {quote}&#10078;</i>
      </div>
      <div className="header-bar-quote-author">{author}</div>
    </div>
    <div className="header-bar-btn-wrapper">
      <button
        className="header-bar-btn"
        onClick={() => {
          isShowHeaderMenu ? onHideHeaderMenu() : onShowHeaderMenu();
        }}>
        <i className={`fa ${isShowHeaderMenu ? 'fa-times' : 'fa-bolt'} fa-fw`} />
      </button>
    </div>
  </div>
);
