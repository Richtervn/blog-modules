import { connect } from 'react-redux';
import ProjectItemForm from './ProjectItemForm.component';

import { addProjectItem } from '../../Projects.module';

const mapStateToProps = ({ projects }) => ({
  project: projects.projectOnBoard,
  column: projects.columnOnAdd
});

const mapDispatchToProps = dispatch => ({
  onAddItem(formBody) {
    dispatch(addProjectItem(formBody));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemForm);
