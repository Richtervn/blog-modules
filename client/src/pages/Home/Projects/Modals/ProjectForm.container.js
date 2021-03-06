import { connect } from 'react-redux';
import ProjectForm from './ProjectForm.component';

import { addProject, editProject } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({ project: projects.currentProject });

const mapDispatchToProps = dispatch => ({
  onAddProject(formBody, callback) {
    dispatch(addProject(formBody, callback));
  },
  onEditProject(formBody) {
    dispatch(editProject(formBody));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
