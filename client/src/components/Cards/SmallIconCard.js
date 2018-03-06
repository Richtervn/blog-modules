import './SmallIconCard.css';
import classNames from 'classnames';
import React from 'react';
import { createElementId } from 'utils';
import StarRating from 'react-star-rating-component';

export default ({ label, icon, rating, isActive, customClass = 'default', onClick }) => (
  <div className={classNames('small-icon-card', { active: isActive }, customClass)} onClick={onClick}>
    <div className="icon-wrapper">
      <img src={icon} alt={label} />
    </div>
    <div className="content">
      <div className="label">{label}</div>
      <div className="rating">
        <StarRating name={createElementId(label)} value={rating} editing={false} />
      </div>
    </div>
  </div>
);
