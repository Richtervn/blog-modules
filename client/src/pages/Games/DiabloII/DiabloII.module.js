import React from 'react';
import { actionCreator } from 'helpers';
import services from './DiabloII.services';
import { toastSuccess, toastError } from 'common/Toast';

const SET_ACTIVE_TAB = 'diabloII/SET_ACTIVE_TAB';

const GET_MODS = 'diabloII/GET_MODS';
const GET_MOD_DETAIL = 'diabloII/GET_MOD_DETAIL';
const ADD_MOD = 'diabloII/ADD_MOD';
const EDIT_MOD = 'diabloII/EDIT_MOD';
const DELETE_MOD = 'diabloII/DELETE_MOD';
const SEARCH_MODS = 'diabloII/SEARCH_MODS';
const SORT_MODS = 'diabloII/SORT_MODS';

const GET_TOOLS = 'diabloII/GET_TOOLS';
const GET_TOOL_DETAIL = 'diabloII/GET_TOOL_DETAIL';
const ADD_TOOL = 'diabloII/ADD_TOOL';
const EDIT_TOOL = 'diabloII/EDIT_TOOL';
const DELETE_TOOL = 'diabloII/DELETE_TOOL';
const SEARCH_TOOLS = 'diabloII/SEARCH_TOOLS';
const SORT_TOOLS = 'diabloII/SORT_TOOLS';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });

export const getMods = actionCreator(GET_MODS, services.getMods);
export const getModDetail = id => actionCreator(GET_MOD_DETAIL, services.getModDetail, id)();
export const addMod = formBody => actionCreator(ADD_MOD, services.addMod, formBody)();
export const editMod = formBody => actionCreator(EDIT_MOD, services.editMod, formBody)();
export const deleteMod = id => actionCreator(DELETE_MOD, services.deleteMod, id)();
export const searchMods = query => actionCreator(SEARCH_MODS, services.searchMods, query)();
export const sortMod = (sortKey, sortOption) => ({ type: SORT_MODS, sortKey, sortOption });

export const getTools = actionCreator(GET_TOOLS, services.getTools);
export const getToolDetail = id => actionCreator(GET_TOOL_DETAIL, services.getToolDetail, id)();
export const addTool = formBody => actionCreator(ADD_TOOL, services.addTool, formBody)();
export const editTool = formBody => actionCreator(EDIT_TOOL, services.editTool, formBody)();
export const deleteTool = id => actionCreator(DELETE_TOOL, services.deleteTool, id)();
export const searchTools = query => actionCreator(SEARCH_TOOLS, services.searchTools, query)();
export const sortTool = (sortKey, sortOption) => ({ type: SORT_TOOLS, sortKey, sortOption });

const initialState = {
  activeTab: 'Mods',
  mods: null,
  tools: null,
  sortModKey: '',
  sortModOption: '',
  sortToolKey: '',
  sortToolOption: '',
  modDetail: {},
  toolDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };

    case `${GET_MODS}_SUCCESS`:
      return { ...state, mods: action.data };
    case `${GET_MOD_DETAIL}_SUCCESS`:
      return { ...state, modDetail: action.data };
    case `${ADD_MOD}_SUCCESS`:
      state.mods.push(action.data);
      toastSuccess(() => (
        <p>
          Added <strong>{action.data.Name}</strong>
        </p>
      ));
      return { ...state, mods: state.mods.slice(0) };
    case `${EDIT_MOD}_SUCCESS`:
      state.mods = state.mods.map(mod => {
        if (mod._id === action.data._id) {
          return action.data;
        }
        return mod;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.data.Name}</strong>
        </p>
      ));
      return { ...state, mods: state.mods.slice(0), modDetail: { ...state.modDetail, ...action.data } };
    case `${DELETE_MOD}_SUCCESS`:
      state.mods = state.mods.filter(mod => mod._id !== action.data._id);
      return { ...state, mods: state.mods.slice(0) };
    case `${SEARCH_MODS}_SUCCESS`:
      return { ...state, mods: action.data };
    case SORT_MODS:
      return { ...state, sortModKey: action.sortKey, sortModOption: action.sortOption };

    case `${GET_TOOLS}_SUCCESS`:
      return { ...state, tools: action.data };
    case `${GET_TOOL_DETAIL}_SUCCESS`:
      return { ...state, toolDetail: action.data };
    case `${ADD_TOOL}_SUCCESS`:
      state.tools.push(action.data);
      toastSuccess(() => (
        <p>
          Added <strong>{action.data.Name}</strong>
        </p>
      ));
      return { ...state, tools: state.tools.slice(0) };
    case `${EDIT_TOOL}_SUCCESS`:
      state.tools = state.tools.map(tool => {
        if (tool._id === action.data._id) {
          return action.data;
        }
        return tool;
      });
      toastSuccess(() => (
        <p>
          Updated <strong>{action.data.Name}</strong>
        </p>
      ));
      return { ...state, tools: state.tools.slice(0), toolDetail: { ...state.toolDetail, ...action.data } };
    case `${DELETE_TOOL}_SUCCESS`:
      state.tools = state.tools.filter(tool => tool._id !== action.data._id);
      return { ...state, tools: state.tools.slice(0) };
    case `${SEARCH_TOOLS}_SUCCESS`:
      return { ...state, tools: action.data };
    case SORT_TOOLS:
      return { ...state, sortToolKey: action.sortKey, sortToolOption: action.sortOption };

    case `${GET_MODS}_FAIL`:
    case `${GET_MOD_DETAIL}_FAIL`:
    case `${ADD_MOD}_FAIL`:
    case `${EDIT_MOD}_FAIL`:
    case `${DELETE_MOD}_FAIL`:
    case `${SEARCH_MODS}_FAIL`:
    case `${GET_TOOLS}_FAIL`:
    case `${GET_TOOL_DETAIL}_FAIL`:
    case `${ADD_TOOL}_FAIL`:
    case `${EDIT_TOOL}_FAIL`:
    case `${DELETE_TOOL}_FAIL`:
    case `${SEARCH_TOOLS}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};

// import { diabloII } from 'services';

// const CHANGE_ACTIVE_CHANNEL = 'diabloII/CHANGE_ACTIVE_CHANNEL';

// export const SET_FOCUS_CHARACTER = 'diabloII/SET_FOCUS_CHARACTER';
// export const SET_FOCUS_SURVIVAL_KIT = 'diabloII/SET_FOCUS_SURVIVAL_KIT';

// const GET_TOOLS_START = 'diabloII/GET_TOOLS_START';
// export const GET_TOOLS_SUCCESS = 'diabloII/GET_TOOLS_SUCCESS';
// const GET_TOOLS_FAIL = 'diabloII/GET_TOOLS_FAIL';
// const GET_CHARACTERS_START = 'diabloII/GET_CHARACTERS_START';
// export const GET_CHARACTERS_SUCCESS = 'diabloII/GET_CHARACTERS_SUCCESS';
// const GET_CHARACTERS_FAIL = 'diabloII/GET_CHARACTERS_FAIL';
// const GET_SURVIVAL_KITS_START = 'diabloII/GET_SURVIVAL_KITS_START';
// export const GET_SURVIVAL_KITS_SUCCESS = 'diabloII/GET_SURVIVAL_KITS_SUCCESS';
// const GET_SURVIVAL_KITS_FAIL = 'diabloII/GET_SURVIVAL_KITS_FAIL';

// const GET_MOD_DETAIL_START = 'diabloII/GET_MOD_DETAIL_START';
// export const GET_MOD_DETAIL_SUCCESS = 'diabloII/GET_MOD_DETAIL_SUCCESS';
// const GET_MOD_DETAIL_FAIL = 'diabloII/GET_MOD_DETAIL_FAIL';
// const GET_TOOL_DETAIL_START = 'diabloII/GET_TOOL_DETAIL_START';
// export const GET_TOOL_DETAIL_SUCCESS = 'diabloII/GET_TOOL_DETAIL_SUCCESS';
// const GET_TOOL_DETAIL_FAIL = 'diabloII/GET_TOOL_DETAIL_FAIL';

// const ADD_MOD_START = 'diabloII/ADD_MOD_START';
// const ADD_MOD_SUCCESS = 'diabloII/ADD_MOD_SUCCESS';
// const ADD_MOD_FAIL = 'diabloII/ADD_MOD_FAIL';
// const ADD_CHARACTER_START = 'diabloII/ADD_CHARACTER_START';
// const ADD_CHARACTER_SUCCESS = 'diabloII/ADD_CHARACTER_SUCCESS';
// const ADD_CHARACTER_FAIL = 'diabloII/ADD_CHARACTER_FAIL';
// const ADD_TOOL_START = 'diabloII/ADD_TOOL_START';
// const ADD_TOOL_SUCCESS = 'diabloII/ADD_TOOL_SUCCESS';
// const ADD_TOOL_FAIL = 'diabloII/ADD_TOOL_FAIL';
// const ADD_SURVIVAL_KIT_START = 'diabloII/ADD_SURVIVAL_KIT_START';
// const ADD_SURVIVAL_KIT_SUCCESS = 'diabloII/ADD_SURVIVAL_KIT_SUCCESS';
// const ADD_SURVIVAL_KIT_FAIL = 'diabloII/ADD_SURVIVAL_KIT_FAIL';

// const EDIT_MOD_START = 'diabloII/EDIT_MOD_START';
// const EDIT_MOD_SUCCESS = 'diabloII/EDIT_MOD_SUCCESS';
// const EDIT_MOD_FAIL = 'diabloII/EDIT_MOD_FAIL';
// const EDIT_TOOL_START = 'diabloII/EDIT_TOOL_START';
// const EDIT_TOOL_SUCCESS = 'diabloII/EDIT_TOOL_SUCCESS';
// const EDIT_TOOL_FAIL = 'diabloII/EDIT_TOOL_FAIL';
// const EDIT_CHARACTER_START = 'diabloII/EDIT_CHARACTER_START';
// const EDIT_CHARACTER_FAIL = 'diabloII/EDIT_CHARACTER_FAIL';
// const EDIT_CHARACTER_SUCCESS = 'diabloII/EDIT_CHARACTER_SUCCESS';
// const EDIT_SURVIVAL_KIT_START = 'diabloII/EDIT_SURVIVAL_KIT_START';
// const EDIT_SURVIVAL_KIT_SUCCESS = 'diabloII/EDIT_SURVIVAL_KIT_SUCCESS';
// const EDIT_SURVIVAL_KIT_FAIL = 'diabloII/EDIT_SURVIVAL_KIT_FAIL';

// const DELETE_MOD_START = 'diabloII/DELETE_MOD_START';
// const DELETE_MOD_SUCCESS = 'diabloII/DELETE_MOD_SUCCESS';
// const DELETE_MOD_FAIL = 'diabloII/DELETE_MOD_FAIL';
// const DELETE_CHARACTER_START = 'diabloII/DELETE_CHARACTER_START';
// const DELETE_CHARACTER_SUCCESS = 'diabloII/DELETE_CHARACTER_SUCCESS';
// const DELETE_CHARACTER_FAIL = 'diabloII/DELETE_CHARACTER_FAIL';
// const DELETE_TOOL_START = 'diabloII/DELETE_TOOL_START';
// const DELETE_TOOL_SUCCESS = 'diabloII/DELETE_TOOL_SUCCESS';
// const DELETE_TOOL_FAIL = 'diabloII/DELETE_TOOL_FAIL';
// const DELETE_SURVIVAL_KIT_START = 'diabloII/DELETE_SURVIVAL_KIT_START';
// const DELETE_SURVIVAL_KIT_SUCCESS = 'diabloII/DELETE_SURVIVAL_KIT_SUCCESS';
// const DELETE_SURVIVAL_KIT_FAIL = 'diabloII/DELETE_SURVIVAL_KIT_FAIL';

// const GET_EXTRA_DATA_START = 'diabloII/GET_EXTRA_DATA_START';
// const GET_EXTRA_DATA_SUCCESS = 'diabloII/GET_EXTRA_DATA_SUCCESS';
// const GET_EXTRA_DATA_FAIL = 'diabloII/GET_EXTRA_DATA_FAIL';
// const EXTRA_SKILL_START = 'diabloII/EXTRA_SKILL_START';
// const EXTRA_SKILL_SUCCESS = 'diabloII/EXTRA_SKILL_SUCCESS';
// const EXTRA_SKILL_FAIL = 'diabloII/EXTRA_SKILL_FAIL';
// const EXTRA_LEVEL_START = 'diabloII/EXTRA_LEVEL_START';
// const EXTRA_LEVEL_SUCCESS = 'diabloII/EXTRA_LEVEL_SUCCESS';
// const EXTRA_LEVEL_FAIL = 'diabloII/EXTRA_LEVEL_FAIL';
// const EXTRA_GOLD_START = 'diabloII/EXTRA_GOLD_START';
// const EXTRA_GOLD_SUCCESS = 'diabloII/EXTRA_GOLD_SUCCESS';
// const EXTRA_GOLD_FAIL = 'diabloII/EXTRA_GOLD_FAIL';
// const EDIT_EXTRA_DATA_START = 'diabloII/EDIT_EXTRA_DATA_START';
// const EDIT_EXTRA_DATA_SUCCESS = 'diabloII/EDIT_EXTRA_DATA_SUCCESS';
// const EDIT_EXTRA_DATA_FAIL = 'diabloII/EDIT_EXTRA_DATA_FAIL';

// export const getExtraData = actionCreator(
//   GET_EXTRA_DATA_START,
//   GET_EXTRA_DATA_SUCCESS,
//   GET_EXTRA_DATA_FAIL,
//   diabloII.getExtraData
// );
// export const editExtraData = body =>
//   actionCreator(EDIT_EXTRA_DATA_START, EDIT_EXTRA_DATA_SUCCESS, EDIT_EXTRA_DATA_FAIL, diabloII.editExtraData, body)();
// export const extraLevel = level =>
//   actionCreator(EXTRA_LEVEL_START, EXTRA_LEVEL_SUCCESS, EXTRA_LEVEL_FAIL, diabloII.extraLevel, level)();
// export const extraSkill = (amount, type) =>
//   actionCreator(EXTRA_SKILL_START, EXTRA_SKILL_SUCCESS, EXTRA_SKILL_FAIL, diabloII.extraSkill, amount, type)();
// export const extraGold = (amount, type) =>
//   actionCreator(EXTRA_GOLD_START, EXTRA_GOLD_SUCCESS, EXTRA_GOLD_FAIL, diabloII.extraGold, amount, type)();

// export const changeActiveChannel = channel => ({ type: CHANGE_ACTIVE_CHANNEL, channel });
// export const setFocusCharacter = character => ({ type: SET_FOCUS_CHARACTER, character });
// export const setFocusSurvivalKit = survivalKit => ({ type: SET_FOCUS_SURVIVAL_KIT, survivalKit });

// export const addMod = body => actionCreator(ADD_MOD_START, ADD_MOD_SUCCESS, ADD_MOD_FAIL, diabloII.addMod, body)();
// export const addTool = body => actionCreator(ADD_TOOL_START, ADD_TOOL_SUCCESS, ADD_TOOL_FAIL, diabloII.addTool, body)();
// export const addCharacter = body =>
//   actionCreator(ADD_CHARACTER_START, ADD_CHARACTER_SUCCESS, ADD_CHARACTER_FAIL, diabloII.addCharacter, body)();
// export const addSurvivalKit = body =>
//   actionCreator(
//     ADD_SURVIVAL_KIT_START,
//     ADD_SURVIVAL_KIT_SUCCESS,
//     ADD_SURVIVAL_KIT_FAIL,
//     diabloII.addSurvivalKit,
//     body
//   )();

// export const editMod = body => actionCreator(EDIT_MOD_START, EDIT_MOD_SUCCESS, EDIT_MOD_FAIL, diabloII.editMod, body)();
// export const editTool = body =>
//   actionCreator(EDIT_TOOL_START, EDIT_TOOL_SUCCESS, EDIT_TOOL_FAIL, diabloII.editTool, body)();
// export const editCharacter = body =>
//   actionCreator(EDIT_CHARACTER_START, EDIT_CHARACTER_SUCCESS, EDIT_CHARACTER_FAIL, diabloII.editCharacter, body)();
// export const editSurvivalKit = body =>
//   actionCreator(
//     EDIT_SURVIVAL_KIT_START,
//     EDIT_SURVIVAL_KIT_SUCCESS,
//     EDIT_SURVIVAL_KIT_FAIL,
//     diabloII.editSurvivalKit,
//     body
//   )();

// export const deleteMod = id =>
//   actionCreator(DELETE_MOD_START, DELETE_MOD_SUCCESS, DELETE_MOD_FAIL, diabloII.deleteMod, id)();
// export const deleteTool = id =>
//   actionCreator(DELETE_TOOL_START, DELETE_TOOL_SUCCESS, DELETE_TOOL_FAIL, diabloII.deleteTool, id)();
// export const deleteCharacter = id =>
//   actionCreator(
//     DELETE_CHARACTER_START,
//     DELETE_CHARACTER_SUCCESS,
//     DELETE_CHARACTER_FAIL,
//     diabloII.deleteCharacter,
//     id
//   )();
// export const deleteSurvivalKit = id =>
//   actionCreator(
//     DELETE_SURVIVAL_KIT_START,
//     DELETE_SURVIVAL_KIT_SUCCESS,
//     DELETE_SURVIVAL_KIT_FAIL,
//     diabloII.deleteSurvivalKit,
//     id
//   )();

// export const getModDetail = id =>
//   actionCreator(GET_MOD_DETAIL_START, GET_MOD_DETAIL_SUCCESS, GET_MOD_DETAIL_FAIL, diabloII.getModDetail, id)();
// export const getToolDetail = id =>
//   actionCreator(GET_TOOL_DETAIL_START, GET_TOOL_DETAIL_SUCCESS, GET_TOOL_DETAIL_FAIL, diabloII.getToolDetail, id)();

// export const getMods = actionCreator(GET_MODS_START, GET_MODS_SUCCESS, GET_MODS_FAIL, diabloII.getMods);
// export const getTools = actionCreator(GET_TOOLS_START, GET_TOOLS_SUCCESS, GET_TOOLS_FAIL, diabloII.getTools);
// export const getCharacters = actionCreator(
//   GET_CHARACTERS_START,
//   GET_CHARACTERS_SUCCESS,
//   GET_CHARACTERS_FAIL,
//   diabloII.getCharacters
// );
// export const getSurvivalKits = actionCreator(
//   GET_SURVIVAL_KITS_START,
//   GET_SURVIVAL_KITS_SUCCESS,
//   GET_SURVIVAL_KITS_FAIL,
//   diabloII.getSurvivalKits
// );

// export default (
//   state = {
//     versions: ['1.08', '1.09', '1.10', '1.11', '1.12', '1.13', '1.14'],
//     channels: ['Mods', 'Characters', 'Survival Kits', 'Tools', 'Extra'],
//     activeChannel: 'Mods',
//     mods: null,
//     tools: null,
//     survivalKits: null,
//     characters: null,
//     focusMod: {},
//     focusTool: {},
//     focusSurvivalKit: {},
//     focusCharacter: {},
//     extraData: null
//   },
//   action
// ) => {
//   switch (action.type) {
//     case CHANGE_ACTIVE_CHANNEL:
//       return { ...state, activeChannel: action.channel };
//     case SET_FOCUS_CHARACTER:
//       return { ...state, focusCharacter: action.character };
//     case SET_FOCUS_SURVIVAL_KIT:
//       return { ...state, focusSurvivalKit: action.survivalKit };
//     case GET_MODS_SUCCESS:
//       return { ...state, mods: action.data };
//     case GET_MOD_DETAIL_SUCCESS:
//       return { ...state, focusMod: action.data };
//     case GET_TOOLS_SUCCESS:
//       return { ...state, tools: action.data };
//     case GET_TOOL_DETAIL_SUCCESS:
//       return { ...state, focusTool: action.data };
//     case GET_CHARACTERS_SUCCESS:
//       return { ...state, characters: action.data };
//     case GET_SURVIVAL_KITS_SUCCESS:
//       return { ...state, survivalKits: action.data };
//     case ADD_MOD_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.mods.push(action.data);
//       return { ...state, mods: state.mods.slice(0) };
//     case ADD_TOOL_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.tools.push(action.data);
//       return { ...state, tools: state.tools.slice(0), focusTool: action.data };
//     case ADD_CHARACTER_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.characters.push(action.data);
//       return { ...state, characters: state.characters.slice(0), focusCharacter: action.data };
//     case ADD_SURVIVAL_KIT_SUCCESS:
//       toast.success(`Added ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.survivalKits.push(action.data);
//       return { ...state, survivalKits: state.survivalKits.slice(0), focusSurvivalKit: action.data };
//     case EDIT_MOD_SUCCESS:
//       toast.success(`Edited ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.mods = state.mods.map(mod => {
//         if (mod._id == action.data._id) {
//           return action.data;
//         }
//         return mod;
//       });
//       return { ...state, mods: state.mods.slice(0), focusMod: action.data };
//     case EDIT_TOOL_SUCCESS:
//       toast.success(`Edited ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.tools = state.tools.map(tool => {
//         if (tool._id == action.data._id) {
//           return action.data;
//         }
//         return tool;
//       });
//       return { ...state, tools: state.tools.slice(0), focusTool: action.data };
//     case EDIT_CHARACTER_SUCCESS:
//       toast.success(`Edited ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.characters = state.characters.map(character => {
//         if (character._id == action.data._id) {
//           return action.data;
//         }
//         return character;
//       });
//       return { ...state, characters: state.characters.slice(0), focusCharacter: action.data };
//     case EDIT_SURVIVAL_KIT_SUCCESS:
//       toast.success(`Edited ${action.data.Name}`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       state.survivalKits = state.survivalKits.map(kit => {
//         if (kit._id == action.data._id) {
//           return action.data;
//         }
//         return kit;
//       });
//       return { ...state, survivalKits: state.survivalKits.slice(0), focusSurvivalKit: action.data };
//     case DELETE_CHARACTER_SUCCESS:
//       state.characters = state.characters.filter(character => character._id != action.data._id);
//       return { ...state, characters: state.characters.slice(0), focusCharacter: state.characters[0] || {} };
//     case DELETE_MOD_SUCCESS:
//       state.mods = state.mods.filter(mod => mod._id != action.data._id);
//       return { ...state, mods: state.mods.slice(0), focusMod: state.mods[0] || {} };
//     case DELETE_SURVIVAL_KIT_SUCCESS:
//       state.survivalKits = state.survivalKits.filter(kit => kit._id != action.data._id);
//       return { ...state, survivalKits: state.survivalKits.slice(0), focusSurvivalKit: state.survivalKits[0] || {} };
//     case DELETE_TOOL_SUCCESS:
//       state.tools = state.tools.filter(tool => tool._id != action.data._id);
//       return { ...state, tools: state.tools.slice(0), focusTool: state.tools[0] || {} };
//     case EDIT_EXTRA_DATA_SUCCESS:
//       toast.success(`Modify Extra Data Success`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return { ...state, extraData: { ...state.extraData, ...action.data } };
//     case GET_EXTRA_DATA_SUCCESS:
//       return { ...state, extraData: action.data };
//     case EXTRA_GOLD_SUCCESS:
//       toast.success(`You have ${action.data.SavedGold} Gold`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return { ...state, extraData: { ...state.extraData, SavedGold: action.data.SavedGold } };
//     case EXTRA_LEVEL_SUCCESS:
//       toast.success(`Level Increased`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return {
//         ...state,
//         extraData: {
//           ...state.extraData,
//           NextSkillPoints: state.extraData.NextSkillPoints + action.data.SkillPoints,
//           NextLevelUpPoints: state.extraData.NextLevelUpPoints + action.data.LevelUpPoints
//         }
//       };
//     case EXTRA_SKILL_SUCCESS:
//       toast.success(`Skill Points Increased`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       action.data.type == 'add'
//         ? (state.extraData.NextSkillPoints += parseInt(action.data.amount))
//         : (state.extraData.NextSkillPoints -= parseInt(action.data.amount));
//       return { ...state, extraData: { ...state.extraData } };

//     case GET_MODS_FAIL:
//     case GET_MOD_DETAIL_FAIL:
//     case GET_TOOLS_FAIL:
//     case GET_CHARACTERS_FAIL:
//     case GET_SURVIVAL_KITS_FAIL:
//     case ADD_MOD_FAIL:
//     case ADD_TOOL_FAIL:
//     case ADD_CHARACTER_FAIL:
//     case ADD_SURVIVAL_KIT_FAIL:
//     case EDIT_MOD_FAIL:
//     case EDIT_CHARACTER_FAIL:
//     case EDIT_TOOL_FAIL:
//     case EDIT_SURVIVAL_KIT_FAIL:
//     case DELETE_MOD_FAIL:
//     case DELETE_TOOL_FAIL:
//     case DELETE_SURVIVAL_KIT_FAIL:
//     case DELETE_CHARACTER_FAIL:
//     case GET_EXTRA_DATA_FAIL:
//     case EXTRA_GOLD_FAIL:
//     case EXTRA_SKILL_FAIL:
//     case EXTRA_LEVEL_FAIL:
//     case EDIT_EXTRA_DATA_FAIL:
//       toast.error(`${action.error}`, {
//         position: toast.POSITION.TOP_LEFT,
//         className: 'toast-error'
//       });
//       return state;
//     default:
//       return state;
//   }
// };
