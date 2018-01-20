import './HeaderBar.css';
import React from 'react';

export default ({ name, quote, author, onShowHeaderMenu, onHideHeaderMenu, isShowHeaderMenu }) => (
  <div className="row header-bar-container">
    <div className="flex-center">
      <i className="fa fa-server fa-2x header-bar-icon" />
      <a className="header-bar-title" href="/">
        <h5>{name}</h5>
      </a>
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
        <i className={`fa ${isShowHeaderMenu ? 'fa-times' : 'fa-navicon'} fa-fw`} />
      </button>
    </div>
  </div>
);
