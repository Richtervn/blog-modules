import React from 'react';
import extractRaces from 'factories/extractRaces';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import DeleteModal from 'components/DeleteModal';

export default ({ campaign, onEditCampaignSubmit, editCampaignFormState, onDeleteCampaign }) => {
  if (!campaign.Name) {
    return null;
  }

  const { playerRaces, opponentRaces } = extractRaces(campaign.Matchup);

  return (
    <div>
      <div className="sc-map-info-container text-center">
        <h3 style={{ paddingTop: '20px' }}>
          <strong>{campaign.Name.toUpperCase()}</strong>
        </h3>
        <div className="sc-map-info-feature">
          <button className="sc-map-feature-btn" data-toggle="modal" data-target="#editStarcraftCampaignModal">
            <i className="fa fa-pencil" />
          </button>
          <button className="sc-map-feature-btn" data-toggle="modal" data-target="#deleteStarcraftCampaignModal">
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="larger-star-rating">
          <StarRating name={campaign.Name} value={parseInt(campaign.Rating)} editing={false} />
        </div>
        <img src="/app_modules/images/icons/sc_launcher.ico" />
        {campaign.Version}

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
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            marginTop: '20px',
            marginBottom: '20px'
          }}>
          <strong>Description : </strong>
          {campaign.Description}
        </div>
        {campaign.Introduction && (
          <div className="sc-green-box">
            <p>
              <strong>Introduction : </strong>
            </p>
            <div
              style={{ paddingLeft: '20px' }}
              dangerouslySetInnerHTML={{
                __html: campaign.Introduction
              }}
            />
          </div>
        )}
      </div>
      <FormModal id="editStarcraftCampaignModal" formBody={editCampaignFormState} onSubmit={onEditCampaignSubmit} />
      <DeleteModal
        id="deleteStarcraftMapModal"
        text={`Hey man, make sure you want to delete ${campaign.Name}. The action can't be backed up`}
        onSubmit={() => onDeleteCampaign(campaign._id)}
      />
    </div>
  );
};
