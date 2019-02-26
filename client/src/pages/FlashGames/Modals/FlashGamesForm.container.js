import { connect } from 'react-redux';
import FlashGamesForm from './FlashGamesForm.component';
import { addGame, editGame } from '../FlashGames.module';

const mapStateToProps = ({ flashGames }) => ({
  game: flashGames.currentGame
});

const mapDispatchToProps = dispatch => ({
  onAddGame(formBody) {
    dispatch(addGame(formBody));
  },
  onEditGame(formBody, callback) {
    dispatch(editGame(formBody, callback));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashGamesForm);
