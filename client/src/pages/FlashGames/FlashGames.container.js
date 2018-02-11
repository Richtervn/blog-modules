import FlashGames from './FlashGames.component';
import { connect } from 'react-redux';

import { getGame } from './FlashGames.module';

const mapStateToProps = ({ flashGames }) => ({
  currentGame: flashGames.currentGame
});

const mapDispatchToProps = dispatch => ({
  onGetGame(name) {
    dispatch(getGame(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashGames);
