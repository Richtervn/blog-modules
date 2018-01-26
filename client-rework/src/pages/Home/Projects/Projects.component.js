import './Projects.css';
import React from 'react';
import moment from 'moment';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import AddCardButton from 'components/AddCardButton';
import { ProgressBadgesCard } from 'components/Cards';

import ProjectBoard from './components/ProjectBoard.container';

export default ({ projects, onGetProjects, onSetCurrentProject, projectOnBoard, onGetProjectDetail }) => {
  if (!projects) {
    onGetProjects();
    return <TabLoader />;
  }

  return (
    <div className="fit-container" id="tabProjects">
      <div className="container-fluid">
        {!projectOnBoard && (
          <div className="row projects-container">
            {projects.map(project => (
              <ProgressBadgesCard
                key={project._id}
                col={3}
                color={project.Color}
                label={project.Name}
                progress={project.progress}
                badges={project.Technologies}
                onClick={() => onGetProjectDetail(project._id)}
                onClickEdit={() => {
                  onSetCurrentProject(project);
                  openModal('EditProject');
                }}
                onClickDelete={() => {
                  onSetCurrentProject(project);
                  openModal('DeleteProject');
                }}>
                <div className="project-info">
                  <p>
                    <strong>Start : </strong>
                    {moment(project.StartTime).format('DD-MM-YYYY')}
                  </p>
                  {project.EndTime && (
                    <p>
                      <strong>End : </strong>
                      {moment(project.EndTime).format('DD-MM-YYYY')}
                    </p>
                  )}
                </div>
              </ProgressBadgesCard>
            ))}
            <AddCardButton col={3} minHeight="200px" color="#2e2f2f" onClick={() => openModal('AddProject')} />
          </div>
        )}
        {projectOnBoard && <ProjectBoard />}
      </div>
    </div>
  );
};
