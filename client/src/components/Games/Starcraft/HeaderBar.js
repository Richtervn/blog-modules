import React from 'react';

const headers = ['Campaigns', 'Mods', 'Maps'];

export default ({ current, onNavigate }) => (
  <ul className="sc-header-navigation-list">
    {headers.map((header, i) => (
      <li key={i} className="sc-header-navigation-list-item">
        <a className="sc-header-navigation-link" href="#" onClick={() => onNavigate(header)} style={{color: current == header ? '#ddff66' : '#00cc00'}}>
          <strong>{header.toUpperCase()}</strong>
        </a>
      </li>
    ))}
  </ul>
);
