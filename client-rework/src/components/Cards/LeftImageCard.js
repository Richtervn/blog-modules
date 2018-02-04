import './LeftImageCard.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(
  ({ col, imgUrl, isActive, admin, onClick, onClickEdit, onClickDelete, route, children, history }) => (
    <div className={`col-${col}`}>
      <div className="row">
        <div
          className={`left-image-card ${isActive ? 'active' : ''}`}
          onClick={e => {
            e.stopPropagation();
            if (route) {
              history.push(route);
            } else {
              onClick();
            }
          }}>
          <div className="left-image-card-img">
            <img src={imgUrl} className="left-image-card-img" alt={imgUrl} />
          </div>
          <div className="left-image-card-content">
            {admin && (
              <div className="left-image-card-feature">
                <button
                  className="btn"
                  onClick={e => {
                    e.stopPropagation();
                    onClickEdit();
                  }}>
                  <i className="fa fa-edit" />
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
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
);
