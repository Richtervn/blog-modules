import React from 'react';
import extractRaces from 'factories/extractRaces';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';

export default ({ map, onEditMapSubmit, editMapFormState }) => {
  if (!map.Name) return null;
  const { playerRaces, opponentRaces } = extractRaces(map.Matchup);
  return (
    <div>
      <div className="sc-map-info-container text-center">
        <h3 style={{ paddingTop: '20px' }}>
          <strong>{map.Name.toUpperCase()}</strong>
        </h3>
        <div className="sc-map-info-feature">
          <button className="sc-map-feature-btn" data-toggle="modal" data-target="#editStarcraftMapModal"><i className="fa fa-pencil"/></button>
          <button className="sc-map-feature-btn" data-toggle="modal" data-target="#deleteStarcraftMapModal"><i className="fa fa-times"/></button>
        </div>
        <div className="larger-star-rating">
          <StarRating name={map.Name} value={parseInt(map.Rating)} editing={false}/>
        </div>
        <div className="row no-row-margin">
          <div className="col no-col-margin">
            <div className="sc-green-box">Player Races</div>
            <div className="sc-green-box">
              {playerRaces.map((race, i) => <img key={i} src={`/app_modules/images/icons/${race}.png`} />)}
            </div>
          </div>
          <div className="col no-col-margin">
            <div className="sc-green-box">Opponent Races</div>
            <div className="sc-green-box">
              {opponentRaces.map((race, i) => <img key={i} src={`/app_modules/images/icons/${race}.png`} />)}
            </div>
          </div>
        </div>
        <div
          className="sc-green-box text-jusify"
          style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '20px', marginBottom: '20px' }}>
          <strong>Description : </strong>
          {map.Description}
        </div>
        <div className="sc-green-box">
          <p>
            <strong>Tips And Tricks : </strong>
          </p>
          {map.Tipntrick.map((tnt, i) => <p key={i}>{tnt}</p>)}
        </div>
      </div>
      <FormModal id="editStarcraftMapModal" formBody={editMapFormState} onSubmit={onEditMapSubmit}/>
      <DeleteModal id="deleteStarcraftMapModal"/>
    </div>
  );
};
