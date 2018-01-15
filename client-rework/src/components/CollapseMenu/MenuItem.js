import './MenuItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ name, onClick, isActive, route }) => {
  if (route) {
    return (
      <Link to={route}>
        <div className={`menu-group-item ${isActive ? 'active' : ''}`} onClick={() => onClick(name)}>
          <span>
            <i className="fa fa-genderless fa-fw menu-group-icon" />
          </span>
          {name}
        </div>
      </Link>
    );
  } else {
    return (
      <div className={`menu-group-item ${isActive ? 'active' : ''}`} onClick={() => onClick(name)}>
        <span>
          <i className="fa fa-genderless fa-fw menu-group-icon" />
        </span>
        {name}
      </div>
    );
  }
};
