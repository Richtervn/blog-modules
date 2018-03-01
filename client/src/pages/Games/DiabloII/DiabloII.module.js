import { actionCreator } from 'helpers';
import services from './DiabloII.services';
import { toastError, toastSuccess, toastStrong } from 'common/Toast';

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

const GET_CHARACTERS = 'diabloII/GET_CHARACTERS';
const ADD_CHARACTER = 'diabloII/ADD_CHARACTER';
const EDIT_CHARACTER = 'diabloII/EDIT_CHARACTER';
const DELETE_CHARACTER = 'diabloII/DELETE_CHARACTER';
const SEARCH_CHARACTERS = 'diabloII/SEARCH_CHARACTERS';
const SORT_CHARACTERS = 'diabloII/SORT_CHARACTERS';

const GET_SURVIVAL_KITS = 'diabloII/GET_SURVIVAL_KITS';
const ADD_SURVIVAL_KIT = 'diabloII/ADD_SURVIVAL_KIT';
const EDIT_SURVIVAL_KIT = 'diabloII/EDIT_SURVIVAL_KIT';
const DELETE_SURVIVAL_KIT = 'diabloII/DELETE_SURVIVAL_KIT';
const SEARCH_SURVIVAL_KITS = 'diabloII/SEARCH_SURVIVAL_KITS';
const SORT_SURVIVAL_KITS = 'diabloII/SORT_SURVIVAL_KITS';

const GET_EXTRA_DATA = 'diabloII/GET_EXTRA_DATA';
const EXTRA_SKILL = 'diabloII/EXTRA_SKILL';
const EXTRA_LEVEL = 'diabloII/EXTRA_LEVEL';
const EXTRA_GOLD = 'diabloII/EXTRA_GOLD';
const EDIT_EXTRA_DATA = 'diabloII/EDIT_EXTRA_DATA_START';

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

export const getCharacters = actionCreator(GET_CHARACTERS, services.getCharacters);
export const addCharacter = formBody => actionCreator(ADD_CHARACTER, services.addCharacter, formBody)();
export const editCharacter = formBody => actionCreator(EDIT_CHARACTER, services.editCharacter, formBody)();
export const deleteCharacter = id => actionCreator(DELETE_CHARACTER, services.deleteCharacter, id)();
export const searchCharacters = query => actionCreator(SEARCH_CHARACTERS, services.searchCharacters, query)();
export const sortCharacters = (sortKey, sortOption) => ({ type: SORT_CHARACTERS, sortKey, sortOption });

export const getSurvivalKits = actionCreator(GET_SURVIVAL_KITS, services.getSurvivalKits);
export const addSurvivalKit = formBody => actionCreator(ADD_SURVIVAL_KIT, services.addSurvivalKit, formBody)();
export const editSurvivalKit = formBody => actionCreator(EDIT_SURVIVAL_KIT, services.editSurvivalKit, formBody)();
export const deleteSurvivalKit = id => actionCreator(DELETE_SURVIVAL_KIT, services.deleteSurvivalKit, id)();
export const searchSurvivalKits = query => actionCreator(SEARCH_SURVIVAL_KITS, services.searchSurvivalKits, query)();
export const sortSurvivalKits = (sortKey, sortOption) => ({ type: SORT_SURVIVAL_KITS, sortKey, sortOption });

export const getExtraData = actionCreator(GET_EXTRA_DATA, services.getExtraData);
export const editExtraData = formBody => actionCreator(EDIT_EXTRA_DATA, services.editExtraData, formBody)();
export const extraLevel = level => actionCreator(EXTRA_LEVEL, services.extraLevel, level)();
export const extraSkill = (amount, type) => actionCreator(EXTRA_SKILL, services.extraSkill, amount, type)();
export const extraGold = (amount, type) => actionCreator(EXTRA_GOLD, services.extraGold, amount, type)();

const initialState = {
  activeTab: 'Mods',
  mods: null,
  tools: null,
  survivalKits: null,
  characters: null,
  sortModKey: '',
  sortModOption: '',
  sortToolKey: '',
  sortToolOption: '',
  sortCharacterKey: '',
  sortCharacterOption: '',
  sortSurvivalKitKey: '',
  sortSurvivalKitOption: '',
  modDetail: {},
  toolDetail: {},
  extraData: null
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
      toastStrong('Added', action.data.Name);
      return { ...state, mods: state.mods.slice(0) };
    case `${EDIT_MOD}_SUCCESS`:
      state.mods = state.mods.map(mod => {
        if (mod._id === action.data._id) {
          return action.data;
        }
        return mod;
      });
      toastStrong('Updated', action.data.Name);
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
      toastStrong('Added', action.data.Name);
      return { ...state, tools: state.tools.slice(0) };
    case `${EDIT_TOOL}_SUCCESS`:
      state.tools = state.tools.map(tool => {
        if (tool._id === action.data._id) {
          return action.data;
        }
        return tool;
      });
      toastStrong('Updated', action.data.Name);
      return { ...state, tools: state.tools.slice(0), toolDetail: { ...state.toolDetail, ...action.data } };
    case `${DELETE_TOOL}_SUCCESS`:
      state.tools = state.tools.filter(tool => tool._id !== action.data._id);
      return { ...state, tools: state.tools.slice(0) };
    case `${SEARCH_TOOLS}_SUCCESS`:
      return { ...state, tools: action.data };
    case SORT_TOOLS:
      return { ...state, sortToolKey: action.sortKey, sortToolOption: action.sortOption };

    case `${GET_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.data };
    case `${ADD_CHARACTER}_SUCCESS`:
      state.characters.push(action.data);
      toastStrong('Added', action.data.Name);
      return { ...state, characters: state.characters.slice(0) };
    case `${EDIT_CHARACTER}_SUCCESS`:
      state.characters = state.characters.map(character => {
        if (character._id === action.data._id) {
          return action.data;
        }
        return character;
      });
      toastStrong('Updated', action.data.Name);
      return { ...state, characters: state.characters.slice(0) };
    case `${DELETE_CHARACTER}_SUCCESS`:
      state.characters = state.characters.filter(character => character._id !== action.data._id);
      return { ...state, characters: state.characters.slice(0) };
    case `${SEARCH_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.data };
    case SORT_CHARACTERS:
      return { ...state, sortCharacterKey: action.sortKey, sortCharacterOption: action.sortOption };

    case `${GET_SURVIVAL_KITS}_SUCCESS`:
      return { ...state, survivalKits: action.data };
    case `${ADD_SURVIVAL_KIT}_SUCCESS`:
      state.survivalKits.push(action.data);
      toastStrong('Added', action.data.Name);
      return { ...state, survivalKits: state.survivalKits.slice(0) };
    case `${EDIT_SURVIVAL_KIT}_SUCCESS`:
      state.survivalKits = state.survivalKits.map(kit => {
        if (kit._id === action.data._id) {
          return action.data;
        }
        return kit;
      });
      toastStrong('Updated', action.data.Name);
      return { ...state, survivalKits: state.survivalKits.slice(0) };
    case `${DELETE_SURVIVAL_KIT}_SUCCESS`:
      state.survivalKits = state.survivalKits.filter(kit => kit._id !== action.data._id);
      return { ...state, survivalKits: state.survivalKits.slice(0) };
    case `${SEARCH_SURVIVAL_KITS}_SUCCESS`:
      return { ...state, survivalKits: action.data };
    case SORT_SURVIVAL_KITS:
      return { ...state, sortSurvivalKitKey: action.sortKey, sortSurvivalKitOption: action.sortOption };

    case `${GET_EXTRA_DATA}_SUCCESS`:
      return { ...state, extraData: action.data };
    case `${EDIT_EXTRA_DATA}_SUCCESS`:
      toastSuccess('Modify Extra Data Success');
      return { ...state, extraData: { ...state.extraData, ...action.data } };
    case `${EXTRA_GOLD}_SUCCESS`:
      toastSuccess(`You have ${action.data.SavedGold} Gold`);
      return { ...state, extraData: { ...state.extraData, SavedGold: action.data.SavedGold } };
    case `${EXTRA_LEVEL}_SUCCESS`:
      toastSuccess('Level Increased');
      return {
        ...state,
        extraData: {
          ...state.extraData,
          NextSkillPoints: state.extraData.NextSkillPoints + action.data.SkillPoints,
          NextLevelUpPoints: state.extraData.NextLevelUpPoints + action.data.LevelUpPoints
        }
      };
    case `${EXTRA_SKILL}_SUCCESS`:
      toastSuccess('Skill Points Increased');
      action.data.type == 'add'
        ? (state.extraData.NextSkillPoints += parseInt(action.data.amount))
        : (state.extraData.NextSkillPoints -= parseInt(action.data.amount));
      return { ...state, extraData: { ...state.extraData } };

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

    case `${GET_CHARACTERS}_FAIL`:
    case `${ADD_CHARACTER}_FAIL`:
    case `${EDIT_CHARACTER}_FAIL`:
    case `${DELETE_CHARACTER}_FAIL`:
    case `${SEARCH_CHARACTERS}_FAIL`:

    case `${GET_SURVIVAL_KITS}_FAIL`:
    case `${ADD_SURVIVAL_KIT}_FAIL`:
    case `${EDIT_SURVIVAL_KIT}_FAIL`:
    case `${DELETE_SURVIVAL_KIT}_FAIL`:
    case `${SEARCH_SURVIVAL_KITS}_FAIL`:

    case `${GET_EXTRA_DATA}_FAIL`:
    case `${EDIT_EXTRA_DATA}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};

// export const SET_FOCUS_CHARACTER = 'diabloII/SET_FOCUS_CHARACTER';
// export const SET_FOCUS_SURVIVAL_KIT = 'diabloII/SET_FOCUS_SURVIVAL_KIT';

// export const setFocusCharacter = character => ({ type: SET_FOCUS_CHARACTER, character });
// export const setFocusSurvivalKit = survivalKit => ({ type: SET_FOCUS_SURVIVAL_KIT, survivalKit });

// export default (

// ) => {
//   switch (action.type) {
//     case CHANGE_ACTIVE_CHANNEL:
//       return { ...state, activeChannel: action.channel };
//     case SET_FOCUS_CHARACTER:
//       return { ...state, focusCharacter: action.character };
//     case SET_FOCUS_SURVIVAL_KIT:
//       return { ...state, focusSurvivalKit: action.survivalKit };

//   }
// };
