import GamingHistory from 'components/Collections/GamingHistory';
import { connect } from 'react-redux';

import {
  changeChannel,
  changeActiveTool,
  setFocusGame,
  submitAddGame,
  getAllGames,
  submitEditGame,
  submitDeleteGame,
  searchGame,
  sortGame
} from 'modules/Collections/gamingHistory';

export default connect(
  ({ gamingHistory, forms }) => ({
    games: gamingHistory.games,
    focusGame: gamingHistory.focusGame,
    activeTool: gamingHistory.activeTool,
    viewChannel: gamingHistory.viewChannel
  }),
  dispatch => ({
    onChangeChannel(channel) {
      dispatch(changeChannel(channel));
    },
    onChangeActiveTool(tool) {
      dispatch(changeActiveTool(tool));
    },
    onAddSubmit(form) {
      dispatch(submitAddGame(form));
    },
    onEditSubmit(form) {
      dispatch(submitEditGame(form));
    },
    onDeleteSubmit(id) {
      dispatch(submitDeleteGame(id));
    },
    onSortSelect(query) {
      dispatch(sortGame(query));
    },
    onSearchInput(query) {
      dispatch(searchGame(query));
    },
    onGetAllGames() {
      dispatch(getAllGames());
    },
    onSelectGame(game) {
      dispatch(setFocusGame(game));
    }
  })
)(GamingHistory);
