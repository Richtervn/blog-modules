import React from 'react';
import extractRaces from 'factories/extractRaces';
import StarRating from 'react-star-rating-component';

export default ({ map, isFocus, onSelect }) => {
  const { playerRaces, opponentRaces } = extractRaces(map.Matchup);

  return (
    <div
      className="sc-add-map-btn"
      style={{ color: isFocus ? '#ddff66' : '#00cc00' }}
      onClick={() => onSelect(map)}>
      <div>{map.Name}</div>
      <div className="row no-row-margin">
        <div className="col-9 no-col-margin">
          {playerRaces.map((race, i) => (
            <img key={i} className="sc-race-icon" src={`/app_modules/images/icons/${race}.png`} />
          ))}
          <img className="sc-versus-icon" src="/app_modules/images/icons/versus.png" />
          {opponentRaces.map((race, i) => (
            <img key={i} className="sc-race-icon" src={`/app_modules/images/icons/${race}.png`} />
          ))}
        </div>
        <div className="col-3 no-col-margin sc-map-rating">
          <StarRating name={map.Name} editing={false} value={parseInt(map.Rating)} />
        </div>
      </div>
    </div>
  );
};
