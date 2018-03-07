import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ version, onDeleteVersion }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteVersion(version._id)}
    label={`Delete ${version.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{version.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
