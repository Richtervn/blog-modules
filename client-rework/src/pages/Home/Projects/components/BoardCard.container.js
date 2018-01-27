import { connect } from 'react-redux';
import BoardCard from './BoardCard.component';

import { moveCardToList } from '../Projects.module';

const mapStateToProps = ({ projects }) => ({
  TagColor: projects.projectOnBoard.TagColor
});

const mapDispatchToProps = dispatch => ({
  onMoveCardToList(item, column, oldColumn) {
    dispatch(moveCardToList(item, column, oldColumn));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardCard);
