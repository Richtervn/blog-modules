import { connect } from 'react-redux';
import ProjectDeleteConfirm from './ProjectDeleteConfirm.component';

import { deleteProject } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({ project: projects.currentProject });

const mapDispatchToProps = dispatch => ({
  onDeleteProject(id) {
    dispatch(deleteProject(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDeleteConfirm);
