import React from 'react';

export default ({ campaign, onEditCampaignSubmit, editCampaignFormState, onDeleteCampaign }) => {
  if(!campaign.Name){
    return null;
  }
  return (
    <div className="sc-green-box">
      <div style={{ paddingLeft: '20px' }} dangerouslySetInnerHTML={{ __html: '' }} />
    </div>
  );
};
