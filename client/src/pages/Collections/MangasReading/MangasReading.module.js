import React from 'react';
import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './MangasReading.services';

const ADD_MANGA = 'mangasReading/ADD_MANGA';
export const GET_MANGAS = 'mangasReading/GET_MANGAS';
const QUICK_UPDATE = 'mangasReading/QUICK_UPDATE';
const UPDATE_MANGA = 'mangasReading/UPDATE_MANGA';
const DELETE_MANGA = 'mangasReading/DELETE_MANGA';
const SEARCH_MANGA = 'mangasReading/SEARCH_MANGA';
const SORT_MANGA = 'mangasReading/SORT_MANGA';

const SET_FOCUS_MANGA = 'mangasReading/SET_FOCUS_MANGA';
const SET_ACTIVE_VIEW = 'mangasReading/SET_ACTIVE_VIEW';
const CHANGE_ACTIVE_TOOL = 'mangasReading/CHANGE_ACTIVE_TOOL';
const CHANGE_SEARCH_OPTION = 'mangasReading/CHANGE_SEARCH_OPTION';
const CHANGE_SEARCH_VALUE = 'mangasReading/CHANGE_SEARCH_VALUE';

export const setFocusManga = id => ({ type: SET_FOCUS_MANGA, id });
export const setActiveView = name => ({ type: SET_ACTIVE_VIEW, name });
export const changeActiveTool = tool => ({ type: CHANGE_ACTIVE_TOOL, tool });
export const changeSearchOption = option => ({
  type: CHANGE_SEARCH_OPTION,
  option
});
export const changeSearchValue = value => ({
  type: CHANGE_SEARCH_VALUE,
  value
});

export const addManga = formBody => actionCreator(ADD_MANGA, services.add, { payload: { formBody } })();
export const editManga = formBody => actionCreator(UPDATE_MANGA, services.edit, { payload: { formBody } })();
export const deleteManga = id => actionCreator(DELETE_MANGA, services.delete, { payload: { id } })();
export const quickUpdate = url => actionCreator(QUICK_UPDATE, services.quickUpdate, { payload: { url } })();
export const searchManga = query =>
  actionCreator(SEARCH_MANGA, services.search, { payload: { query }, toast: false })();
export const sortManga = query => actionCreator(SORT_MANGA, services.sort, { payload: { query } })();
export const getMangas = () => actionCreator(GET_MANGAS, services.getMangas)();

const initialState = {
  mangas: null,
  focusManga: null,
  activeView: 'Add',
  activeTool: 'QuickUpdate',
  search: {
    option: 'Name',
    value: ''
  },
  noSearchResult: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MANGAS}_SUCCESS`: {
      const readingMangas = action.payload.filter(manga => manga.Chapter.indexOf(' - END') === -1);
      return {
        ...state,
        mangas: readingMangas,
        focusManga: readingMangas[0] ? readingMangas[0]._id : null
      };
    }
    case SET_FOCUS_MANGA:
      return { ...state, focusManga: action.id, activeView: 'Detail' };
    case SET_ACTIVE_VIEW:
      return { ...state, activeView: action.name };
    case `${ADD_MANGA}_SUCCESS`:
      state.mangas.push(action.payload);
      toastSuccess(() => (
        <p>
          <strong>{`${action.payload.Name} `}</strong>has been added to your list!
        </p>
      ));
      return {
        ...state,
        mangas: state.mangas.slice(0),
        focusManga: action.payload._id,
        activeView: 'Detail'
      };
    case `${QUICK_UPDATE}_SUCCESS`:
      toastSuccess(() => (
        <p>
          Updated<strong>{` ${action.payload.Name} `}</strong>to chapter {action.payload.Chapter}
        </p>
      ));
      return {
        ...state,
        activeView: 'Detail',
        focusManga: state.focusManga ? action.payload._id : null,
        mangas: state.mangas
          ? state.mangas
              .map(manga => {
                if (parseInt(manga._id, 10) === parseInt(action.payload._id, 10)) {
                  return action.payload;
                }
                return manga;
              })
              .slice(0)
          : null
      };
    case `${UPDATE_MANGA}_SUCCESS`:
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Name}</strong>
        </p>
      ));
      return {
        ...state,
        activeView: 'Detail',
        focusManga: state.focusManga ? action.payload._id : null,
        mangas: state.mangas
          ? state.mangas
              .map(manga => {
                if (parseInt(manga._id, 10) === parseInt(action.payload._id, 10)) {
                  return action.payload;
                }
                return manga;
              })
              .slice(0)
          : null
      };
    case `${DELETE_MANGA}_SUCCESS`:
      const mangaList = state.mangas.filter(manga => manga._id !== action.payload._id);
      toastSuccess('You will never remember about that one');
      return {
        ...state,
        activeView: 'Detail',
        focusManga: mangaList[0]._id,
        mangas: mangaList.slice(0)
      };

    case `${SEARCH_MANGA}_SUCCESS`: {
      const nextState = { ...state, mangas: action.payload.filter(manga => manga.Chapter.indexOf(' - END') === -1) };
      if (action.payload.length < 1) {
        nextState.noSearchResult = true;
      } else {
        nextState.noSearchResult = false;
        nextState.focusManga = action.payload[0]._id;
      }
      return { ...nextState };
    }

    case `${SORT_MANGA}_SUCCESS`:
      return {
        ...state,
        mangas: action.payload.slice(0)
      };
    case CHANGE_ACTIVE_TOOL:
      return {
        ...state,
        activeTool: action.tool
      };
    case CHANGE_SEARCH_OPTION:
      return { ...state, search: { option: action.option, value: '' } };
    case CHANGE_SEARCH_VALUE:
      return { ...state, search: { ...state.search, value: action.value } };

    case `${SEARCH_MANGA}_FAIL`:
      toastError('No manga found');
      return state;

    default:
      return state;
  }
};
