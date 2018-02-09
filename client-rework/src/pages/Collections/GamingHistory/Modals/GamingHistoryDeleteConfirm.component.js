import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ game, onDeleteGame }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteGame(game._id)}
    label={`Delete ${game.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{game.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
