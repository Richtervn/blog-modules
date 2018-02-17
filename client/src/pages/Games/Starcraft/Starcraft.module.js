import { actionCreator } from 'helpers';
import services from './Starcraft.services';
import { toastError, toastSuccess } from 'common/Toast';

const GET_MAPS = 'starcraft/GET_MAPS';

const SET_ACTIVE_TAB = 'starcraft/SET_ACTIVE_TAB';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });

export const getMaps = actionCreator(GET_MAPS, services.getMaps);

const initialState = {
  mods: null,
  campaigns: null,
  maps: null,
  activeTab: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case `${GET_MAPS}_SUCCESS`:
      return { ...state, maps: action.data };
      
    case `${GET_MAPS}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};

// const CHANGE_SIDE_LIST_VIEW = 'starcraft/CHANGE_SIDE_LIST_VIEW';
// export const SET_MAP_FOCUS = 'starcraft/SET_MAP_FOCUS';
// export const SET_MOD_FOCUS = 'starcraft/SET_MOD_FOCUS';
// export const SET_CAMPAIGN_FOCUS = 'starcraft/SET_CAMPAIGN_FOCUS';

// const GET_MAP_LIST_START = 'starcraft/GET_MAP_LIST_START';
// export const GET_MAP_LIST_SUCCESS = 'starcraft/GET_MAP_LIST_SUCCESS';
// const GET_MAP_LIST_FAIL = 'starcraft/GET_MAP_LIST_FAIL';
// const GET_MOD_LIST_START = 'starcraft/GET_MOD_LIST_START';
// export const GET_MOD_LIST_SUCCESS = 'starcraft/GET_MOD_LIST_SUCCESS';
// const GET_MOD_LIST_FAIL = 'starcraft/GET_MOD_LIST_FAIL';
// const GET_CAMPAIGN_LIST_START = 'starcraft/GET_CAMPAIGN_LIST_START';
// export const GET_CAMPAIGN_LIST_SUCCESS = 'starcraft/GET_CAMPAIGN_LIST_SUCCESS';
// const GET_CAMPAIGN_LIST_FAIL = 'starcraft/GET_CAMPAIGN_LIST_FAIL';

// const GET_MOD_DETAIL_START = 'starcraft/GET_MOD_DETAIL_START';
// export const GET_MOD_DETAIL_SUCCESS = 'starcraft/GET_MOD_DETAIL_SUCCESS';
// const GET_MOD_DETAIL_FAIL = 'starcraft/GET_MOD_DETAIL_FAIL';
// const GET_CAMPAIGN_DETAIL_START = 'starcraft/GET_CAMPAIGN_DETAIL_START';
// export const GET_CAMPAIGN_DETAIL_SUCCESS = 'starcraft/GET_CAMPAIGN_DETAIL_SUCCESS';
// const GET_CAMPAIGN_DETAIL_FAIL = 'starcraft/GET_CAMPAIGN_DETAIL_FAIL';

// const SUBMIT_ADD_STARCRAFT_MAP_START = 'starcraft/SUBMIT_ADD_STARCRAFT_MAP_START';
// export const SUBMIT_ADD_STARCRAFT_MAP_SUCCESS = 'starcraft/SUBMIT_ADD_STARCRAFT_MAP_SUCCESS';
// const SUBMIT_ADD_STARCRAFT_MAP_FAIL = 'starcraft/SUBMIT_ADD_STARCRAFT_MAP_FAIL';
// const SUBMIT_EDIT_STARCRAFT_MAP_START = 'starcraft/SUBMIT_EDIT_STARCRAFT_MAP_START';
// export const SUBMIT_EDIT_STARCRAFT_MAP_SUCCESS = 'starcraft/SUBMIT_EDIT_STARCRAFT_MAP_SUCCESS';
// const SUBMIT_EDIT_STARCRAFT_MAP_FAIL = 'starcraft/SUBMIT_EDIT_STARCRAFT_MAP_FAIL';
// const SUBMIT_ADD_STARCRAFT_MOD_START = 'starcraft/SUBMIT_ADD_STARCRAFT_MOD_START';
// export const SUBMIT_ADD_STARCRAFT_MOD_SUCCESS = 'starcraft/SUBMIT_ADD_STARCRAFT_MOD_SUCCESS';
// const SUBMIT_ADD_STARCRAFT_MOD_FAIL = 'starcraft/SUBMIT_ADD_STARCRAFT_MOD_FAIL';

// const SUBMIT_EDIT_STARCRAFT_MOD_START = 'starcraft/SUBMIT_EDIT_STARCRAFT_MOD_START';
// export const SUBMIT_EDIT_STARCRAFT_MOD_SUCCESS = 'starcraft/SUBMIT_EDIT_STARCRAFT_MOD_SUCCESS';
// const SUBMIT_EDIT_STARCRAFT_MOD_FAIL = 'starcraft/SUBMIT_EDIT_STARCRAFT_MOD_FAIL';
// const SUBMIT_ADD_STARCRAFT_CAMPAIGN_START = 'starcraft/SUBMIT_ADD_STARCRAFT_CAMPAIGN_START';
// export const SUBMIT_ADD_STARCRAFT_CAMPAIGN_SUCCESS = 'starcraft/SUBMIT_ADD_STARCRAFT_CAMPAIGN_SUCCESS';
// const SUBMIT_ADD_STARCRAFT_CAMPAIGN_FAIL = 'starcraft/SUBMIT_ADD_STARCRAFT_CAMPAIGN_FAIL';
// const SUBMIT_EDIT_STARCRAFT_CAMPAIGN_START = 'starcraft/SUBMIT_EDIT_STARCRAFT_CAMPAIGN_START';
// export const SUBMIT_EDIT_STARCRAFT_CAMPAIGN_SUCCESS = 'starcraft/SUBMIT_EDIT_STARCRAFT_CAMPAIGN_SUCCESS';
// const SUBMIT_EDIT_STARCRAFT_CAMPAIGN_FAIL = 'starcraft/SUBMIT_EDIT_STARCRAFT_CAMPAIGN_FAIL';

// const SEARCH_MAP_START = 'starcraft/SEARCH_MAP_START';
// const SEARCH_MAP_SUCCESS = 'starcraft/SEARCH_MAP_SUCCESS';
// const SEARCH_MAP_FAIL = 'starcraft/SEARCH_MAP_FAIL';
// const SEARCH_MOD_START = 'starcraft/SEARCH_MOD_START';
// const SEARCH_MOD_SUCCESS = 'starcraft/SEARCH_MOD_SUCCESS';
// const SEARCH_MOD_FAIL = 'starcraft/SEARCH_MOD_FAIL';
// const SEARCH_CAMPAIGN_START = 'starcraft/SEARCH_CAMPAIGN_START';
// const SEARCH_CAMPAIGN_SUCCESS = 'starcraft/SEARCH_CAMPAIGN_SUCCESS';
// const SEARCH_CAMPAIGN_FAIL = 'starcraft/SEARCH_CAMPAIGN_FAIL';

// const DELETE_MAP_START = 'starcraft/DELETE_MAP_START';
// const DELETE_MAP_SUCCESS = 'starcraft/DELETE_MAP_START_SUCCESS';
// const DELETE_MAP_FAIL = 'starcraft/DELETE_MAP_FAIL';
// const DELETE_MOD_START = 'starcraft/DELETE_MOD_START';
// const DELETE_MOD_SUCCESS = 'starcraft/DELETE_MOD_SUCCESS';
// const DELETE_MOD_FAIL = 'starcraft.DELETE_MOD_FAIL';
// const DELETE_CAMPAIGN_START = 'starcraft/DELETE_CAMPAIGN_START';
// const DELETE_CAMPAIGN_SUCESS = 'starcraft/DELETE_CAMPAIGN_SUCESS';
// const DELETE_CAMPAIGN_FAIL = 'starcraft/DELETE_CAMPAIGN_FAIL';

// const SORT_MAP = 'starcraft/SORT_MAP';
// const SORT_MOD = 'starcraft/SORT_MOD';
// const SORT_CAMPAIGN = 'starcraft/SORT_CAMPAIGN';

// export const changeSideListView = header => ({ type: CHANGE_SIDE_LIST_VIEW, header });
// export const setMapFocus = map => ({ type: SET_MAP_FOCUS, map });
// export const setModFocus = mod => ({ type: SET_MOD_FOCUS, mod });
// export const setCampaignFocus = campaign => ({ type: SET_CAMPAIGN_FOCUS, campaign });

// export const getMapList = actionCreator(
//   GET_MAP_LIST_START,
//   GET_MAP_LIST_SUCCESS,
//   GET_MAP_LIST_FAIL,
//   starcraft.getMapList
// );

// export const getModList = actionCreator(
//   GET_MOD_LIST_START,
//   GET_MOD_LIST_SUCCESS,
//   GET_MOD_LIST_FAIL,
//   starcraft.getModList
// );

// export const getCampaignList = actionCreator(
//   GET_CAMPAIGN_LIST_START,
//   GET_CAMPAIGN_LIST_SUCCESS,
//   GET_CAMPAIGN_LIST_FAIL,
//   starcraft.getCampaignList
// );

// export const submitAddStarcraftMapForm = formBody =>
//   actionCreator(
//     SUBMIT_ADD_STARCRAFT_MAP_START,
//     SUBMIT_ADD_STARCRAFT_MAP_SUCCESS,
//     SUBMIT_ADD_STARCRAFT_MAP_FAIL,
//     starcraft.addMap,
//     formBody
//   )();
// export const submitEditStarcraftMapForm = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_STARCRAFT_MAP_START,
//     SUBMIT_EDIT_STARCRAFT_MAP_SUCCESS,
//     SUBMIT_ADD_STARCRAFT_MAP_FAIL,
//     starcraft.editMap,
//     formBody
//   )();
// export const submitAddStarcraftModForm = formBody =>
//   actionCreator(
//     SUBMIT_ADD_STARCRAFT_MOD_START,
//     SUBMIT_ADD_STARCRAFT_MOD_SUCCESS,
//     SUBMIT_ADD_STARCRAFT_MOD_FAIL,
//     starcraft.addMod,
//     formBody
//   )();
// export const submitEditStarcraftModForm = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_STARCRAFT_MOD_START,
//     SUBMIT_EDIT_STARCRAFT_MOD_SUCCESS,
//     SUBMIT_EDIT_STARCRAFT_MOD_FAIL,
//     starcraft.editMod,
//     formBody
//   )();
// export const submitAddStarcraftCampaignForm = formBody =>
//   actionCreator(
//     SUBMIT_ADD_STARCRAFT_CAMPAIGN_START,
//     SUBMIT_ADD_STARCRAFT_CAMPAIGN_SUCCESS,
//     SUBMIT_ADD_STARCRAFT_CAMPAIGN_FAIL,
//     starcraft.addCampaign,
//     formBody
//   )();
// export const submitEditStarcraftCampaignForm = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_STARCRAFT_CAMPAIGN_START,
//     SUBMIT_EDIT_STARCRAFT_CAMPAIGN_SUCCESS,
//     SUBMIT_EDIT_STARCRAFT_CAMPAIGN_FAIL,
//     starcraft.editCampaign,
//     formBody
//   )();
// export const getModDetail = id =>
//   actionCreator(GET_MOD_DETAIL_START, GET_MOD_DETAIL_SUCCESS, GET_MOD_DETAIL_FAIL, starcraft.getModDetail, id)();
// export const getCampaignDetail = id =>
//   actionCreator(
//     GET_CAMPAIGN_DETAIL_START,
//     GET_CAMPAIGN_DETAIL_SUCCESS,
//     GET_CAMPAIGN_DETAIL_FAIL,
//     starcraft.getCampaignDetail,
//     id
//   )();

// export const deleteMap = id =>
//   actionCreator(DELETE_MAP_START, DELETE_MAP_SUCCESS, DELETE_MAP_FAIL, starcraft.deleteMap, id)();
// export const deleteMod = id =>
//   actionCreator(DELETE_MOD_START, DELETE_MOD_SUCCESS, DELETE_MOD_FAIL, starcraft.deleteMod, id)();
// export const deleteCampaign = id =>
//   actionCreator(DELETE_CAMPAIGN_START, DELETE_CAMPAIGN_SUCESS, DELETE_CAMPAIGN_FAIL, starcraft.deleteCampaign, id)();

// export const searchMap = text =>
//   actionCreator(SEARCH_MAP_START, SEARCH_MAP_SUCCESS, SEARCH_MAP_FAIL, starcraft.searchMap, text)();
// export const searchMod = text =>
//   actionCreator(SEARCH_MOD_START, SEARCH_MOD_SUCCESS, SEARCH_MOD_FAIL, starcraft.searchMod, text)();
// export const searchCampaign = text =>
//   actionCreator(SEARCH_CAMPAIGN_START, SEARCH_CAMPAIGN_SUCCESS, SEARCH_CAMPAIGN_FAIL, starcraft.searchCampaign, text)();

// export const sortMap = query => ({ type: SORT_MAP, query });
// export const sortMod = query => ({ type: SORT_MOD, query });
// export const sortCampaign = query => ({ type: SORT_CAMPAIGN, query });

// export default (
//   state = {
//     maps: null,
//     mods: null,
//     campaigns: null,
//     modFocus: {},
//     campaignFocus: {},
//     mapFocus: {},
//     viewControl: {
//       SideList: 'Campaigns'
//     }
//   },
//   action
// ) => {
//   switch (action.type) {
//     case CHANGE_SIDE_LIST_VIEW:
//       return { ...state, viewControl: { ...state.viewControl, SideList: action.header } };
//     case GET_MAP_LIST_SUCCESS:
//       return { ...state, maps: action.data, mapFocus: action.data[0] };
//     case GET_MOD_LIST_SUCCESS:
//       return { ...state, mods: action.data };
//     case GET_CAMPAIGN_LIST_SUCCESS:
//       return { ...state, campaigns: action.data };
//     case GET_MOD_DETAIL_SUCCESS:
//       return { ...state, modFocus: action.data };
//     case GET_CAMPAIGN_DETAIL_SUCCESS:
//       return { ...state, campaignFocus: action.data };
//     case SUBMIT_ADD_STARCRAFT_MAP_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.maps.push(action.data);
//       return { ...state, maps: state.maps.slice(0), mapFocus: action.data };
//     case SUBMIT_ADD_STARCRAFT_MOD_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.mods.push(action.data);
//       return { ...state, mods: state.mods.slice(0), modFocus: action.data };
//     case SUBMIT_ADD_STARCRAFT_CAMPAIGN_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.campaigns.push(action.data);
//       return { ...state, campaigns: state.campaigns.slice(0), campaignFocus: action.data };
//     case SET_MAP_FOCUS:
//       return { ...state, mapFocus: action.map };
//     case SET_MOD_FOCUS:
//       return { ...state, modFocus: action.mod };
//     case SET_CAMPAIGN_FOCUS:
//       return { ...state, campaignFocus: action.campaign };
//     case DELETE_MAP_SUCCESS:
//       const maps = state.maps.filter(map => map._id != action.data._id);
//       return { ...state, maps: maps.slice(0), mapFocus: maps[0] };
//     case DELETE_MOD_SUCCESS:
//       const mods = state.mods.filter(mod => mod._id != action.data._id);
//       return { ...state, mods: maps.slice(0), modFocus: mods[0] };
//     case DELETE_CAMPAIGN_SUCESS:
//       const campaigns = state.campaigns.filter(campaign => campaign._id != action.data._id);
//       return { ...state, campaigns: campaigns.slice(0), campaignFocus: campaigns[0] };
//     case SEARCH_MAP_SUCCESS:
//       return { ...state, maps: action.data };
//     case SEARCH_MOD_SUCCESS:
//       return { ...state, mods: action.data };
//     case SEARCH_CAMPAIGN_SUCCESS:
//       return { ...state, campaigns: action.data };
//     case SORT_MAP:
//       let key = Object.keys(action.query)[0];
//       return {
//         ...state,
//         maps:
//           action.query[key] == 'ASC'
//             ? _.sortBy(state.maps, key).slice(0)
//             : _.sortBy(state.maps, key)
//                 .reverse()
//                 .slice(0)
//       };
//     case SORT_MOD: {
//       let key = Object.keys(action.query)[0];
//       return {
//         ...state,
//         mods:
//           action.query[key] == 'ASC'
//             ? _.sortBy(state.mods, key).slice(0)
//             : _.sortBy(state.mods, key)
//                 .reverse()
//                 .slice(0)
//       };
//     }
//     case SORT_CAMPAIGN: {
//       let key = Object.keys(action.query)[0];
//       return {
//         ...state,
//         campaigns:
//           action.query[key] == 'ASC'
//             ? _.sortBy(state.campaigns, key).slice(0)
//             : _.sortBy(state.campaigns, key)
//                 .reverse()
//                 .slice(0)
//       };
//     }

//     case GET_MOD_LIST_FAIL:
//     case GET_CAMPAIGN_LIST_FAIL:
//     case GET_MAP_LIST_FAIL:
//     case GET_MOD_DETAIL_FAIL:
//     case GET_CAMPAIGN_DETAIL_FAIL:
//     case SUBMIT_ADD_STARCRAFT_MAP_FAIL:
//     case SUBMIT_EDIT_STARCRAFT_MAP_FAIL:
//     case SUBMIT_ADD_STARCRAFT_MOD_FAIL:
//     case SUBMIT_EDIT_STARCRAFT_MOD_FAIL:
//     case SUBMIT_ADD_STARCRAFT_CAMPAIGN_FAIL:
//     case SUBMIT_EDIT_STARCRAFT_CAMPAIGN_FAIL:
//     case SEARCH_MAP_FAIL:
//     case SEARCH_MOD_FAIL:
//     case SEARCH_CAMPAIGN_FAIL:
//     case DELETE_MAP_FAIL:
//     case DELETE_MOD_FAIL:
//     case DELETE_CAMPAIGN_FAIL:
//       toast.error(`${action.error}`, {
//         position: toast.POSITION.TOP_LEFT,
//         className: 'toast-error'
//       });
//       return state;

//     default:
//       return state;
//   }
// };
