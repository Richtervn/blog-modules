import './TextPriorityCard.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

import classNames from 'classnames';
import { connectString } from 'helpers';

import { AdminButtons } from 'components/Buttons';

const TextPriorityCard = ({
  col,
  children,
  route,
  priority,
  history,
  onClickEdit,
  onClickDelete,
  onClick,
  customClass
}) => (
  <div className={`col-${col}`}>
    <div className="row">
      <div
        className={classNames('text-priority-card', connectString(priority), customClass)}
        onClick={e => {
          e.stopPropagation();
          if (route) {
            history.push(route);
          } else {
            onClick();
          }
        }}>
        <div className="header">
          <AdminButtons
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            customClass="text-priority-card-feature"
          />
        </div>
        <div className="content">{children}</div>
        <div className="priority" />
      </div>
    </div>
  </div>
);

export default withRouter(TextPriorityCard);
