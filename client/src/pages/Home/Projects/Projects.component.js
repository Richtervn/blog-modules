import './Projects.css';
import React, { useEffect } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { AddCardButton } from 'components/Buttons';
import { ProgressBadgesCard } from 'components/Cards';

import { ProjectBoard } from './ProjectBoard';

const findMatchProject = (projects, projectName) => {
  const decodedProjectName = projectName.replace(/_/g, ' ');

  const matchProject = projects.find(project => project.Name.toLowerCase() === decodedProjectName);
  return matchProject;
};

const Projects = ({
  projects,
  onGetProjects,
  onSetCurrentProject,
  projectOnBoard,
  onGetProjectDetail,
  projectName,
  history
}) => {
  useEffect(() => {
    onGetProjects();
  }, []);

  useEffect(() => {
    if (!projects || !projectName) {
      return;
    }
    const matchProject = findMatchProject(projects, projectName);
    if (!matchProject) {
      history.push('/404');
      return;
    }
    if (!projectOnBoard || projectOnBoard._id !== matchProject._id) {
      onGetProjectDetail(matchProject._id);
    }
  }, [projects, projectName]);

  if (!projects) {
    return <TabLoader />;
  }

  if (projectName) {
    const matchProject = findMatchProject(projects, projectName);
    if (!projectOnBoard || projectOnBoard._id !== matchProject._id) {
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
          <AddCardButton
            col={3}
            minHeight="200px"
            customClass="home-add-project-card"
            onClick={() => openModal('AddProject')}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Projects);
