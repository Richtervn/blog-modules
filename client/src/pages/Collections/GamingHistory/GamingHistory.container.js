import { connect } from 'react-redux';
import GamingHistory from './GamingHistory.component';

import { getList, setFocusGame } from './GamingHistory.module';

const mapStateToProps = ({ gamingHistory }) => ({
  list: gamingHistory.list
});

const mapDispatchToProps = dispatch => ({
  onGetList() {
    dispatch(getList());
  },
  onSetFocusGame(game) {
    dispatch(setFocusGame(game));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GamingHistory);
