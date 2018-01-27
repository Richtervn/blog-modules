import { connect } from 'react-redux';
import ProjectSetting from './ProjectSetting.component';

import { updateSetting } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({
  project: projects.projectOnBoard
});

const mapDispatchToProps = dispatch => ({
  onUpdateSetting(formBody) {
    dispatch(updateSetting(formBody));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSetting);
