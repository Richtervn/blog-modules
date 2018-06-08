import './FeatureCard.css';
import React from 'react';
import StarRating from 'react-star-rating-component';
import { getStarcraftRaces } from 'helpers';
import classnames from 'classnames';

const FeatureCard = ({ rating, label, uri, matchUp, isActive, onClick, version }) => {
  const { playerRaces, opponentRaces } = getStarcraftRaces(matchUp);
  return (
    <div className={classnames('sc-feature-card', { active: isActive })} onClick={onClick}>
      <div className="label">{label}</div>
      <div className="content">
        <div className="matchup">
          {playerRaces.map((race, i) => <img key={i} className="icon" src={`/images/icons/${race}.png`} alt={race} />)}
          <img className="versus-icon" src="/images/icons/versus.png" alt="vs" />
          {opponentRaces.map((race, i) => (
            <img key={i} className="icon" src={`/images/icons/${race}.png`} alt={race} />
          ))}
        </div>
        <div className="rating">
          {version && (
            <div className="version">
              <img className="icon" src="/images/icons/sc_launcher.ico" alt={version} />
              <div className="text">{version}</div>
            </div>
          )}
          <a href={uri} className="dl-btn" download onClick={e => e.stopPropagation()}>
            <i className="fa fa-download" />
          </a>
          <StarRating name={label} value={rating} editing={false} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
