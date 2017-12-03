import { mangasReading } from 'services';
import actionCreator from 'factories/actionCreator';
import { toast } from 'react-toastify';

const CHANGE_CHANNEL = 'mangasReading/CHANGE_CHANNEL';
const CHANGE_ACTIVE_TOOL = 'mangasReading/CHANGE_ACTIVE_TOOL';

const SUBMIT_ADD_MANGA_START = 'mangasReading/SUBMIT_ADD_MANGA_START';
const SUBMIT_ADD_MANGA_SUCCESS = 'mangasReading/SUBMIT_ADD_MANGA_SUCCESS';
const SUBMIT_ADD_MANGA_FAIL = 'mangasReading/SUBMIT_ADD_MANGA_FAIL';

const GET_ALL_MANGA_START = 'mangasReading/GET_ALL_MANGA_START';
const GET_ALL_MANGA_SUCCESS = 'mangasReading/GET_ALL_MANGA_SUCCESS';
const GET_ALL_MANGA_FAIL = 'mangasReading/GET_ALL_MANGA_FAIL';

const SET_FOCUS_MANGA = 'mangasReading/SET_FOCUS_MANGA';

const QUICK_UPDATE_START = 'mangasReading/QUICK_UPDATE_START';
const QUICK_UPDATE_SUCCESS = 'mangasReading/QUICK_UPDATE_SUCCESS';
const QUICK_UPDATE_FAIL = 'mangasReading/QUICK_UPDATE_FAIL';

const UPDATE_MANGA_START = 'mangasReading/UPDATE_MANGA_START';
const UPDATE_MANGA_SUCCESS = 'mangasReading/UPDATE_MANGA_SUCCESS';
const UPDATE_MANGA_FAIL = 'mangasReading/UPDATE_MANGA_FAIL';

const DELETE_MANGA_START = 'mangasReading/DELETE_MANGA_START';
const DELETE_MANGA_SUCCESS = 'mangasReading/DELETE_MANGA_SUCCESS';
const DELETE_MANGA_FAIL = 'mangasReading/DELETE_MANGA_FAIL';

const SEARCH_MANGA_START = 'mangasReading/SEARCH_MANGA_START';
const SEARCH_MANGA_SUCCESS = 'mangasReading/SEARCH_MANGA_SUCCESS';
const SEARCH_MANGA_FAIL = 'mangasReading/SEARCH_MANGA_FAIL';

const SORT_MANGA_START = 'mangasReading/SORT_MANGA_START';
const SORT_MANGA_SUCCESS = 'mangasReading/SORT_MANGA_SUCCESS';
const SORT_MANGA_FAIL = 'mangasReading/SORT_MANGA_FAIL';

export const changeChannel = channel => ({ type: CHANGE_CHANNEL, channel });
export const changeActiveTool = tool => ({ type: CHANGE_ACTIVE_TOOL, tool });
export const setFocusManga = manga => ({ type: SET_FOCUS_MANGA, manga });

export const submitAddManga = form =>
  actionCreator(
    SUBMIT_ADD_MANGA_START,
    SUBMIT_ADD_MANGA_SUCCESS,
    SUBMIT_ADD_MANGA_FAIL,
    mangasReading.add,
    form
  )();

export const getAllMangas = actionCreator(
  GET_ALL_MANGA_START,
  GET_ALL_MANGA_SUCCESS,
  GET_ALL_MANGA_FAIL,
  mangasReading.getAll
);

export const quickUpdate = url =>
  actionCreator(
    QUICK_UPDATE_START,
    QUICK_UPDATE_SUCCESS,
    QUICK_UPDATE_FAIL,
    mangasReading.quickUpdate,
    url
  )();

export const submitEditManga = form =>
  actionCreator(
    UPDATE_MANGA_START,
    UPDATE_MANGA_SUCCESS,
    UPDATE_MANGA_FAIL,
    mangasReading.edit,
    form
  )();

export const submitDeleteManga = id =>
  actionCreator(
    DELETE_MANGA_START,
    DELETE_MANGA_SUCCESS,
    DELETE_MANGA_FAIL,
    mangasReading.delete,
    id
  )();

export const searchManga = query =>
  actionCreator(
    SEARCH_MANGA_START,
    SEARCH_MANGA_SUCCESS,
    SEARCH_MANGA_FAIL,
    mangasReading.search,
    query
  )();

export const sortManga = query =>
  actionCreator(SORT_MANGA_START, SORT_MANGA_SUCCESS, SORT_MANGA_FAIL, mangasReading.sort, query)();

export default (
  state = {
    mangas: null,
    focusManga: null,
    viewControl: {
      viewChannel: 'Add',
      activeTool: 'QuickUpdate'
    }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_CHANNEL:
      return {
        ...state,
        viewControl: { ...state.viewControl, viewChannel: action.channel }
      };
    case SUBMIT_ADD_MANGA_FAIL:
      return { ...state, error: action.error };
    case GET_ALL_MANGA_SUCCESS:
      return { ...state, mangas: action.data.slice(0), focusManga: action.data[0] || {} };
    case GET_ALL_MANGA_FAIL:
      return { ...state, error: action.error };
    case CHANGE_ACTIVE_TOOL:
      return {
        ...state,
        viewControl: { ...state.viewControl, activeTool: action.tool }
      };
    case SUBMIT_ADD_MANGA_SUCCESS:
      state.mangas.push(action.data);
      return {
        ...state,
        mangas: state.mangas.slice(0),
        focusManga: action.data,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' }
      };
    case SET_FOCUS_MANGA:
      return {
        ...state,
        focusManga: action.manga,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' }
      };
    case QUICK_UPDATE_SUCCESS:
      toast.success(`Update ${action.data.Name} to chapter ${action.data.Chapter}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      return {
        ...state,
        focusManga: action.data,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' },
        mangas: state.mangas
          .map(manga => {
            if (manga._id == action.data._id) {
              return action.data;
            }
            return manga;
          })
          .slice(0)
      };
    case UPDATE_MANGA_SUCCESS:
      return {
        ...state,
        focusManga: action.data,
        viewControl: { ...state.viewControl, viewChannel: 'Detail' },
        mangas: state.mangas
          .map(manga => {
            if (manga._id == action.data._id) {
              return action.data;
            }
            return manga;
          })
          .slice(0)
      };
    case DELETE_MANGA_SUCCESS:
      const mangaList = state.mangas.filter(manga => manga._id != action.data._id);
      return {
        ...state,
        focusManga: mangaList[0],
        viewControl: { ...state.viewControl, viewChannel: 'Detail' },
        mangas: mangaList.slice(0)
      };
    case SEARCH_MANGA_SUCCESS:
      return {
        ...state,
        mangas: action.data.slice(0),
        viewControl: { ...state.viewControl, viewChannel: 'Detail' }
      };
    case SORT_MANGA_SUCCESS:
      return {
        ...state,
        mangas: action.data.slice(0)
      };
    default:
      return state;
  }
};
