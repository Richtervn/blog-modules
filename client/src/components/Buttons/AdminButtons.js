import './AdminButtons.css';
import React from 'react';
import classNames from 'classnames';

export default ({ onClickEdit, onClickDelete, customClass = 'default' }) => (
  <div className={classNames('admin-btns', customClass)}>
    <button
      className="btn"
      onClick={e => {
        e.stopPropagation();
        onClickEdit();
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
);
