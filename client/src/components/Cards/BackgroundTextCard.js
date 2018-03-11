import './BackgroundTextCard.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

const BackgroundTextCard = ({
  col,
  customClass = 'default',
  children,
  history,
  imgUrl,
  opacity = 0,
  admin,
  downloadUrl,
  onClickEdit,
  onClickDelete,
  route
}) => {
  const styles = { backgroundImage: `url(${imgUrl})` };
  const overlayStyles = { backgroundColor: `rgba(0, 0, 0, 0.${opacity})` };
  return (
    <div className={`col-${col}`}>
      <div className="row">
        <div
          className={classNames('background-text-card', customClass)}
          style={styles}
          onClick={() => history.push(route)}>
          <div className="overlay" style={overlayStyles}>
            {children}
            {admin && (
              <div className="feature">
                {downloadUrl && (
                  <a className="btn" href={downloadUrl} download onClick={e => e.stopPropagation()}>
                    <i className="fa fa-download" />
                  </a>
                )}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BackgroundTextCard);
