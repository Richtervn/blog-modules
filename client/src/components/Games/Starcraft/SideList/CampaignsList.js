import React from 'react';

import StarRating from 'react-star-rating-component';
import FormModal from 'components/FormModal';
import CampaignCard from './CampaignCard';
import ToolsBar from './ToolsBar';

export default ({
  campaigns,
  addCampaignFormState,
  onCampaignSubmit,
  onGetCampaignList,
  onGetCampaignDetail,
  campaignFocus,
  onSelect,
  onSort,
  onSearch
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
      <ToolsBar control="Campaign" onSort={onSort} onSearch={onSearch} />
      {campaigns.map((campaign, i) => (
        <CampaignCard
          key={i}
          campaign={campaign}
          isFocus={campaign._id == campaignFocus._id}
          onSelect={onSelect}
          onGetCampaignDetail={onGetCampaignDetail}
        />
      ))}
      <FormModal id="addStarcraftCampaignModal" formBody={addCampaignFormState} onSubmit={onCampaignSubmit} />
    </div>
  );
};
