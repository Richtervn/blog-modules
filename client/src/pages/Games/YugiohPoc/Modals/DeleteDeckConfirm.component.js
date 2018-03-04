import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ deck, onDeleteDeck }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteDeck(deck._id)}
    label={`Delete ${deck.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{deck.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
