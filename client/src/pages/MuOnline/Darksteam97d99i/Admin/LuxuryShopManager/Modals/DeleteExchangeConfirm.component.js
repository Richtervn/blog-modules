import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ pack, onDeletePackage }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeletePackage(pack.id)}
    label={`Delete ${pack.name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{pack.name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
