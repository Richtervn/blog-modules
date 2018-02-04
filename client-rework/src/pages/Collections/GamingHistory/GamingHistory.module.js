import React from 'react';
import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './GamingHistory.services';

const GET_LIST = 'gamingHistory/GET_LIST';
const ADD_GAME = 'gamingHistory/ADD_GAME';
const EDIT_GAME = 'gamingHistory/EDIT_GAME';
const DELETE_GAME = 'gamingHistory/DELETE_GAME';
const GET_ABOUT = 'gamingHistory/GET_ABOUT';
const EDIT_ABOUT = 'gamingHistory/EDIT_ABOUT';

const SET_FOCUS_GAME = 'gamingHistory/SET_FOCUS_GAME';
const SET_ACTIVE_TAB = 'gamingHistory/SET_ACTIVE_TAB';

export const getList = actionCreator(GET_LIST, services.getList);
export const addGame = formBody => actionCreator(ADD_GAME, services.addGame, formBody)();
export const editGame = formBody => actionCreator(EDIT_GAME, services.editGame, formBody)();
export const deleteGame = id => actionCreator(DELETE_GAME, services.deleteGame, id)();
export const getAboutContent = gameId => actionCreator(GET_ABOUT, services.getAbout, gameId)();
export const editAboutContent = formBody => actionCreator(EDIT_ABOUT, services.editAbout, formBody)();

export const setFocusGame = game => ({ type: SET_FOCUS_GAME, game });
export const setActiveTab = tabName => ({ type: SET_ACTIVE_TAB, tabName });

const initialState = {
  list: null,
  focusGame: { Genres: [''], Publishers: [''], Periods: [''] },
  activeTab: 'About',
  aboutContent: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_LIST}_SUCCESS`:
      return { ...state, list: action.data };
    case `${ADD_GAME}_SUCCESS`:
      state.list.push(action.data);
      toastSuccess(() => (
        <p>
          Added <strong>{action.data.Name}</strong>
        </p>
      ));
      return { ...state, list: state.list.slice(0) };
    case `${EDIT_GAME}_SUCCESS`:
      state.list = state.list.map(game => {
        if (game._id === action.data._id) {
          return action.data;
        }
        return game;
      });
      toastSuccess(() => (
        <p>
          Removed <strong>{action.data.Name}</strong>
        </p>
      ));
      return { ...state, list: state.list.slice(0), focusGame: { ...action.data } };
    case `${GET_ABOUT}_SUCCESS`:
      return { ...state, aboutContent: action.data };
    case `${DELETE_GAME}_SUCCESS`:
      state.list = state.list.filter(game => game._id !== action.data._id);
      return { ...state, list: state.list.slice(0) };
    case `${EDIT_ABOUT}_SUCCESS`:
      toastSuccess('Edited page content');
      return { ...state, aboutContent: { ...state.aboutContent, ...action.data } };

    case SET_FOCUS_GAME:
      return { ...state, focusGame: action.game };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tabName };

    case `${GET_LIST}_FAIL`:
    case `${ADD_GAME}_FAIL`:
    case `${EDIT_GAME}_FAIL`:
    case `${DELETE_GAME}_FAIL`:
    case `${GET_ABOUT}_FAIL`:
    case `${EDIT_ABOUT}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
