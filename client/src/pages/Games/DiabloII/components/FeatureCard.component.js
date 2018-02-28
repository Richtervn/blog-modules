import './FeatureCard.css';
import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ iconUrl, name, iconBadge, onIconBadgeClick, archiveUrl, rating, isActive, onClick, version }) => (
  <div
    className={`d2-feature-card ${isActive ? 'active' : ''}`}
    onClick={() => {
      if (!isActive) onClick();
    }}>
    <div className="icon-wrapper">
      <img className="icon" src={iconUrl} alt={name} />
      {iconBadge && (
        <div className="badge badge-info" onClick={() => onIconBadgeClick()}>
          {iconBadge}
        </div>
      )}
    </div>
    <div className="info">
      <div className="name">
        {name}&nbsp;
        {version && <span className="badge badge-danger">{version}</span>}
      </div>
      <StarRating value={rating} name={name} editing={false} />
    </div>
    <a href={archiveUrl} className="dl-btn" download onClick={e => e.stopPropagation()}>
      <i className="fa fa-download" />
    </a>
  </div>
);
