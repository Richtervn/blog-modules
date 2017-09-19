import React from 'react';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import CampaignCard from 'components/CampaignCard';

export default ({
  campaigns,
  addCampaignFormState,
  onCampaignSubmit,
  onGetCampaignList,
  onGetCampaignDetail,
  campaignFocus,
  onSelect
}) => {
  if (!campaigns) {
    onGetCampaignList();
    return null;
  }

  if (!campaignFocus.Name && campaigns && campaigns.length > 0) {
    onGetCampaignDetail(campaigns[0]._id);
    return null;
  }

  return (
    <div>
      <div
        className="sc-add-map-btn"
        data-toggle="modal"
        data-target="#addStarcraftCampaignModal">
        <i className="fa fa-plus-circle" />
      </div>
      {CampaignCard.map((campaign, i) => (
        <CampaignCard
          key={i}
          campaign={campaign}
          isFocus={campaign._id == campaignFocus}
          onSelect={onSelect}
        />
      ))}
      <FormModal
        id="addStarcraftCampaignModal"
        formBody={addCampaignFormState}
        onSubmit={onCampaignSubmit}
      />
    </div>
  );
};
