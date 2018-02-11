import { connect } from 'react-redux';
import Projects from './Projects.component';

import { getProjects, deleteProject, setCurrentProject, getProjectDetail } from './Projects.module';

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
  projectOnBoard: projects.projectOnBoard
});

const mapDispatchToProps = dispatch => ({
  onGetProjects() {
    dispatch(getProjects());
  },
  onDeleteProject(id) {
    dispatch(deleteProject(id));
  },
  onSetCurrentProject(project) {
    dispatch(setCurrentProject(project));
  },
  onGetProjectDetail(id) {
    dispatch(getProjectDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
