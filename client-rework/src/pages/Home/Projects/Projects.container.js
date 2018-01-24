import { connect } from 'react-redux';
import Projects from './Projects.component';

import { getProjects } from './Projects.module';

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects
});

const mapDispatchToProps = dispatch => ({
  onGetProjects() {
    dispatch(getProjects());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
