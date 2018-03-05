import './AddCardButton.css';
import React from 'react';
import classNames from 'classnames';

export default ({ col, minHeight, customClass = 'default', onClick }) => {
  const styles = { minHeight };

  return (
    <div className={`col-${col}`}>
      <div className="row">
        <div className={classNames('add-card-button', customClass)} style={styles} onClick={onClick}>
          <i className="fa fa-plus-circle" />
        </div>
      </div>
    </div>
  );
};
