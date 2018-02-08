import './TextPriorityCard.css';
import React from 'react';

import { withRouter } from 'react-router-dom';

export default withRouter(({ col, children, route, priority, history, onClickEdit, onClickDelete, onClick }) => {
  const styles = {};

  switch (priority) {
    case 'Must Read':
      styles.backgroundColor = '#dc3545';
      break;
    case 'Highly Recommended':
      styles.backgroundColor = '#ffc107';
      break;
    case 'Recommended':
      styles.backgroundColor = '#28a745';
      break;
    case 'Interest':
      styles.backgroundColor = '#17a2b8';
      break;
    default:
      break;
  }

  return (
    <div className={`col-${col}`}>
      <div className="row">
        <div
          className="text-priority-card"
          onClick={e => {
            e.stopPropagation();
            if (route) {
              history.push(route);
            } else {
              onClick();
            }
          }}>
          <div className="header">
            <div className="feature">
              <button
                className="feature-btn"
                onClick={e => {
                  e.stopPropagation();
                  onClickEdit();
                }}>
                <i className="fa fa-pencil" />
              </button>
              <button
                className="feature-btn"
                onClick={e => {
                  e.stopPropagation();
                  onClickDelete();
                }}>
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
          <div>{children}</div>
          <div className="priority" style={styles} />
        </div>
      </div>
    </div>
  );
});
