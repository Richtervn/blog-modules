import './Projects.css';
import React from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import AddCardButton from 'components/AddCardButton';
import { ProgressBadgesCard } from 'components/Cards';

import { ProjectBoard } from './ProjectBoard';

const findMatchProject = (projects, projectName) => {
  const decodedProjectName = projectName.replace(/_/g, ' ');

  const matchProject = projects.find(project => project.Name.toLowerCase() === decodedProjectName);
  return matchProject;
};

export default ({ projects, onGetProjects, onSetCurrentProject, projectOnBoard, onGetProjectDetail, projectName }) => {
  if (!projects) {
    onGetProjects();
    return <TabLoader />;
  }

  if (projectName) {
    const matchProject = findMatchProject(projects, projectName);
    if (!matchProject) return <Redirect to="/404" />;
    if (!projectOnBoard) {
      onGetProjectDetail(matchProject._id);
      return <TabLoader />;
    }
    return (
      <div className="fit-container" id="tabProjects">
        <div className="container-fluid">
          <ProjectBoard />
        </div>
      </div>
    );
  }

  return (
    <div className="fit-container" id="tabProjects">
      <div className="container-fluid">
        <div className="row projects-container">
          {projects.map(project => (
            <ProgressBadgesCard
              key={project._id}
              col={3}
              color={project.Color}
              label={project.Name}
              progress={project.Progress}
              badges={project.Technologies}
              route={`/home/projects/${project.Name.toLowerCase().replace(/ /g, '_')}`}
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
      </div>
    </div>
  );
};
