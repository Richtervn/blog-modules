import { connect } from 'react-redux';
import GameGuideForm from './GameGuideForm.component';

export default connect(({ gamingHistory }) => ({
  gameInfo: gameHistory.gameInfo
}))(GameGuideForm);
