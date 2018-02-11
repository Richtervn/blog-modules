import { connect } from 'react-redux';
import FlashGamesGuide from './FlashGamesGuide.component.js';

const mapStateToProps = ({ flashGames }) => ({
  game: flashGames.currentGame
});

export default connect(mapStateToProps)(FlashGamesGuide);
