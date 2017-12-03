import _ from 'underscore';
import { gamingHistory } from 'services';
import actionCreator from 'factories/actionCreator';
import { toast } from 'react-toastify';

const GET_ALL_GAME_START = 'gamingHistory/GET_ALL_GAME_START';
const GET_ALL_GAME_SUCCESS = 'gamingHistory/GET_ALL_GAME_SUCCESS';
const GET_ALL_GAME_FAIL = 'gamingHistory/GET_ALL_GAME_FAIL';
const SUBMIT_ADD_GAME_START = 'gamingHistory/SUBMIT_ADD_GAME_START';
const SUBMIT_ADD_GAME_SUCCESS = 'gamingHistory/SUBMIT_ADD_GAME_SUCCESS';
const SUBMIT_ADD_GAME_FAIL = 'gamingHistory/SUBMIT_ADD_GAME_FAIL';
const UPDATE_GAME_START = 'gamingHistory/UPDATE_GAME_START';
const UPDATE_GAME_SUCCESS = 'gamingHistory/UPDATE_GAME_SUCCESS';
const UPDATE_GAME_FAIL = 'gamingHistory/UPDATE_GAME_FAIL';
const DELETE_GAME_START = 'gamingHistory/DELETE_GAME_START';
const DELETE_GAME_SUCCESS = 'gamingHistory/DELETE_GAME_SUCCESS';
const DELETE_GAME_FAIL = 'gamingHistory/DELETE_GAME_FAIL';

const SET_FOCUS_GAME = 'gamingHistory/SET_FOCUS_GAME';
const CHANGE_CHANNEL = 'gamingHistory/CHANGE_CHANNEL';
const CHANGE_ACTIVE_TOOL = 'gamingHistory/CHANGE_ACTIVE_TOOL';
const SORT_GAME = 'gamingHistory/SORT_GAME';

const SEARCH_GAME_START = 'gamingHistory/SEARCH_GAME_START';
const SEARCH_GAME_SUCCESS = 'gamingHistory/SEARCH_GAME_SUCCESS';
const SEARCH_GAME_FAIL = 'gamingHistory/SEARCH_GAME_FAIL';

export const changeChannel = channel => ({ type: CHANGE_CHANNEL, channel });
export const changeActiveTool = tool => ({ type: CHANGE_ACTIVE_TOOL, tool });
export const setFocusGame = game => ({ type: SET_FOCUS_GAME, game });

export const submitAddGame = form =>
  actionCreator(
    SUBMIT_ADD_GAME_START,
    SUBMIT_ADD_GAME_SUCCESS,
    SUBMIT_ADD_GAME_FAIL,
    gamingHistory.add,
    form
  )();

export const getAllGames = actionCreator(
  GET_ALL_GAME_START,
  GET_ALL_GAME_SUCCESS,
  GET_ALL_GAME_FAIL,
  gamingHistory.getAll
);

export const submitEditGame = form =>
  actionCreator(
    UPDATE_GAME_START,
    UPDATE_GAME_SUCCESS,
    UPDATE_GAME_FAIL,
    gamingHistory.edit,
    form
  )();

export const submitDeleteGame = id =>
  actionCreator(
    DELETE_GAME_START,
    DELETE_GAME_SUCCESS,
    DELETE_GAME_FAIL,
    gamingHistory.delete,
    id
  )();

export const searchGame = query =>
  actionCreator(
    SEARCH_GAME_START,
    SEARCH_GAME_SUCCESS,
    SEARCH_GAME_FAIL,
    gamingHistory.search,
    query
  )();

export const sortGame = query => ({ type: SORT_GAME, query });

export default (
  state = {
    games: null,
    focusGame: null,
    viewControl: {
      viewChannel: 'Add',
      activeTool: 'Search'
    }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_ACTIVE_TOOL:
      return { ...state, viewControl: { ...state.viewControl, activeTool: action.tool } };
    case GET_ALL_GAME_SUCCESS:
      return { ...state, games: action.data.slice(0), focusGame: action.data[0] || {} };
    case CHANGE_CHANNEL:
      return {
        ...state,
        viewControl: { ...state.viewControl, viewChannel: action.channel }
      };
    case SUBMIT_ADD_GAME_SUCCESS:
      state.games.push(action.data);
      toast.success(`Added ${action.Name}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      return {
        ...state,
        games: state.games.slice(0),
        focusGame: action.data,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' }
      };
    case SET_FOCUS_GAME:
      return {
        ...state,
        focusGame: action.game,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' }
      };
    case UPDATE_GAME_SUCCESS:
      return {
        ...state,
        focusGame: action.data,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' },
        games: state.games
          .map(game => {
            if (game._id == action.data._id) {
              return action.data;
            }
            return game;
          })
          .slice(0)
      };
    case DELETE_GAME_SUCCESS:
      const gameList = state.games.filter(game => game._id != action.data._id);
      return {
        ...state,
        focusGame: gameList[0],
        viewControl: { ...state.viewControl, viewChannel: 'Detail' },
        games: gameList.slice(0)
      };
    case SEARCH_GAME_SUCCESS:
      return {
        ...state,
        games: action.data.slice(0),
        viewControl: { ...state.viewControl, viewChannel: 'Detail' }
      };
    case SORT_GAME: {
      let key = Object.keys(action.query)[0];
      return {
        ...state,
        games:
          action.query[key] == 'ASC'
            ? _.sortBy(state.games, key).slice(0)
            : _.sortBy(state.games, key)
                .reverse()
                .slice(0)
      };
    }

    case SEARCH_GAME_FAIL:
    case DELETE_GAME_FAIL:
    case UPDATE_GAME_FAIL:
    case SUBMIT_ADD_GAME_FAIL:
    case GET_ALL_GAME_FAIL:
      toast.error(`${action.error}`, {
        position: toast.POSITION.TOP_LEFT,
        className: 'toast-error'
      });
      return state;

    default:
      return state;
  }
};
