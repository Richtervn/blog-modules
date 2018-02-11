import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ overview, onDeleteGuide }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteGuide(overview._id)}
    label={`Delete ${overview.Title}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{overview.Title}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
