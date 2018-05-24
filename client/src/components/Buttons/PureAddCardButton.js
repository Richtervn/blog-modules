import './PureAddCardButton.css';
import React from 'react';
import classnames from 'classnames';

export default ({ customClass = 'default', height, width, onClick }) => {
  const styles = { width: width ? width : '100%', height: height ? height : '100%' };
  return (
    <div className={classnames('pure-add-card-button', customClass)} style={styles} onClick={onClick}>
      <i className="fa fa-plus-circle" />
    </div>
  );
};
