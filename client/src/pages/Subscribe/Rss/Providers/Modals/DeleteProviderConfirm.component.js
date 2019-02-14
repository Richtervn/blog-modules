import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ provider, onDeleteProvider }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteProvider(provider._id)}
    label={`Delete ${provider.Provider}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{provider.Provider}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
