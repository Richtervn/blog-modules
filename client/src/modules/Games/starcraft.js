import { starcraft } from 'services';
import actionCreator from 'factories/actionCreator';

const CHANGE_SIDE_LIST_VIEW = 'starcraft/CHANGE_SIDE_LIST_VIEW';
export const SET_MAP_FOCUS = 'starcraft/SET_MAP_FOCUS';

const GET_MAP_LIST_START = 'starcraft/GET_MAP_LIST_START';
export const GET_MAP_LIST_SUCCESS = 'starcraft/GET_MAP_LIST_SUCCESS';
const GET_MAP_LIST_FAIL = 'starcraft/GET_MAP_LIST_FAIL';

const SUBMIT_ADD_STARCRAFT_MAP_START = 'starcraft/SUBMIT_ADD_STARCRAFT_MAP_START';
export const SUBMIT_ADD_STARCRAFT_MAP_SUCCESS = 'starcraft/SUBMIT_ADD_STARCRAFT_MAP_SUCCESS';
const SUBMIT_ADD_STARCRAFT_MAP_FAIL = 'starcraft/SUBMIT_ADD_STARCRAFT_MAP_FAIL';

const SUBMIT_EDIT_STARCRAFT_MAP_START = 'starcraft/SUBMIT_EDIT_STARCRAFT_MAP_START';
export const SUBMIT_EDIT_STARCRAFT_MAP_SUCCESS = 'starcraft/SUBMIT_EDIT_STARCRAFT_MAP_SUCCESS';
const SUBMIT_EDIT_STARCRAFT_MAP_FAIL = 'starcraft/SUBMIT_EDIT_STARCRAFT_MAP_FAIL';

const DELETE_MAP_START = 'starcraft/DELETE_MAP_START';
const DELETE_MAP_SUCCESS = 'starcraft/DELETE_MAP_START_SUCCESS';
const DELETE_MAP_FAIL = 'starcraft/DELETE_MAP_FAIL';

export const changeSideListView = header => ({ type: CHANGE_SIDE_LIST_VIEW, header });
export const getMapList = actionCreator(
  GET_MAP_LIST_START,
  GET_MAP_LIST_SUCCESS,
  GET_MAP_LIST_FAIL,
  starcraft.getMapList
);
export const setMapFocus = map => ({ type: SET_MAP_FOCUS, map });
export const submitAddStarcraftMapForm = formBody =>
  actionCreator(
    SUBMIT_ADD_STARCRAFT_MAP_START,
    SUBMIT_ADD_STARCRAFT_MAP_SUCCESS,
    SUBMIT_ADD_STARCRAFT_MAP_FAIL,
    starcraft.addMap,
    formBody
  )();

export const submitEditStarcraftMapForm = formBody =>
  actionCreator(
    SUBMIT_EDIT_STARCRAFT_MAP_START,
    SUBMIT_EDIT_STARCRAFT_MAP_SUCCESS,
    SUBMIT_ADD_STARCRAFT_MAP_FAIL,
    starcraft.editMap,
    formBody
  )();

export const deleteMap = id =>
  actionCreator(DELETE_MAP_START, DELETE_MAP_SUCCESS, DELETE_MAP_FAIL, starcraft.deleteMap, id)();

export default (
  state = {
    maps: null,
    mapFocus: {},
    viewControl: {
      SideList: 'Campaigns'
    }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_SIDE_LIST_VIEW:
      return { ...state, viewControl: { ...state.viewControl, SideList: action.header } };
    case GET_MAP_LIST_SUCCESS:
      return { ...state, maps: action.data, mapFocus: action.data[0] };
    case SUBMIT_ADD_STARCRAFT_MAP_SUCCESS:
      state.maps.push(action.data);
      return { ...state, maps: state.maps.slice(0), mapFocus: action.data };
    case SET_MAP_FOCUS:
      return { ...state, mapFocus: action.map };
    case DELETE_MAP_SUCCESS:
      const maps = state.maps.filter(map => map._id != action.data._id);
      return { ...state, maps: maps.slice(0), mapFocus: maps[0] };
    default:
      return state;
  }
};
