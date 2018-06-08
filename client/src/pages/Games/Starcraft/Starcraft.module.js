import _ from 'underscore';
import React from 'react';
import { actionCreator } from 'helpers';
import services from './Starcraft.services';
import { toastSuccess } from 'common/Toast';

const GET_MAPS = 'starcraft/GET_MAPS';
const ADD_MAP = 'starcraft/ADD_MAP';
const EDIT_MAP = 'starcraft/EDIT_MAP';
const DELETE_MAP = 'starcraft/DELETE_MAP';
const SEARCH_MAP = 'starcraft/SEARCH_MAP';
const SORT_MAP = 'starcraft/SORT_MAP';

const GET_CAMPAIGNS = 'starcraft/GET_CAMPAIGNS';
const GET_CAMPAIGN_DETAIL = 'starcraft/GET_CAMPAIGN_DETAIL';
const ADD_CAMPAIGN = 'starcraft/ADD_CAMPAIGN';
const EDIT_CAMPAIGN = 'starcraft/EDIT_CAMPAIGN';
const DELETE_CAMPAIGN = 'starcraft/DELETE_CAMPAIGN';
const SEARCH_CAMPAIGN = 'starcraft/SEARCH_CAMPAIGN';
const SORT_CAMPAIGN = 'starcraft/SORT_CAMPAIGN';

const GET_MODS = 'starcraft/GET_MODS';
const GET_MOD_DETAIL = 'starcraft/GET_MOD_DETAIL';
const ADD_MOD = 'starcraft/ADD_MOD';
const EDIT_MOD = 'starcraft/EDIT_MOD';
const DELETE_MOD = 'starcraft/DELETE_MOD';
const SEARCH_MOD = 'starcraft/SEARCH_MOD';
const SORT_MOD = 'starcraft/SORT_MOD';

const SET_ACTIVE_TAB = 'starcraft/SET_ACTIVE_TAB';
const SET_FOCUS_MAP = 'starcraft/SET_FOCUS_MAP';
const CHANGE_CURRENT_FEATURE = 'starcraft/CHANGE_CURRENT_FEATURE';
const CHANGE_SEARCH = 'starcraft/CHANGE_SEARCH';
const CHANGE_SORT_KEY = 'starcraft/CHANGE_SORT_KEY';
const CHANGE_SORT_OPTION = 'starcraft/CHANGE_SORT_OPTION';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setFocusMap = id => ({ type: SET_FOCUS_MAP, id });
export const changeCurrentFeature = feature => ({ type: CHANGE_CURRENT_FEATURE, feature });
export const changeSearch = text => ({ type: CHANGE_SEARCH, text });
export const changeSortKey = key => ({ type: CHANGE_SORT_KEY, key });
export const changeSortOption = option => ({ type: CHANGE_SORT_OPTION, option });

export const getMaps = () => actionCreator(GET_MAPS, services.getMaps)();
export const addMap = formBody => actionCreator(ADD_MAP, services.addMap, { payload: { formBody } })();
export const editMap = formBody => actionCreator(EDIT_MAP, services.editMap, { payload: { formBody } })();
export const deleteMap = id => actionCreator(DELETE_MAP, services.deleteMap, { payload: { id } })();
export const searchMap = text => actionCreator(SEARCH_MAP, services.searchMap, { payload: { text } })();
export const sortMap = query => ({ type: SORT_MAP, query });

export const getCampaigns = () => actionCreator(GET_CAMPAIGNS, services.getCampaigns)();
export const getCampaignDetail = id =>
  actionCreator(GET_CAMPAIGN_DETAIL, services.getCampaignDetail, { payload: { id } })();
export const addCampaign = formBody => actionCreator(ADD_CAMPAIGN, services.addCampaign, { payload: { formBody } })();
export const editCampaign = formBody =>
  actionCreator(EDIT_CAMPAIGN, services.editCampaign, { payload: { formBody } })();
export const deleteCampaign = id => actionCreator(DELETE_CAMPAIGN, services.deleteCampaign, { payload: { id } })();
export const searchCampaign = text => actionCreator(SEARCH_CAMPAIGN, services.searchCampaign, { payload: { text } })();
export const sortCampaign = query => ({ type: SORT_CAMPAIGN, query });

export const getMods = () => actionCreator(GET_MODS, services.getMods)();
export const getModDetail = id => actionCreator(GET_MOD_DETAIL, services.getModDetail, { payload: { id } })();
export const addMod = formBody => actionCreator(ADD_MOD, services.addMod, { payload: { formBody } })();
export const editMod = formBody => actionCreator(EDIT_MOD, services.editMod, { payload: { formBody } })();
export const deleteMod = id => actionCreator(DELETE_MOD, services.deleteMod, { payload: { id } })();
export const searchMod = text => actionCreator(SEARCH_MOD, services.searchMod, { payload: { text } })();
export const sortMod = query => ({ type: SORT_MOD, query });

const initialState = {
  mods: null,
  campaigns: null,
  maps: null,
  activeTab: '',
  focusMap: null,
  currentFeature: 'Search',
  search: '',
  sortKey: '',
  sortOption: 'ASC',
  campaignDetail: {},
  modDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case SET_FOCUS_MAP:
      return { ...state, focusMap: action.id };
    case CHANGE_CURRENT_FEATURE:
      return { ...state, currentFeature: action.feature };
    case CHANGE_SEARCH:
      return { ...state, search: action.text };
    case CHANGE_SORT_KEY:
      return { ...state, sortKey: action.key };
    case CHANGE_SORT_OPTION:
      return { ...state, sortOption: action.option };

    case `${GET_MAPS}_SUCCESS`:
      return { ...state, maps: action.payload, focusMap: action.payload[0] ? action.payload[0]._id : null };
    case `${ADD_MAP}_SUCCESS`:
      state.maps.push(action.payload);
      toastSuccess(() => (
        <p>
          Added <strong>{action.payload.Name}</strong>
        </p>
      ));
      return { ...state, maps: state.maps.slice(0), focusMap: action.payload._id };
    case `${EDIT_MAP}_SUCCESS`:
      state.maps = state.maps.map(scmap => {
        if (scmap._id === action.payload._id) {
          return action.payload;
        }
        return scmap;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Name}</strong>
        </p>
      ));
      return { ...state, maps: state.maps.slice(0) };
    case `${DELETE_MAP}_SUCCESS`:
      state.maps = state.maps.filter(scmap => scmap._id !== action.payload._id);
      return { ...state, maps: state.maps.slice(0) };
    case `${SEARCH_MAP}_SUCCESS`:
      return { ...state, maps: action.payload, focusMap: action.payload[0] ? action.payload[0]._id : null };
    case SORT_MAP: {
      let key = Object.keys(action.query)[0];
      return {
        ...state,
        maps:
          action.query[key] === 'ASC'
            ? _.sortBy(state.maps, key).slice(0)
            : _.sortBy(state.maps, key)
                .reverse()
                .slice(0)
      };
    }

    case `${GET_CAMPAIGNS}_SUCCESS`:
      return { ...state, campaigns: action.payload };
    case `${GET_CAMPAIGN_DETAIL}_SUCCESS`:
      return { ...state, campaignDetail: action.payload };
    case `${ADD_CAMPAIGN}_SUCCESS`:
      state.campaigns.push(action.payload);
      toastSuccess(() => (
        <p>
          Added <strong>{action.payload.Name}</strong>
        </p>
      ));
      return { ...state, campaigns: state.campaigns.slice(0) };
    case `${EDIT_CAMPAIGN}_SUCCESS`:
      state.campaigns = state.campaigns.map(campaign => {
        if (campaign._id === action.payload._id) {
          return _.omit(action.payload, 'HTML', 'CSS');
        }
        return campaign;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Name}</strong>
        </p>
      ));
      return {
        ...state,
        campaigns: state.campaigns.slice(0),
        campaignDetail: { ...state.campaignDetail, ...action.payload }
      };
    case `${DELETE_CAMPAIGN}_SUCCESS`:
      state.campaigns = state.campaigns.filter(campaign => campaign._id !== action.payload._id);
      return { ...state, campaign: state.campaign.slice(0), campaignDetail: {} };
    case `${SEARCH_CAMPAIGN}_SUCCESS`:
      return { ...state, campaigns: action.payload, campaignDetail: {} };
    case SORT_CAMPAIGN: {
      let key = Object.keys(action.query)[0];
      return {
        ...state,
        campaigns:
          action.query[key] === 'ASC'
            ? _.sortBy(state.campaigns, key).slice(0)
            : _.sortBy(state.campaigns, key)
                .reverse()
                .slice(0)
      };
    }

    case `${GET_MODS}_SUCCESS`:
      return { ...state, mods: action.payload };
    case `${GET_MOD_DETAIL}_SUCCESS`:
      return { ...state, modDetail: action.payload };
    case `${ADD_MOD}_SUCCESS`:
      state.mods.push(action.payload);
      toastSuccess(() => (
        <p>
          Added <strong>{action.payload.Name}</strong>
        </p>
      ));
      return { ...state, campaigns: state.mods.slice(0) };
    case `${EDIT_MOD}_SUCCESS`:
      state.mods = state.mods.map(mod => {
        if (mod._id === action.payload._id) {
          return _.omit(action.payload, 'HTML', 'CSS');
        }
        return mod;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.payload.Name}</strong>
        </p>
      ));
      return {
        ...state,
        mods: state.mods.slice(0),
        modDetail: { ...state.modDetail, ...action.payload }
      };
    case `${DELETE_MOD}_SUCCESS`:
      state.mods = state.mods.filter(mod => mod._id !== action.payload._id);
      return { ...state, mods: state.mods.slice(0) };
    case `${SEARCH_MOD}_SUCCESS`:
      return { ...state, mods: action.payload, modDetail: {} };
    case SORT_MOD: {
      let key = Object.keys(action.query)[0];
      return {
        ...state,
        mods:
          action.query[key] === 'ASC'
            ? _.sortBy(state.mods, key).slice(0)
            : _.sortBy(state.mods, key)
                .reverse()
                .slice(0)
      };
    }

    default:
      return state;
  }
};
