import './ProgressBadgesCard.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { AdminButtons } from 'components/Buttons';

const ProgressBadgesCard = ({
  col,
  label,
  badges,
  progress,
  showProgress,
  children,
  color,
  onClickEdit,
  onClickDelete,
  onClick,
  route,
  history
}) => {
  const styles = {};

  if (color) {
    styles.backgroundColor = color;
    styles.color = 'white';
  }

  return (
    <div className={`col-${col}`}>
      <div className="row">
        <div
          className="progress-badges-card"
          style={styles}
          onClick={e => {
            e.stopPropagation();
            if (route) {
              history.push(route);
            } else {
              onClick();
            }
          }}>
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
              style={{ width: `${progress || 0}%` }}>
              {showProgress && Math.round(progress) + '%'}
            </div>
          </div>
          <AdminButtons
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            customClass="progress-badges-card-features"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProgressBadgesCard);
