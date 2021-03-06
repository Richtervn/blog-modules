import { actionCreator } from 'helpers';
import services from './MuOnline.services';
import { toastStrong } from 'common/Toast';

const SET_ACTIVE_TAB = 'muonline/SET_ACTIVE_TAB';
const SET_FOCUS_VERSION = 'muonline/SET_FOCUS_VERSION';
const SET_FOCUS_CHARACTER = 'muonline/SET_FOCUS_CHARACTER';
const SET_FOCUS_GUIDE = 'muonline/SET_FOCUS_GUIDE';

const GET_VERSIONS = 'muonline/GET_VERSIONS';
const GET_VERSION_DETAIL = 'muonline/GET_VERSION_DETAIL';
const ADD_VERSION = 'muonline/ADD_VERSION';
const EDIT_VERSION = 'muonline/EDIT_VERSION';
const DELETE_VERSION = 'muonline/DELETE_VERSION';

const GET_TOOLS = 'muonline/GET_TOOLS';
const GET_TOOL_DETAIL = 'muonline/GET_TOOL_DETAIL';
const ADD_TOOL = 'muonline/ADD_TOOL';
const EDIT_TOOL = 'muonline/EDIT_TOOL';
const DELETE_TOOL = 'muonline/DELETE_TOOL';
const SORT_TOOL = 'muonline/SORT_TOOL';
const SEARCH_TOOL = 'muonline/SEARCH_TOOL';

const GET_GUIDES = 'muonline/GET_GUIDES';
const GET_GUIDE_DETAIL = 'muonline/GET_GUIDE_DETAIL';
const ADD_GUIDE = 'muonline/ADD_GUIDE';
const EDIT_GUIDE = 'muonline/EDIT_GUIDE';
const DELETE_GUIDE = 'muonline/DELETE_GUIDE';

const GET_CHARACTERS = 'muonline/GET_CHARACTERS';
const ADD_CHARACTER = 'muonline/ADD_CHARACTER';
const EDIT_CHARACTER = 'muonline/EDIT_CHARACTER';
const DELETE_CHARACTER = 'muonline/DELETE_CHARACTER';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });
export const setFocusVersion = id => ({ type: SET_FOCUS_VERSION, id });
export const setFocusCharacter = id => ({ type: SET_FOCUS_CHARACTER, id });
export const setFocusGuide = id => ({ type: SET_FOCUS_GUIDE, id });

export const getVersions = () => actionCreator(GET_VERSIONS, services.getVersions)();
export const getVersionDetail = id =>
  actionCreator(GET_VERSION_DETAIL, services.getVersionDetail, { payload: { id } })();
export const addVersion = formBody => actionCreator(ADD_VERSION, services.addVersion, { payload: { formBody } })();
export const editVersion = formBody => actionCreator(EDIT_VERSION, services.editVersion, { payload: { formBody } })();
export const deleteVersion = id => actionCreator(DELETE_VERSION, services.deleteVersion, { payload: { id } })();

export const getTools = () => actionCreator(GET_TOOLS, services.getTools)();
export const getToolDetail = id => actionCreator(GET_TOOL_DETAIL, services.getToolDetail, { payload: { id } })();
export const addTool = formBody => actionCreator(ADD_TOOL, services.addTool, { payload: { formBody } })();
export const editTool = formBody => actionCreator(EDIT_TOOL, services.editTool, { payload: { formBody } })();
export const deleteTool = id => actionCreator(DELETE_TOOL, services.deleteTool, { payload: { id } })();
export const searchTool = query => actionCreator(SEARCH_TOOL, services.searchTool, { payload: { query } })();
export const sortTool = (sortKey, sortOption) => ({ type: SORT_TOOL, sortKey, sortOption });

export const getGuides = () => actionCreator(GET_GUIDES, services.getGuides)();
export const getGuideDetail = id => actionCreator(GET_GUIDE_DETAIL, services.getGuideDetail, { payload: { id } })();
export const addGuide = formBody => actionCreator(ADD_GUIDE, services.addGuide, { payload: { formBody } })();
export const editGuide = formBody => actionCreator(EDIT_GUIDE, services.editGuide, { payload: { formBody } })();
export const deleteGuide = id => actionCreator(DELETE_GUIDE, services.deleteGuide, { payload: { id } })();

export const getCharacters = () => actionCreator(GET_CHARACTERS, services.getCharacters)();
export const addCharacter = formBody =>
  actionCreator(ADD_CHARACTER, services.addCharacter, { payload: { formBody } })();
export const editCharacter = formBody =>
  actionCreator(EDIT_CHARACTER, services.editCharacter, { payload: { formBody } })();
export const deleteCharacter = id => actionCreator(DELETE_CHARACTER, services.deleteCharacter, { payload: { id } })();

const initialState = {
  activeTab: null,
  versions: null,
  focusVersion: null,
  versionDetail: {},
  tools: null,
  toolDetail: {},
  characters: null,
  focusCharacter: null,
  guides: null,
  focusGuide: null,
  guideDetail: {},
  sortToolKey: null,
  sortToolOption: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case SET_FOCUS_VERSION:
      return { ...state, focusVersion: action.id };
    case SET_FOCUS_GUIDE:
      return { ...state, focusGuide: action.id };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.id };

    case `${GET_VERSIONS}_SUCCESS`:
      return { ...state, versions: action.payload };
    case `${GET_VERSION_DETAIL}_SUCCESS`:
      return { ...state, versionDetail: action.payload };
    case `${ADD_VERSION}_SUCCESS`:
      state.versions.push(action.payload);
      toastStrong(action.payload.Name, 'Added');
      return { ...state, versions: state.versions.slice(0) };
    case `${EDIT_VERSION}_SUCCESS`:
      state.versions = state.versions.map(version => {
        if (version._id === action.payload._id) {
          return { ...version, ...action.payload };
        }
        return version;
      });
      toastStrong(action.payload.Name, 'Updated');
      return { ...state, versions: state.versions.slice(0) };
    case `${DELETE_VERSION}_SUCCESS`:
      state.versions = state.versions.filter(version => version._id !== action.payload_id);
      return { ...state, versions: state.versions.slice(0) };

    case `${GET_TOOLS}_SUCCESS`:
      return { ...state, tools: action.payload };
    case `${GET_TOOL_DETAIL}_SUCCESS`:
      return { ...state, toolDetail: action.payload };
    case `${ADD_TOOL}_SUCCESS`:
      state.tools.push(action.payload);
      toastStrong(action.payload.Name, 'Added');
      return { ...state, tools: state.tools.slice(0) };
    case `${EDIT_TOOL}_SUCCESS`:
      state.tools = state.tools.map(tool => {
        if (tool._id === action.payload._id) {
          return { ...tool, ...action.payload };
        }
        return tool;
      });
      toastStrong(action.payload.Name, 'Updated');
      return { ...state, tools: state.tools.slice(0), toolDetail: action.payload };
    case `${DELETE_TOOL}_SUCCESS`:
      state.tools = state.tools.filter(tool => tool._id !== action.payload._id);
      return { ...state, tools: state.tools.slice(0) };
    case `${SEARCH_TOOL}_SUCCESS`:
      return { ...state, tools: action.payload };
    case SORT_TOOL:
      return { ...state, sortToolKey: action.sortKey, sortToolOption: action.sortOption };

    case `${GET_CHARACTERS}_SUCCESS`:
      return { ...state, characters: action.payload };
    case `${ADD_CHARACTER}_SUCCESS`:
      state.characters.push(action.payload);
      toastStrong(action.payload.Name, 'Added');
      return { ...state, characters: state.characters.slice(0) };
    case `${EDIT_CHARACTER}_SUCCESS`:
      state.characters = state.characters.map(character => {
        if (character._id === action.payload._id) {
          return { ...character, ...action.payload };
        }
        return character;
      });
      toastStrong(action.payload.Name, 'Updated');
      return { ...state, characters: state.characters.slice(0) };
    case `${DELETE_CHARACTER}_SUCCESS`:
      state.characters = state.characters.filter(character => character._id !== action.payload._id);
      return { ...state, characters: state.characters.slice(0) };

    case `${GET_GUIDES}_SUCCESS`:
      return { ...state, guides: action.payload };
    case `${GET_GUIDE_DETAIL}_SUCCESS`:
      return { ...state, guideDetail: action.payload };
    case `${ADD_GUIDE}_SUCCESS`:
      state.guides.push(action.payload);
      toastStrong(action.payload.Name, 'Added');
      return { ...state, guides: state.guides.slice(0) };
    case `${EDIT_GUIDE}_SUCCESS`:
      state.guides = state.guides.map(guide => {
        if (guide._id === action.payload._id) {
          return { ...guide, ...action.payload };
        }
        return guide;
      });
      toastStrong(action.payload.Name, 'Updated');
      return { ...state, guides: state.guides.slice(0) };
    case `${DELETE_GUIDE}_SUCCESS`:
      state.guides = state.guides.filter(guide => guide._id !== action.payload._id);
      return { ...state, guides: state.guides.slice(0) };

    default:
      return state;
  }
};
