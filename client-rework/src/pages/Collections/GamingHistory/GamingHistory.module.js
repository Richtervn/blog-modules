import React from 'react';
import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './GamingHistory.services';

const ADD_GAME = 'gamingHistory/ADD_GAME';
const ADD_GUIDE = 'gamingHistory/ADD_GUIDE';
const ADD_OVERVIEW = 'gamingHistory/ADD_OVERVIEW';
const GET_ABOUT = 'gamingHistory/GET_ABOUT';
const GET_GUIDE = 'gamingHistory/GET_GUIDE';
const GET_GUIDES = 'gamingHistory/GET_GUIDES';
const GET_OVERVIEW = 'gamingHistory/GET_OVERVIEW';
const GET_OVERVIEWS = 'gamingHistory/GET_OVERVIEWS';
const GET_LIST = 'gamingHistory/GET_LIST';
const EDIT_ABOUT = 'gamingHistory/EDIT_ABOUT';
const EDIT_GAME = 'gamingHistory/EDIT_GAME';
const EDIT_GUIDE = 'gamingHistory/EDIT_GUIDE';
const EDIT_OVERVIEW = 'gamingHistory/EDIT_OVERVIEW';
const DELETE_GAME = 'gamingHistory/DELETE_GAME';
const DELETE_GUIDE = 'gamingHistory/DELETE_GUIDE';
const DELETE_OVERVIEW = 'gamingHistory/DELETE_OVERVIEW';

const SET_FOCUS_GAME = 'gamingHistory/SET_FOCUS_GAME';
const SET_ACTIVE_TAB = 'gamingHistory/SET_ACTIVE_TAB';
const SET_GAME_INFO = 'gamingHistory/SET_GAME_INFO';
const SET_FOCUS_GUIDE = 'gamingHistory/SET_FOCUS_GUIDE';

export const getList = actionCreator(GET_LIST, services.getList);
export const getGuides = actionCreator(GET_GUIDES, services.getGuides);
export const getOverviews = actionCreator(GET_OVERVIEWS, services.getOverviews);
export const getAboutContent = gameId => actionCreator(GET_ABOUT, services.getAbout, gameId)();
export const getGuide = id => actionCreator(GET_GUIDE, services.getGuide, id)();
export const getOverview = id => actionCreator(GET_OVERVIEW, services.getOverview, id)();
export const addGame = formBody => actionCreator(ADD_GAME, services.addGame, formBody)();
export const addGuide = formBody => actionCreator(ADD_GUIDE, services.addGuide, formBody)();
export const addOverview = formBody => actionCreator(ADD_OVERVIEW, services.addOverview, formBody)();
export const editGame = formBody => actionCreator(EDIT_GAME, services.editGame, formBody)();
export const editGuide = formBody => actionCreator(EDIT_GUIDE, services.editGuide, formBody)();
export const editOverview = formBody => actionCreator(EDIT_OVERVIEW, services.editOverview, formBody)();
export const deleteGame = id => actionCreator(DELETE_GAME, services.deleteGame, id)();
export const deleteGuide = id => actionCreator(DELETE_GUIDE, services.deleteGuide, id)();
export const deleteOverview = id => actionCreator(DELETE_OVERVIEW, services.deleteOverview, id)();
export const editAboutContent = formBody => actionCreator(EDIT_ABOUT, services.editAbout, formBody)();

export const setFocusGame = game => ({ type: SET_FOCUS_GAME, game });
export const setActiveTab = tabName => ({ type: SET_ACTIVE_TAB, tabName });
export const setGameInfo = game => ({ type: SET_GAME_INFO, game });
export const setFocusGuide = guide => ({ type: SET_FOCUS_GUIDE, guide });

const initialState = {
  list: null,
  focusGame: { Genres: [''], Publishers: [''], Periods: [''] },
  focusGuide: {},
  activeTab: 'About',
  aboutContent: null,
  guides: null,
  overviews: null,
  gameInfo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_LIST}_SUCCESS`:
      return { ...state, list: action.data };
    case `${GET_GUIDES}_SUCCESS`:
      return { ...state, guides: action.data };
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
    case `${ADD_GUIDE}_SUCCESS`:
      state.guides.push(action.data);
      toastSuccess(() => (
        <p>
          Added <strong>{action.data.Title}</strong>
        </p>
      ));
      return { ...state, guides: state.guides.slice(0) };
    case `${EDIT_GUIDE}_SUCCESS`:
      state.guides = state.guides.map(guide => {
        if (guide._id === action.data._id) {
          return action.data;
        }
        return guide;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.data.Title}</strong>
        </p>
      ));
      return { ...state, guides: state.guides.slice(0) };

    case SET_FOCUS_GAME:
      return { ...state, focusGame: action.game };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tabName };
    case SET_GAME_INFO:
      return { ...state, gameInfo: action.game };
    case SET_FOCUS_GUIDE:
      return { ...state, focusGuide: action.guide };

    case `${GET_LIST}_FAIL`:
    case `${ADD_GAME}_FAIL`:
    case `${EDIT_GAME}_FAIL`:
    case `${DELETE_GAME}_FAIL`:
    case `${GET_ABOUT}_FAIL`:
    case `${EDIT_ABOUT}_FAIL`:
    case `${GET_OVERVIEW}_FAIL`:
    case `${GET_OVERVIEWS}_FAIL`:
    case `${GET_GUIDE}_FAIL`:
    case `${GET_GUIDES}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
