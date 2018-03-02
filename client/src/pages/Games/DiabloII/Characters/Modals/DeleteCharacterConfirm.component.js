import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ character, onDeleteCharacter }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteCharacter(character._id)}
    label={`Delete ${character.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure want to delete <strong>{character.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
