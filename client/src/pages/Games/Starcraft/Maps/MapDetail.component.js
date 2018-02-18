import './MapDetail.css';
import React from 'react';

import StarRating from 'react-star-rating-component';
import { getStarcraftRaces } from 'helpers';
import { openModal } from 'common/Modal';

export default ({ map, onEditMap }) => {
  if (!map) {
    return (
      <div className="flex-center sc-zero-notice">
        <div className="notice">No map selected</div>
      </div>
    );
  }
  const { playerRaces, opponentRaces } = getStarcraftRaces(map.Matchup);

  return (
    <div className="sc-map-detail">
      <div className="feature">
        <button className="btn" onClick={() => openModal('EditStarcraftMap')}>
          <i className="fa fa-pencil" />
        </button>
        <button className="btn" onClick={() => openModal('DeleteStarcraftMap')}>
          <i className="fa fa-times" />
        </button>
      </div>
      <h3 className="title">{map.Name}</h3>
      <div className="rating">
        <StarRating name={map.Name} value={map.Rating} />
      </div>
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
      <div className="description">
        <strong>Description : </strong>
        {map.Description}
      </div>
      <div className="tipntrick">
        <div>
          <strong>Tips And Tricks : </strong>
        </div>
        <ul>{map.Tipntrick.map((tnt, i) => <li key={i}>{tnt}</li>)}</ul>
      </div>
    </div>
  );
};

// import React from 'react';
// import extractRaces from 'factories/extractRaces';

// import StarRating from 'react-star-rating-component';
// import FormModal from 'components/FormModal';
// import DeleteModal from 'components/DeleteModal';

// export default ({ map, onEditMapSubmit, editMapFormState, onDeleteMap }) => {
//   if (!map.Name) return null;
//   const { playerRaces, opponentRaces } = extractRaces(map.Matchup);
//   return (
//     <div>
//       <div className="sc-map-info-container text-center">

//       </div>
//       <FormModal id="editStarcraftMapModal" formBody={editMapFormState} onSubmit={onEditMapSubmit} />
//       <DeleteModal
//         id="deleteStarcraftMapModal"
//         text={`Hey man, make sure you want to delete ${map.Name}. The action can't be backed up`}
//         onSubmit={() => onDeleteMap(map._id)}
//       />
//     </div>
//   );
// };
