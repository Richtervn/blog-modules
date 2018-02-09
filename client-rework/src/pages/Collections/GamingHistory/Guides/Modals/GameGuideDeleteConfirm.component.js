import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ guide, onDeleteGuide }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteGuide(guide._id)}
    label={`Delete ${guide.Title}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{guide.Title}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
