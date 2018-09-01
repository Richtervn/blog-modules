import './FeatureDetail.css';
import React from 'react';
import StarRating from 'react-star-rating-component';
import { getStarcraftRaces } from 'helpers';

const isNotEmpty = arr => {
  if (!arr) {
    return false;
  }
  if (arr.length > 1) {
    return true;
  }
  if (arr.length === 1 && !arr[0]) {
    return false;
  }
  return true;
};

export default ({
  onEditClick,
  onDeleteClick,
  onEditBindClick,
  title,
  rating,
  matchup,
  description,
  tipntrick,
  version,
  htmlBind,
  cssBind
}) => {
  let playerRaces, opponentRaces;
  if (matchup) {
    const matchUpDecoded = getStarcraftRaces(matchup);
    playerRaces = matchUpDecoded.playerRaces;
    opponentRaces = matchUpDecoded.opponentRaces;
  }

  return (
    <div className="sc-detail">
      <div className="feature">
        <button className="btn" onClick={() => onEditClick()}>
          <i className="fa fa-pencil" />
        </button>
        <button className="btn" onClick={() => onDeleteClick()}>
          <i className="fa fa-times" />
        </button>
      </div>
      <h3 className="title">{title}</h3>
      {version && (
        <div className="version">
          <img className="icon" src="/images/icons/sc_launcher.ico" alt={version} />
          <div className="text">{version}</div>
        </div>
      )}
      <div className="rating">
        <StarRating name={title} value={rating} />
      </div>
      {matchup && (
        <div className="matchup">
          <div className="half">
            <div className="label">Player Races</div>
            <div className="races">
              {playerRaces.map((race, i) => <img key={i} src={`/images/icons/${race}.png`} alt={race} />)}
            </div>
          </div>
          <div className="half">
            <div className="label">Opponent Races</div>
            <div className="races">
              {opponentRaces.map((race, i) => <img key={i} src={`/images/icons/${race}.png`} alt={race} />)}
            </div>
          </div>
        </div>
      )}
      {description && (
        <div className="description">
          <strong>Description: </strong>
          {description}
        </div>
      )}
      {isNotEmpty(tipntrick) && (
        <div className="tipntrick">
          <div>
            <strong>Tips And Tricks: </strong>
          </div>
          <ul>{tipntrick.map((tnt, i) => <li key={i}>{tnt}</li>)}</ul>
        </div>
      )}
      {htmlBind && (
        <div className="html-bind-wrapper">
          <div className="html-bind" dangerouslySetInnerHTML={{ __html: htmlBind }} />
          <div className="feature">
            <button className="btn" onClick={() => onEditBindClick()}>
              <i className="fa fa-edit" />
            </button>
          </div>
          {cssBind && <style>{cssBind}</style>}
        </div>
      )}
    </div>
  );
};
