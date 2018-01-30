import { connect } from 'react-redux';
import ProjectItemDetail from './ProjectItemDetail.component';

const mapStateToProps = ({ projects }) => ({
  item: projects.itemOnDetail.item,
  column: projects.itemOnDetail.column,
  tagColors: projects.projectOnBoard.TagColor
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemDetail);
