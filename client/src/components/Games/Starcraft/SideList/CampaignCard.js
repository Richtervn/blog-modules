import React from 'react';
import extractRaces from 'factories/extractRaces';
import StarRating from 'react-star-rating-component';

export default ({ campaign, isFocus, onSelect }) => {
  const { playerRaces, opponentRaces } = extractRaces(campaign.Matchup);

  return (
    <div className="sc-add-map-btn" style={{color: isFocus ? '#ddff66' : '#00cc00'}} onClick={() => onSelect(campaign)}>
      <div className="row no-row-margin">
        <div className="col-9 no-col-margin">
          {campaign.Name}
        </div>
        <div className="col-3 no-col-margin">
          <img className="sc-launcher-icon" src='/app_modules/images/icons/sc_launcher.png'/>
          {campaign.Version}
        </div>
      </div>
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
