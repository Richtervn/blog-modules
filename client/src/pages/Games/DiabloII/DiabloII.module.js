import { actionCreator, formatNumber } from 'helpers';
import services from './DiabloII.services';
import { toastSuccess, toastStrong } from 'common/Toast';

const SET_ACTIVE_TAB = 'diabloII/SET_ACTIVE_TAB';
const SET_FOCUS_CHARACTER = 'diabloII/SET_FOCUS_CHARACTER';
const SET_FOCUS_SURVIVAL_KIT = 'diabloII/SET_FOCUS_SURVIVAL_KIT';

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
export const setFocusCharacter = id => ({ type: SET_FOCUS_CHARACTER, id });
export const setFocusSurvivalKit = id => ({ type: SET_FOCUS_SURVIVAL_KIT, id });

export const getMods = () => actionCreator(GET_MODS, services.getMods)();
export const getModDetail = id => actionCreator(GET_MOD_DETAIL, services.getModDetail, { payload: { id } })();
export const addMod = formBody => actionCreator(ADD_MOD, services.addMod, { payload: { formBody } })();
export const editMod = formBody => actionCreator(EDIT_MOD, services.editMod, { payload: { formBody } })();
export const deleteMod = id => actionCreator(DELETE_MOD, services.deleteMod, { payload: { id } })();
export const searchMods = query => actionCreator(SEARCH_MODS, services.searchMods, { payload: { query } })();
export const sortMod = (sortKey, sortOption) => ({ type: SORT_MODS, sortKey, sortOption });

export const getTools = () => actionCreator(GET_TOOLS, services.getTools)();
export const getToolDetail = id => actionCreator(GET_TOOL_DETAIL, services.getToolDetail, { payload: { id } })();
export const addTool = formBody => actionCreator(ADD_TOOL, services.addTool, { payload: { formBody } })();
export const editTool = formBody => actionCreator(EDIT_TOOL, services.editTool, { payload: { formBody } })();
export const deleteTool = id => actionCreator(DELETE_TOOL, services.deleteTool, { payload: { id } })();
export const searchTools = query => actionCreator(SEARCH_TOOLS, services.searchTools, { payload: { query } })();
export const sortTool = (sortKey, sortOption) => ({ type: SORT_TOOLS, sortKey, sortOption });

export const getCharacters = () => actionCreator(GET_CHARACTERS, services.getCharacters)();
export const addCharacter = formBody =>
  actionCreator(ADD_CHARACTER, services.addCharacter, { payload: { formBody } })();
export const editCharacter = formBody =>
  actionCreator(EDIT_CHARACTER, services.editCharacter, { payload: { formBody } })();
export const deleteCharacter = id => actionCreator(DELETE_CHARACTER, services.deleteCharacter, { payload: { id } })();
export const searchCharacters = query =>
  actionCreator(SEARCH_CHARACTERS, services.searchCharacters, { payload: { query } })();
export const sortCharacters = (sortKey, sortOption) => ({ type: SORT_CHARACTERS, sortKey, sortOption });

export const getSurvivalKits = () => actionCreator(GET_SURVIVAL_KITS, services.getSurvivalKits)();
export const addSurvivalKit = formBody =>
  actionCreator(ADD_SURVIVAL_KIT, services.addSurvivalKit, { payload: { formBody } })();
export const editSurvivalKit = formBody =>
  actionCreator(EDIT_SURVIVAL_KIT, services.editSurvivalKit, { payload: { formBody } })();
export const deleteSurvivalKit = id =>
  actionCreator(DELETE_SURVIVAL_KIT, services.deleteSurvivalKit, { payload: { id } })();
export const searchSurvivalKits = query =>
  actionCreator(SEARCH_SURVIVAL_KITS, services.searchSurvivalKits, { payload: { query } })();
export const sortSurvivalKits = (sortKey, sortOption) => ({ type: SORT_SURVIVAL_KITS, sortKey, sortOption });

export const getExtraData = () => actionCreator(GET_EXTRA_DATA, services.getExtraData)();
export const editExtraData = formBody =>
  actionCreator(EDIT_EXTRA_DATA, services.editExtraData, { payload: { formBody } })();
export const extraLevel = level => actionCreator(EXTRA_LEVEL, services.extraLevel, { payload: { level } })();
export const extraSkill = (amount, type) =>
  actionCreator(EXTRA_SKILL, services.extraSkill, { payload: { amount, type } })();
export const extraGold = (amount, type) =>
  actionCreator(EXTRA_GOLD, services.extraGold, { payload: { amount, type } })();

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
  extraData: null,
  focusCharacter: null,
  focusSurvivalKit: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.id };
    case SET_FOCUS_SURVIVAL_KIT:
      return { ...state, focusSurvivalKit: action.id };

    case `${GET_MODS}_SUCCESS`:
      return { ...state, mods: action.payload };
    case `${GET_MOD_DETAIL}_SUCCESS`:
      return { ...state, modDetail: action.payload };
    case `${ADD_MOD}_SUCCESS`:
      state.mods.push(action.payload);
      toastStrong('Added', action.payload.Name);
      return { ...state, mods: state.mods.slice(0) };
    case `${EDIT_MOD}_SUCCESS`:
      state.mods = state.mods.map(mod => {
        if (mod._id === action.payload._id) {
          return action.payload;
        }
        return mod;
      });
      toastStrong('Updated', action.payload.Name);
      return { ...state, mods: state.mods.slice(0), modDetail: { ...state.modDetail, ...action.payload } };
    case `${DELETE_MOD}_SUCCESS`:
      state.mods = state.mods.filter(mod => mod._id !== action.payload._id);
      return { ...state, mods: state.mods.slice(0) };
    case `${SEARCH_MODS}_SUCCESS`:
      return { ...state, mods: action.payload };
    case SORT_MODS:
      return { ...state, sortModKey: action.sortKey, sortModOption: action.sortOption };

    case `${GET_TOOLS}_SUCCESS`:
      return { ...state, tools: action.payload };
    case `${GET_TOOL_DETAIL}_SUCCESS`:
      return { ...state, toolDetail: action.payload };
    case `${ADD_TOOL}_SUCCESS`:
      state.tools.push(action.payload);
      toastStrong('Added', action.payload.Name);
      return { ...state, tools: state.tools.slice(0) };
    case `${EDIT_TOOL}_SUCCESS`:
      state.tools = state.tools.map(tool => {
        if (tool._id === action.payload._id) {
          return action.payload;
        }
        return tool;
      });
      toastStrong('Updated', action.payload.Name);
      return { ...state, tools: state.tools.slice(0), toolDetail: { ...state.toolDetail, ...action.payload } };
    case `${DELETE_TOOL}_SUCCESS`:
      state.tools = state.tools.filter(tool => tool._id !== action.payload._id);
      return { ...state, tools: state.tools.slice(0) };
    case `${SEARCH_TOOLS}_SUCCESS`:
      return { ...state, tools: action.payload };
    case SORT_TOOLS:
      return { ...state, sortToolKey: action.sortKey, sortToolOption: action.sortOption };

    case `${GET_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.payload, focusCharacter: action.payload[0] ? action.payload[0]._id : '' };
    case `${ADD_CHARACTER}_SUCCESS`:
      state.characters.push(action.payload);
      toastStrong('Added', action.payload.Name);
      return { ...state, characters: state.characters.slice(0) };
    case `${EDIT_CHARACTER}_SUCCESS`:
      state.characters = state.characters.map(character => {
        if (character._id === action.payload._id) {
          return action.payload;
        }
        return character;
      });
      toastStrong('Updated', action.payload.Name);
      return { ...state, characters: state.characters.slice(0) };
    case `${DELETE_CHARACTER}_SUCCESS`:
      state.characters = state.characters.filter(character => character._id !== action.payload._id);
      return { ...state, characters: state.characters.slice(0) };
    case `${SEARCH_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.payload };
    case SORT_CHARACTERS:
      return { ...state, sortCharacterKey: action.sortKey, sortCharacterOption: action.sortOption };

    case `${GET_SURVIVAL_KITS}_SUCCESS`:
      return {
        ...state,
        survivalKits: action.payload,
        focusSurvivalKit: action.payload[0] ? action.payload[0]._id : ''
      };
    case `${ADD_SURVIVAL_KIT}_SUCCESS`:
      state.survivalKits.push(action.payload);
      toastStrong('Added', action.payload.Name);
      return { ...state, survivalKits: state.survivalKits.slice(0) };
    case `${EDIT_SURVIVAL_KIT}_SUCCESS`:
      state.survivalKits = state.survivalKits.map(kit => {
        if (kit._id === action.payload._id) {
          return action.payload;
        }
        return kit;
      });
      toastStrong('Updated', action.payload.Name);
      return { ...state, survivalKits: state.survivalKits.slice(0) };
    case `${DELETE_SURVIVAL_KIT}_SUCCESS`:
      state.survivalKits = state.survivalKits.filter(kit => kit._id !== action.payload._id);
      return { ...state, survivalKits: state.survivalKits.slice(0) };
    case `${SEARCH_SURVIVAL_KITS}_SUCCESS`:
      return { ...state, survivalKits: action.payload };
    case SORT_SURVIVAL_KITS:
      return { ...state, sortSurvivalKitKey: action.sortKey, sortSurvivalKitOption: action.sortOption };

    case `${GET_EXTRA_DATA}_SUCCESS`:
      return { ...state, extraData: action.payload };
    case `${EDIT_EXTRA_DATA}_SUCCESS`:
      toastSuccess('Modify Extra Data Success');
      return { ...state, extraData: { ...state.extraData, ...action.payload } };
    case `${EXTRA_GOLD}_SUCCESS`:
      toastSuccess(`You have ${formatNumber(action.payload.SavedGold)} Gold`);
      return { ...state, extraData: { ...state.extraData, SavedGold: action.payload.SavedGold } };
    case `${EXTRA_LEVEL}_SUCCESS`:
      toastSuccess('Level Increased');
      return {
        ...state,
        extraData: {
          ...state.extraData,
          NextSkillPoints: state.extraData.NextSkillPoints + action.payload.SkillPoints,
          NextLevelUpPoints: state.extraData.NextLevelUpPoints + action.payload.LevelUpPoints
        }
      };
    case `${EXTRA_SKILL}_SUCCESS`:
      toastSuccess('Skill Points Increased');
      action.payload.type === 'add'
        ? (state.extraData.NextSkillPoints += parseInt(action.payload.amount, 10))
        : (state.extraData.NextSkillPoints -= parseInt(action.payload.amount, 10));
      return { ...state, extraData: { ...state.extraData } };

    default:
      return state;
  }
};
