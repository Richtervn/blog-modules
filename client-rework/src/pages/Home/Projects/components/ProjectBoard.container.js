import { connect } from 'react-redux';
import ProjectBoard from './ProjectBoard.component';

const mapStateToProps = ({ projects }) => ({
  project: projects.projectOnBoard
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);
