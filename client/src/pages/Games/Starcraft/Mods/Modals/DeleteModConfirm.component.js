import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ mod, onDeleteMod }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteMod(mod._id)}
    label={`Delete ${mod.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{mod.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
