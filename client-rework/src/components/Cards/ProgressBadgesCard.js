import './ProgressBadgesCard.css';
import React from 'react';

export default ({ col, label, badges, progress, children, color, onClickEdit, onClickDelete, onClick }) => {
  const styles = {};

  if (color) {
    styles.backgroundColor = color;
    styles.color = 'white';
  }

  return (
    <div className={`col-${col}`}>
      <div className="row">
        <div className="progress-badges-card" style={styles} onClick={() => onClick()}>
          <h4>
            <strong>{label}</strong>
          </h4>
          <div>
            {badges &&
              badges.map((badge, i) => (
                <span key={i} className="badge badge-info">
                  {badge}
                </span>
              ))}
          </div>
          {children}
          <div className="progress">
            <div
              className={`progress-bar progress-bar-striped ${progress < 100 ? 'progress-bar-animated' : ''}`}
              style={{ width: `${progress || 0}%` }}
            />
          </div>
          <div className="progress-badges-card-features">
            <button className="btn" onClick={() => onClickEdit()}>
              <i className="fa fa-pencil" />
            </button>
            <button className="btn" onClick={() => onClickDelete()}>
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
