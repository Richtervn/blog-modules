import React from 'react';
import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './MangasReading.services';

const ADD_MANGA_START = 'mangasReading/ADD_MANGA_START';
const ADD_MANGA_SUCCESS = 'mangasReading/ADD_MANGA_SUCCESS';
const ADD_MANGA_FAIL = 'mangasReading/ADD_MANGA_FAIL';

const GET_MANGAS_START = 'mangasReading/GET_ALL_MANGA_START';
const GET_MANGAS_SUCCESS = 'mangasReading/GET_ALL_MANGA_SUCCESS';
const GET_MANGAS_FAIL = 'mangasReading/GET_ALL_MANGA_FAIL';

const SET_FOCUS_MANGA = 'mangasReading/SET_FOCUS_MANGA';
const SET_ACTIVE_VIEW = 'mangasReading/SET_ACTIVE_VIEW';

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

export const setFocusManga = id => ({ type: SET_FOCUS_MANGA, id });
export const setActiveView = name => ({ type: SET_ACTIVE_VIEW, name });

export const addManga = form => actionCreator(ADD_MANGA_START, ADD_MANGA_SUCCESS, ADD_MANGA_FAIL, services.add, form)();

export const editManga = form =>
  actionCreator(UPDATE_MANGA_START, UPDATE_MANGA_SUCCESS, UPDATE_MANGA_FAIL, services.edit, form)();

export const deleteManga = id =>
  actionCreator(DELETE_MANGA_START, DELETE_MANGA_SUCCESS, DELETE_MANGA_FAIL, services.delete, id)();

export const quickUpdate = url =>
  actionCreator(QUICK_UPDATE_START, QUICK_UPDATE_SUCCESS, QUICK_UPDATE_FAIL, services.quickUpdate, url)();

export const searchManga = query =>
  actionCreator(SEARCH_MANGA_START, SEARCH_MANGA_SUCCESS, SEARCH_MANGA_FAIL, services.search, query)();

export const sortManga = query =>
  actionCreator(SORT_MANGA_START, SORT_MANGA_SUCCESS, SORT_MANGA_FAIL, services.sort, query)();

export const getMangas = actionCreator(GET_MANGAS_START, GET_MANGAS_SUCCESS, GET_MANGAS_FAIL, services.getMangas);

const initialState = {
  mangas: null,
  focusManga: null,
  activeView: 'Add'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MANGAS_SUCCESS:
      return { ...state, mangas: action.data, focusManga: action.data[0]._id };
    case SET_FOCUS_MANGA:
      return { ...state, focusManga: action.id, activeView: 'Detail' };
    case SET_ACTIVE_VIEW:
      return { ...state, activeView: action.name };
    case ADD_MANGA_SUCCESS:
      state.mangas.push(action.data);
      toastSuccess(() => (
        <p>
          <strong>{`${action.data.Name} `}</strong>has been added to your list!
        </p>
      ));
      return {
        ...state,
        mangas: state.mangas.slice(0),
        focusManga: action.data._id,
        activeView: 'Detail'
      };
    case QUICK_UPDATE_SUCCESS:
      toastSuccess(() => (
        <p>
          Updated<strong>{` ${action.data.Name} `}</strong>to chapter {action.data.Chapter}
        </p>
      ));
      return {
        ...state,
        activeView: 'Detail',
        focusManga: action.data._id,
        mangas: state.mangas
          .map(manga => {
            if (parseInt(manga._id, 10) === parseInt(action.data._id, 10)) {
              return action.data;
            }
            return manga;
          })
          .slice(0)
      };
    case UPDATE_MANGA_SUCCESS:
      toastSuccess(() => (
        <p>
          Updated <strong>{action.data.Name}</strong>
        </p>
      ));
      return {
        ...state,
        activeView: 'Detail',
        focusManga: action.data._id,
        mangas: state.mangas
          .map(manga => {
            if (parseInt(manga._id, 10) === parseInt(action.data._id, 10)) {
              return action.data;
            }
            return manga;
          })
          .slice(0)
      };
    case DELETE_MANGA_SUCCESS:
      const mangaList = state.mangas.filter(manga => manga._id !== action.data._id);
      toastSuccess('You will never remember about that one');
      return {
        ...state,
        activeView: 'Detail',
        focusManga: mangaList[0]._id,
        mangas: mangaList.slice(0)
      };
    case SEARCH_MANGA_SUCCESS:
      return {
        ...state,
        mangas: action.data.slice(0)
      };
    case SORT_MANGA_SUCCESS:
      return {
        ...state,
        mangas: action.data.slice(0)
      };

    case ADD_MANGA_FAIL:
    case QUICK_UPDATE_FAIL:
    case UPDATE_MANGA_FAIL:
    case GET_MANGAS_FAIL:
    case DELETE_MANGA_FAIL:
    case SEARCH_MANGA_FAIL:
    case SORT_MANGA_FAIL:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
