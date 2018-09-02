import './MenuItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ name, onClick, isActive }) => (
  <div className={`menu-group-item ${isActive ? 'active' : ''}`} onClick={() => onClick(name)}>
    <span>
      <i className="fa fa-genderless fa-fw menu-group-icon" />
    </span>
    {name}
  </div>
);

export default ({ name, onClick, isActive, route }) => {
  if (route) {
    return (
      <Link to={route}>
        <MenuItem name={name} onClick={onClick} isActive={isActive} />
      </Link>
    );
  } else {
    return <MenuItem name={name} onClick={onClick} isActive={isActive} />;
  }
};
