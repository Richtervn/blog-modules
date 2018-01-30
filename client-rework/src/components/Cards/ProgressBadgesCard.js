import './ProgressBadgesCard.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(
  ({ col, label, badges, progress, children, color, onClickEdit, onClickDelete, onClick, route, history }) => {
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
                style={{ width: `${progress || 0}%` }}
              />
            </div>
            <div className="progress-badges-card-features">
              <button
                className="btn"
                onClick={e => {
                  onClickEdit();
                  e.stopPropagation();
                }}>
                <i className="fa fa-pencil" />
              </button>
              <button
                className="btn"
                onClick={e => {
                  e.stopPropagation();
                  onClickDelete();
                }}>
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
