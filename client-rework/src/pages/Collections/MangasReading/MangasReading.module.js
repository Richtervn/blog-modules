import React from 'react';
import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './MangasReading.services';

const ADD_MANGA = 'mangasReading/ADD_MANGA';
const GET_MANGAS = 'mangasReading/GET_MANGAS';
const QUICK_UPDATE = 'mangasReading/QUICK_UPDATE';
const UPDATE_MANGA = 'mangasReading/UPDATE_MANGA';
const DELETE_MANGA = 'mangasReading/DELETE_MANGA';
const SEARCH_MANGA = 'mangasReading/SEARCH_MANGA';
const SORT_MANGA = 'mangasReading/SORT_MANGA';

const SET_FOCUS_MANGA = 'mangasReading/SET_FOCUS_MANGA';
const SET_ACTIVE_VIEW = 'mangasReading/SET_ACTIVE_VIEW';

export const setFocusManga = id => ({ type: SET_FOCUS_MANGA, id });
export const setActiveView = name => ({ type: SET_ACTIVE_VIEW, name });

export const addManga = form => actionCreator(ADD_MANGA, services.add, form)();
export const editManga = form => actionCreator(UPDATE_MANGA, services.edit, form)();
export const deleteManga = id => actionCreator(DELETE_MANGA, services.delete, id)();
export const quickUpdate = url => actionCreator(QUICK_UPDATE, services.quickUpdate, url)();
export const searchManga = query => actionCreator(SEARCH_MANGA, services.search, query)();
export const sortManga = query => actionCreator(SORT_MANGA, services.sort, query)();
export const getMangas = actionCreator(GET_MANGAS, services.getMangas);

const initialState = {
  mangas: null,
  focusManga: null,
  activeView: 'Add'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MANGAS}_SUCCESS`:
      return { ...state, mangas: action.data, focusManga: action.data[0] ? action.data[0]._id : null };
    case SET_FOCUS_MANGA:
      return { ...state, focusManga: action.id, activeView: 'Detail' };
    case SET_ACTIVE_VIEW:
      return { ...state, activeView: action.name };
    case `${ADD_MANGA}_SUCCESS`:
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
    case `${QUICK_UPDATE}_SUCCESS`:
      toastSuccess(() => (
        <p>
          Updated<strong>{` ${action.data.Name} `}</strong>to chapter {action.data.Chapter}
        </p>
      ));
      return {
        ...state,
        activeView: 'Detail',
        focusManga: state.focusManga ? action.data._id : null,
        mangas: state.mangas
          ? state.mangas
              .map(manga => {
                if (parseInt(manga._id, 10) === parseInt(action.data._id, 10)) {
                  return action.data;
                }
                return manga;
              })
              .slice(0)
          : null
      };
    case `${UPDATE_MANGA}_SUCCESS`:
      toastSuccess(() => (
        <p>
          Updated <strong>{action.data.Name}</strong>
        </p>
      ));
      return {
        ...state,
        activeView: 'Detail',
        focusManga: state.focusManga ? action.data._id : null,
        mangas: state.mangas
          ? state.mangas
              .map(manga => {
                if (parseInt(manga._id, 10) === parseInt(action.data._id, 10)) {
                  return action.data;
                }
                return manga;
              })
              .slice(0)
          : null
      };
    case `${DELETE_MANGA}_SUCCESS`:
      const mangaList = state.mangas.filter(manga => manga._id !== action.data._id);
      toastSuccess('You will never remember about that one');
      return {
        ...state,
        activeView: 'Detail',
        focusManga: mangaList[0]._id,
        mangas: mangaList.slice(0)
      };
    case `${SEARCH_MANGA}_SUCCESS`:
      return {
        ...state,
        mangas: action.data.slice(0)
      };
    case `${SORT_MANGA}_SUCCESS`:
      return {
        ...state,
        mangas: action.data.slice(0)
      };

    case `${ADD_MANGA}_FAIL`:
    case `${QUICK_UPDATE}_FAIL`:
    case `${UPDATE_MANGA}_FAIL`:
    case `${GET_MANGAS}_FAIL`:
    case `${DELETE_MANGA}_FAIL`:
    case `${SEARCH_MANGA}_FAIL`:
    case `${SORT_MANGA}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
