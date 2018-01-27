import { connect } from 'react-redux';
import ProjectBoard from './ProjectBoard.component';

import { unsetProjectOnBoard } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({
  project: projects.projectOnBoard
});

const mapDispatchToProps = dispatch => ({
  onBack() {
    dispatch(unsetProjectOnBoard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);
