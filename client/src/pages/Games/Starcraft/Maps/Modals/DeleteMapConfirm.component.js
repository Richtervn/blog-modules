import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ map, onDeleteMap }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteMap(map._id)}
    label={`Delete ${map.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{map.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
