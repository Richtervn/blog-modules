import './LeftPngCardTrans.css';
import React from 'react';
import classNames from 'classnames';

export default ({ col, imgUrl, children, customClass = 'default' }) => (
  <div className={`col-${col}`}>
    <div className="row">
      <div className={classNames('left-png-card-trans', customClass)}>
        <div className="image-wrapper">
          <img src={imgUrl} alt={imgUrl} />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  </div>
);
