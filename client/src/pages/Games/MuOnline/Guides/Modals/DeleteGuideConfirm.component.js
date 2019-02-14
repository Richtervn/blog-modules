import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ guide, onDeleteGuide }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteGuide(guide._id)}
    label={`Delete ${guide.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{guide.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
