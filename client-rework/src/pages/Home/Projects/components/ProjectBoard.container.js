import { connect } from 'react-redux';
import ProjectBoard from './ProjectBoard.component';

const mapStateToProps = ({ projects }) => ({
  project: projects.projectOnBoard
});

export default connect(mapStateToProps)(ProjectBoard);
