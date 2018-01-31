import { connect } from 'react-redux';
import BoardCard from './BoardCard.component';

import { moveCardToList, setItemOnDetail } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({
  ProjectId: projects.projectOnBoard._id,
  TagColor: projects.projectOnBoard.TagColor
});

const mapDispatchToProps = dispatch => ({
  onMoveCardToList(item, column, oldColumn, projectId) {
    dispatch(moveCardToList(item, column, oldColumn, projectId));
  },
  onSetItemOnDetail(item, column) {
    dispatch(setItemOnDetail(item, column));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardCard);
