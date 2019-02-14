import React from 'react';
import { ModalDelete } from 'components/Modal';

export default ({ project, onDeleteProject }) => (
  <ModalDelete
    iconUrl="/images/icons/danger.png"
    onClickSubmit={() => onDeleteProject(project._id)}
    label={`Delete ${project.Name}`}>
    <div className="alert alert-danger">
      <p>
        Are you sure you want to delete <strong>{project.Name}</strong> ?
      </p>
    </div>
  </ModalDelete>
);
