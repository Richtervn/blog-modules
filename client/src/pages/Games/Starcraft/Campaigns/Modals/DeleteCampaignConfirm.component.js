import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ campaign, onDeleteCampaign }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteCampaign(campaign._id)}
    label={`Delete ${campaign.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{campaign.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
