import './LeftImageCard.css';
import React from 'react';
import classNames from 'classnames';

import { AdminButtons } from 'components/Buttons';
import { withRouter } from 'react-router-dom';

const LeftImageCard = ({
  col,
  imgUrl,
  imgWidth = 120,
  imgHeight = 180,
  isActive,
  admin,
  onClick,
  onClickEdit,
  onClickDelete,
  route,
  children,
  nohover,
  history,
  customClass = 'default'
}) => (
  <div className={`col-${col}`}>
    <div className="row">
      <div
        className={classNames('left-image-card', { active: isActive, 'no-hover': nohover }, customClass)}
        onClick={e => {
          if (!isActive) {
            e.stopPropagation();
            if (route) {
              history.push(route);
            } else {
              onClick && onClick();
            }
          }
        }}>
        <div className="image-wrapper">
          <img src={imgUrl} className="image" alt={imgUrl} width={imgWidth} height={imgHeight} />
        </div>
        <div className="content">
          {admin && (
            <AdminButtons
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              customClass="left-image-card-feature"
            />
          )}
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(LeftImageCard);
