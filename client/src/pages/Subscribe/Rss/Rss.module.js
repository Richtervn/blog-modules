import { actionCreator } from 'helpers';
import services from './Rss.services';
import { toastStrong, toastSuccess } from 'common/Toast';

const SET_ACTIVE_TAB = 'rss/SET_ACTIVE_TAB';
const SET_FOCUS_PROVIDER = 'rss/SET_FOCUS_PROVIDER';

const GET_FEEDS = 'rss/GET_FEEDS';
const GET_FEED = 'rss/GET_FEED';
const GET_PROVIDERS = 'rss/GET_PROVIDERS';
const ADD_PROVIDER = 'rss/ADD_PROVIDER';
const EDIT_PROVIDER = 'rss/EDIT_PROVIDER';
const DELETE_PROVIDER = 'rss/DELETE_PROVIDER';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, payload: tab });
export const setFocusProvider = id => ({ type: SET_FOCUS_PROVIDER, payload: id });

export const getFeeds = () => actionCreator(GET_FEEDS, services.getFeeds)();
export const getFeed = id => actionCreator(GET_FEED, services.getFeed, { payload: id })();
export const getProviders = query =>
  actionCreator(GET_PROVIDERS, services.getProviders, { payload: { query } })();
export const addProvider = (formBody, callback) =>
  actionCreator(ADD_PROVIDER, services.addProvider, {
    payload: formBody,
    onAfterSuccess({ data }) {
      toastStrong(data.Provider, 'Added');
      callback();
    }
  })();
export const editProvider = formBody =>
  actionCreator(EDIT_PROVIDER, services.editProvider, {
    payload: formBody,
    onAfterSuccess({ data }) {
      toastStrong(data.Provider, 'Edited');
    }
  })();
export const deleteProvider = id =>
  actionCreator(DELETE_PROVIDER, services.deleteProvider, {
    payload: id,
    onAfterSuccess() {
      toastSuccess('Provider removed');
    }
  })();

const initialState = {
  activeTab: 'Feeds',
  providers: null,
  feeds: null,
  focusProvider: null,
  feedLoadingId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    case SET_FOCUS_PROVIDER:
      return { ...state, focusProvider: action.payload };
    case `${GET_FEEDS}_SUCCESS`:
      return { ...state, feeds: action.payload };
    case `${GET_PROVIDERS}_SUCCESS`:
      return { ...state, providers: action.payload };
    case `${ADD_PROVIDER}_SUCCESS`:
      state.providers.push(action.payload);
      return { ...state, providers: state.providers.slice(0) };
    case `${EDIT_PROVIDER}_SUCCESS`:
      state.providers = state.providers.map(provider => {
        if (parseInt(provider._id, 10) === parseInt(action.payload._id, 10)) {
          return action.payload;
        }
        return provider;
      });
      return { ...state, providers: state.providers.slice(0) };
    case `${DELETE_PROVIDER}_SUCCESS`:
      state.providers = state.providers.filter(
        provider => parseInt(provider._id, 10) !== parseInt(action.payload._id, 10)
      );
      return { ...state, providers: state.providers.slice(0) };
    case `${GET_FEED}_START`:
      return { ...state, feedLoadingId: action.payload };
    case `${GET_FEED}_SUCCESS`:
      state.feeds = state.feeds.map(feed => {
        if (feed.provider === action.payload.provider) {
          return action.payload;
        }
        return feed;
      });
      return { ...state, feeds: state.feeds.slice(0), feedLoadingId: null };
    default:
      return state;
  }
};
