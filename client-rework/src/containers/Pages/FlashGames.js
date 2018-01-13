import FlashGames from 'components/Pages/FlashGames';
import { connect } from 'react-redux';

import { getGame } from 'modules/flashGames';

const mapStateToProps = ({ flashGames }) => ({
  uri: flashGames.uri
});

const mapDispatchToProps = dispatch => ({
  onGetGame(name) {
    dispatch(getGame(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashGames);
