import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ survivalKit, onDeleteSurvivalKit }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteSurvivalKit(survivalKit._id)}
    label={`Delete ${survivalKit.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{survivalKit.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
