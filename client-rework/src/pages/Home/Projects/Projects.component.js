import './Projects.css';
import React from 'react';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import AddCardButton from 'components/AddCardButton';

export default ({ projects, onGetProjects }) => {
  if (!projects) {
    onGetProjects();
    return <TabLoader />;
  }

  return (
    <div className="fit-container" id="tabProjects">
      <div className="container-fluid">
        <div className="row projects-container">
          {projects.map(project => <div />)}
          <AddCardButton col={3} minHeight="200px" color="#2e2f2f" onClick={() => openModal('AddProject')} />
        </div>
      </div>
    </div>
  );
};
