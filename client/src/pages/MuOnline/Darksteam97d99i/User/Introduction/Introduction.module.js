import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';

const SET_ACTIVE_TAB = 'darksteam97d99i/Introduction/SET_ACTIVE_TAB';

const GET_TOP_POINTS = 'darksteam97d99i/Introduction/GET_TOP_POINTS';
const GET_TOP_RESETS = 'darksteam97d99i/Introduction/GET_TOP_RESETS';
const GET_TOP_ZEN = 'darksteam97d99i/Introduction/GET_TOP_ZEN';
const GET_TOP_CREDITS = 'darksteam97d99i/Introduction/GET_TOP_CREDITS';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });

export const getTopPoints = query => actionCreator(GET_TOP_POINTS, services.getTopPoints, { payload: { query } })();
export const getTopResets = query => actionCreator(GET_TOP_RESETS, services.getTopResets, { payload: { query } })();
export const getTopZen = () => actionCreator(GET_TOP_ZEN, services.getTopZen)();
export const getTopCredits = () => actionCreator(GET_TOP_CREDITS, services.getTopCredits)();

const initialState = {
  activeTab: 'Home',
  topPoints: null,
  topResets: null,
  topZen: null,
  topCredits: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case `${GET_TOP_ZEN}_SUCCESS`:
      return { ...state, topZen: action.payload };
    case `${GET_TOP_POINTS}_SUCCESS`:
      return { ...state, topPoints: action.payload };
    case `${GET_TOP_RESETS}_SUCCESS`:
      return { ...state, topResets: action.payload };
    case `${GET_TOP_CREDITS}_SUCCESS`:
      return { ...state, topCredits: action.payload };

    default:
      return state;
  }
};
