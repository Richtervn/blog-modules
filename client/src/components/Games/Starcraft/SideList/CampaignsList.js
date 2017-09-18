import React from 'react';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';

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
      <div className="sc-add-map-btn" data-toggle="modal" data-target="#addStarcraftCampaignModal">
        <i className="fa fa-plus-circle" />
      </div>
      <FormModal id="addStarcraftCampaignModal" formBody={addCampaignFormState} onSubmit={onCampaignSubmit} />
    </div>
  );
};
