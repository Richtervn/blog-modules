import { connect } from 'react-redux';
import ProjectItemDetail from './ProjectItemDetail.component';

import { editItem } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({
  projectId: projects.projectOnBoard._id,
  item: projects.itemOnDetail.item,
  column: projects.itemOnDetail.column,
  tagColors: projects.projectOnBoard.TagColor
});

const mapDispatchToProps = dispatch => ({
  onEditItem(formBody) {
    dispatch(editItem(formBody));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemDetail);
