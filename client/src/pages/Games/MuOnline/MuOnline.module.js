import { actionCreator } from 'helpers';
import services from './MuOnline.services';
import { toastError } from 'common/Toast';

const SET_ACTIVE_TAB = 'muonline/SET_ACTIVE_TAB';

const GET_VERSIONS = 'muonline/GET_VERSIONS';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });

export const getVersions = actionCreator(GET_VERSIONS, services.getVersions);

const initialState = {
  activeTab: null,
  versions: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    case `${GET_VERSIONS}_SUCCESS`:
      return { ...state, versions: action.data };

    case `${GET_VERSIONS}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};

// import { toast } from 'react-toastify';

// const GET_TOOLS_START = 'muonline/GET_TOOLS_START';
// const GET_TOOLS_SUCCESS = 'muonline/GET_TOOLS_SUCCESS';
// const GET_TOOLS_FAIL = 'muonline/GET_TOOLS_FAIL';
// const GET_VERSIONS_START = 'muonline/GET_VERSIONS_START';
// const GET_VERSIONS_SUCCESS = 'muonline/GET_VERSIONS_SUCCESS';
// const GET_VERSIONS_FAIL = 'muonline/GET_VERSIONS_FAIL';

// const GET_TOOL_DETAIL_START = 'muonline/GET_TOOL_DETAIL_START';
// export const GET_TOOL_DETAIL_SUCCESS = 'muonline/GET_TOOL_DETAIL_SUCCESS';
// const GET_TOOL_DETAIL_FAIL = 'muonline/GET_TOOL_DETAIL_FAIL';
// const GET_VERSION_DETAIL_START = 'muonline/GET_VERSION_DETAIL_START';
// export const GET_VERSION_DETAIL_SUCCESS = 'muonline/GET_VERSION_DETAIL_SUCCESS';
// const GET_VERSION_DETAIL_FAIL = 'muonline/GET_VERSION_DETAIL_FAIL';

// const SUBMIT_ADD_TOOL_START = 'muonline/SUBMIT_ADD_TOOL_START';
// export const SUBMIT_ADD_TOOL_SUCCESS = 'muonline/SUBMIT_ADD_TOOL_SUCCESS';
// const SUBMIT_ADD_TOOL_FAIL = 'muonline/SUBMIT_ADD_TOOL_FAIL';
// const SUBMIT_ADD_VERSION_START = 'muonline/SUBMIT_ADD_VERSION_START';
// export const SUBMIT_ADD_VERSION_SUCCESS = 'muonline/SUBMIT_ADD_VERSION_SUCCESS';
// const SUBMIT_ADD_VERSION_FAIL = 'muonline/SUBMIT_ADD_VERSION_FAIL';

// const SUBMIT_EDIT_TOOL_START = 'muonline/SUBMIT_EDIT_TOOL_START';
// export const SUBMIT_EDIT_TOOL_SUCCESS = 'muonline/SUBMIT_EDIT_TOOL_SUCCESS';
// const SUBMIT_EDIT_TOOL_FAIL = 'muonline/SUBMIT_EDIT_TOOL_FAIL';
// const SUBMIT_EDIT_VERSION_START = 'muonline/SUBMIT_EDIT_VERSION_START';
// export const SUBMIT_EDIT_VERSION_SUCCESS = 'muonline/SUBMIT_EDIT_VERSION_SUCCESS';
// const SUBMIT_EDIT_VERSION_FAIL = 'muonline/SUBMIT_EDIT_VERSION_FAIL';

// const DELETE_TOOL_START = 'muonline/DELETE_TOOL_START';
// const DELETE_TOOL_SUCCESS = 'muonline/DELETE_TOOL_SUCCESS';
// const DELETE_TOOL_FAIL = 'muonline/DELETE_TOOL_FAIL';
// const DELETE_VERSION_START = 'muonline/DELETE_VERSION_START';
// const DELETE_VERSION_SUCCESS = 'muonline/DELETE_VERSION_SUCCESS';
// const DELETE_VERSION_FAIL = 'muonline/DELETE_VERSION_FAIL';

// export const changeActiveView = view => ({ type: CHANGE_ACTIVE_VIEW, view });

// export const getTools = actionCreator(
//   GET_TOOLS_START,
//   GET_TOOLS_SUCCESS,
//   GET_TOOLS_FAIL,
//   muonline.getTools
// );
// export const getVersions = actionCreator(
//   GET_VERSIONS_START,
//   GET_VERSIONS_SUCCESS,
//   GET_VERSIONS_FAIL,
//   muonline.getVersions
// );
// export const getToolDetail = id =>
//   actionCreator(
//     GET_TOOL_DETAIL_START,
//     GET_TOOL_DETAIL_SUCCESS,
//     GET_TOOL_DETAIL_FAIL,
//     muonline.getToolDetail,
//     id
//   )();
// export const getVersionDetail = id =>
//   actionCreator(
//     GET_VERSION_DETAIL_START,
//     GET_VERSION_DETAIL_SUCCESS,
//     GET_VERSION_DETAIL_FAIL,
//     muonline.getVersionDetail,
//     id
//   )();
// export const submitAddMuonlineTool = formBody =>
//   actionCreator(
//     SUBMIT_ADD_TOOL_START,
//     SUBMIT_ADD_TOOL_SUCCESS,
//     SUBMIT_ADD_TOOL_FAIL,
//     muonline.addTool,
//     formBody
//   )();
// export const submitAddMuonlineVersion = formBody =>
//   actionCreator(
//     SUBMIT_ADD_VERSION_START,
//     SUBMIT_ADD_VERSION_SUCCESS,
//     SUBMIT_ADD_VERSION_FAIL,
//     muonline.addVersion,
//     formBody
//   )();
// export const submitEditMuonlineTool = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_TOOL_START,
//     SUBMIT_EDIT_TOOL_SUCCESS,
//     SUBMIT_EDIT_TOOL_FAIL,
//     muonline.editTool,
//     formBody
//   )();
// export const submitEditMuonlineVersion = formBody =>
//   actionCreator(
//     SUBMIT_EDIT_VERSION_START,
//     SUBMIT_EDIT_VERSION_SUCCESS,
//     SUBMIT_EDIT_VERSION_FAIL,
//     muonline.editVersion,
//     formBody
//   )();
// export const deleteTool = id =>
//   actionCreator(
//     DELETE_TOOL_START,
//     DELETE_TOOL_SUCCESS,
//     DELETE_TOOL_FAIL,
//     muonline.deleteTool,
//     id
//   )();
// export const deleteVersion = id =>
//   actionCreator(
//     DELETE_VERSION_START,
//     DELETE_VERSION_SUCCESS,
//     DELETE_VERSION_FAIL,
//     muonline.deleteVersion,
//     id
//   )();

// export default (
//   state = {
//     versions: null,
//     tools: null,
//     focusVersion: null,
//     focusTool: null,
//     viewControl: {
//       activeView: 'Versions'
//     }
//   },
//   action
// ) => {
//   switch (action.type) {
//     case CHANGE_ACTIVE_VIEW:
//       return {
//         ...state,
//         viewControl: { ...state.viewControl, activeView: action.view }
//       };
//     case GET_TOOLS_SUCCESS:
//       return {
//         ...state,
//         tools: action.data
//       };
//     case GET_VERSIONS_SUCCESS:
//       return {
//         ...state,
//         versions: action.data
//       };
//     case GET_TOOL_DETAIL_SUCCESS:
//       return {
//         ...state,
//         focusTool: action.data
//       };
//     case GET_VERSION_DETAIL_SUCCESS:
//       return {
//         ...state,
//         focusVersion: action.data
//       };
//     case SUBMIT_ADD_TOOL_SUCCESS:
//       state.tools.push(action.data);
//       return {
//         ...state,
//         tools: state.tools.slice(0),
//         focusTool: action.data
//       };
//     case SUBMIT_ADD_VERSION_SUCCESS:
//       state.versions.push(action.data);
//       return {
//         ...state,
//         versions: state.versions.slice(0),
//         focusVersion: action.data
//       };
//     case SUBMIT_EDIT_TOOL_SUCCESS:
//       const tools = state.tools.map(tool => {
//         if (tool.id == action.data._id) {
//           return action.data;
//         }
//         return tool;
//       });
//       return { ...state, tools: tools.slice(0), focusTool: { ...action.data } };
//     case SUBMIT_EDIT_VERSION_SUCCESS:
//       const versions = state.versions.map(version => {
//         if (version._id == action.data._id) {
//           return action.data;
//         }
//         return version;
//       });
//       return {
//         ...state,
//         versions: versions.slice(0),
//         focusVersion: { ...action.data }
//       };
//     case DELETE_TOOL_SUCCESS:
//       return {
//         ...state,
//         tools: state.tools.filter(tool => tool._id != action.data._id).slice(0)
//       };
//     case DELETE_VERSION_SUCCESS:
//       return {
//         ...state,
//         versions: state.versions.filter(version => version._id != action.data._id).slice(0)
//       };

//     default:
//       return state;
//   }
// };
