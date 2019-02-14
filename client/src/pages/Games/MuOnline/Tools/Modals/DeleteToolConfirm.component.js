import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ tool, onDeleteTool }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteTool(tool._id)}
    label={`Delete ${tool.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{tool.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
