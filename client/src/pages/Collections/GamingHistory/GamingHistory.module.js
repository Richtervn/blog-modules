import React from 'react';
import { actionCreator } from 'helpers';
import { toastSuccess } from 'common/Toast';

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
const EDIT_OVERVIEW_DETAIL = 'gamingHistory/EDIT_OVERVIEW_DETAIL';
const DELETE_GAME = 'gamingHistory/DELETE_GAME';
const DELETE_GUIDE = 'gamingHistory/DELETE_GUIDE';
const DELETE_OVERVIEW = 'gamingHistory/DELETE_OVERVIEW';

const SET_FOCUS_GAME = 'gamingHistory/SET_FOCUS_GAME';
const SET_ACTIVE_TAB = 'gamingHistory/SET_ACTIVE_TAB';
const SET_GAME_INFO = 'gamingHistory/SET_GAME_INFO';
const SET_FOCUS_GUIDE = 'gamingHistory/SET_FOCUS_GUIDE';
const SET_FOCUS_OVERVIEW = 'gamingHistory/SET_FOCUS_OVERVIEW';

export const getList = () => actionCreator(GET_LIST, services.getList)();
export const getGuides = gameId => actionCreator(GET_GUIDES, services.getGuides, { payload: { gameId } })();
export const getOverviews = gameId => actionCreator(GET_OVERVIEWS, services.getOverviews, { payload: { gameId } })();
export const getAboutContent = gameId => actionCreator(GET_ABOUT, services.getAbout, { payload: { gameId } })();
export const getGuide = id => actionCreator(GET_GUIDE, services.getGuide, { payload: { id } })();
export const getOverview = id => actionCreator(GET_OVERVIEW, services.getOverview, { payload: { id } })();

export const addGame = formBody => actionCreator(ADD_GAME, services.addGame, { payload: { formBody } })();
export const addGuide = formBody => actionCreator(ADD_GUIDE, services.addGuide, { payload: { formBody } })();
export const addOverview = formBody => actionCreator(ADD_OVERVIEW, services.addOverview, { payload: { formBody } })();

export const editGame = formBody => actionCreator(EDIT_GAME, services.editGame, { payload: { formBody } })();
export const editGuide = formBody => actionCreator(EDIT_GUIDE, services.editGuide, { payload: { formBody } })();
export const editOverview = formBody =>
  actionCreator(EDIT_OVERVIEW, services.editOverview, { payload: { formBody } })();
export const editOverviewDetail = formBody =>
  actionCreator(EDIT_OVERVIEW_DETAIL, services.editOverview, { payload: { formBody } })();
export const deleteGame = id => actionCreator(DELETE_GAME, services.deleteGame, { payload: { id } })();

export const deleteGuide = id => actionCreator(DELETE_GUIDE, services.deleteGuide, { payload: { id } })();
export const deleteOverview = id => actionCreator(DELETE_OVERVIEW, services.deleteOverview, { payload: { id } })();
export const editAboutContent = formBody => actionCreator(EDIT_ABOUT, services.editAbout, { payload: { formBody } })();

export const setFocusGame = game => ({ type: SET_FOCUS_GAME, game });
export const setActiveTab = tabName => ({ type: SET_ACTIVE_TAB, tabName });
export const setGameInfo = game => ({ type: SET_GAME_INFO, game });
export const setFocusGuide = guide => ({ type: SET_FOCUS_GUIDE, guide });
export const setFocusOverview = overview => ({ type: SET_FOCUS_OVERVIEW, overview });

const initialState = {
  activeTab: 'About',
  list: null,
  focusGame: { Genres: [''], Publishers: [''], Periods: [''] },
  guides: null,
  guideDetail: null,
  focusGuide: {},
  overviews: null,
  overviewDetail: null,
  focusOverview: {},
  aboutContent: null,
  gameInfo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_LIST}_SUCCESS`:
      return { ...state, list: action.payload };
    case `${GET_GUIDES}_SUCCESS`:
      return { ...state, guides: action.payload };
    case `${GET_OVERVIEWS}_SUCCESS`:
      return { ...state, overviews: action.payload };

    case `${ADD_GAME}_SUCCESS`:
      state.list.push(action.payload);
      toastSuccess(() => (
        <p>
          Added <strong>{action.payload.Name}</strong>
        </p>
      ));
      return { ...state, list: state.list.slice(0) };
    case `${EDIT_GAME}_SUCCESS`:
      state.list = state.list.map(game => {
        if (game._id === action.payload._id) {
          return action.payload;
        }
        return game;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Name}</strong>
        </p>
      ));
      return { ...state, list: state.list.slice(0), focusGame: { ...action.payload } };

    case `${ADD_OVERVIEW}_SUCCESS`:
      state.overviews.push(action.payload);
      toastSuccess(() => (
        <p>
          Added <strong>{action.payload.title}</strong>
        </p>
      ));
      return { ...state, overviews: state.overviews.slice(0) };
    case `${EDIT_OVERVIEW}_SUCCESS`:
      state.overviews = state.overviews.map(overview => {
        if (overview._id === action.payload._id) {
          return action.payload;
        }
        return overview;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Title}</strong>
        </p>
      ));
      return { ...state, overviews: state.overviews.slice(0) };

    case `${ADD_GUIDE}_SUCCESS`:
      state.guides.push(action.payload);
      toastSuccess(() => (
        <p>
          Added <strong>{action.payload.Title}</strong>
        </p>
      ));
      return { ...state, guides: state.guides.slice(0) };
    case `${EDIT_GUIDE}_SUCCESS`:
      state.guides = state.guides.map(guide => {
        if (guide._id === action.payload._id) {
          return action.payload;
        }
        return guide;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Title}</strong>
        </p>
      ));
      return { ...state, guides: state.guides.slice(0) };

    case `${GET_ABOUT}_SUCCESS`:
      return { ...state, aboutContent: action.payload };
    case `${EDIT_ABOUT}_SUCCESS`:
      toastSuccess('Edited page content');
      return { ...state, aboutContent: { ...state.aboutContent, ...action.payload } };
    case `${EDIT_OVERVIEW_DETAIL}_SUCCESS`:
      return { ...state, overviewDetail: { ...state.overviewDetail, Sections: action.payload.Sections.slice(0) } };

    case `${GET_GUIDE}_SUCCESS`:
      return { ...state, guideDetail: action.payload };
    case `${GET_OVERVIEW}_SUCCESS`:
      return { ...state, overviewDetail: action.payload };

    case `${DELETE_GAME}_SUCCESS`:
      return { ...state, list: state.list.filter(game => game._id !== parseInt(action.payload._id, 10).slice(0)) };
    case `${DELETE_OVERVIEW}_SUCCESS`:
      return {
        ...state,
        overviews: state.overviews.filter(overview => overview._id !== parseInt(action.payload._id, 10).slice(0))
      };
    case `${DELETE_GUIDE}_SUCCESS`:
      return { ...state, guides: state.guides.filter(guide => guide._id !== parseInt(action.payload._id, 10).slice(0)) };

    case SET_FOCUS_GAME:
      return { ...state, focusGame: action.game };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tabName };
    case SET_GAME_INFO:
      return { ...state, gameInfo: action.game };
    case SET_FOCUS_GUIDE:
      return { ...state, focusGuide: action.guide };
    case SET_FOCUS_OVERVIEW:
      return { ...state, focusOverview: action.overview };

    default:
      return state;
  }
};
