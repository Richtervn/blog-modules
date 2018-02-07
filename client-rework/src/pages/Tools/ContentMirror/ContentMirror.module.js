// import { actionCreator } from 'helpers';
// import { toastError, toastSuccess } from 'common/Toast';

// import services from './ContentMirror.services';

const TOGGLE_SHARE_VIEW = 'contentMirror/TOGGLE_SHARE_VIEW';
const CHANGE_CODE_VALUE = 'contentMirror/CHANGE_CODE_VALUE';
const CHANGE_LANGUAGE = 'contentMirror/CHANGE_LANGUAGE';
const NEW_CODE = 'contentMirror/NEW_CODE';
const REFRESH_CODE = 'contentMirror/REFRESH_CODE';
const CHANGE_BACKGROUND = 'contentMirror/CHANGE_BACKGROUND';
const CHANGE_OPACITY = 'contentMirror/CHANGE_OPACITY';

export const toggleShareView = () => ({ type: TOGGLE_SHARE_VIEW });
export const changeLanguage = language => ({ type: CHANGE_LANGUAGE, language });
export const changeCode = value => ({ type: CHANGE_CODE_VALUE, value });
export const newCode = () => ({ type: NEW_CODE });
export const refreshCode = () => ({ type: REFRESH_CODE });
export const changeBackground = background => ({ type: CHANGE_BACKGROUND, background });
export const changeOpacity = opacity => ({ type: CHANGE_OPACITY, opacity });

const initialState = {
  isShareView: true,
  cssCode: '',
  htmlCode: '',
  cssSource: '',
  htmlSource: '',
  currentLanguage: 'HTML',
  background: 'default',
  opacity: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHARE_VIEW:
      return { ...state, isShareView: !state.isShareView };
    case CHANGE_LANGUAGE:
      return { ...state, currentLanguage: action.language };
    case CHANGE_CODE_VALUE: {
      const nextState = { ...state };
      if (state.currentLanguage === 'HTML') {
        nextState.htmlCode = action.value;
      }
      if (state.currentLanguage === 'CSS') {
        nextState.cssCode = action.value;
      }
      return nextState;
    }
    case NEW_CODE: {
      const nextState = { ...state };
      if (state.currentLanguage === 'HTML') {
        nextState.htmlCode = '';
      }
      if (state.currentLanguage === 'CSS') {
        nextState.cssCode = '';
      }
      return nextState;
    }
    case REFRESH_CODE: {
      const nextState = { ...state };
      if (state.currentLanguage === 'HTML') {
        nextState.htmlCode = state.htmlSource;
      }
      if (state.currentLanguage === 'CSS') {
        nextState.cssCode = state.cssSource;
      }
      return nextState;
    }
    case CHANGE_BACKGROUND:
      return { ...state, background: action.background };
    case CHANGE_OPACITY:
      return { ...state, opacity: action.opacity };
    default:
      return state;
  }
};

// const SAVE_CODE_START = 'contentMirror/SAVE_CODE_START';
// const SAVE_CODE_SUCCESS = 'contentMirror/SAVE_CODE_SUCCESS';
// const SAVE_CODE_FAIL = 'contentMirror/SAVE_CODE_FAIL';

// const GET_RECORDS_START = 'contentMirror/GET_RECORDS_START';
// const GET_RECORDS_SUCCESS = 'contentMirror/GET_RECORDS_SUCCESS';
// const GET_RECORDS_FAIL = 'contentMirror/GET_RECORDS_FAIL';

// const GET_RECORD_CONTENT_START = 'contentMirror/GET_RECORD_CONTENT_START';
// const GET_RECORD_CONTENT_SUCCESS = 'contentMirror/GET_RECORD_CONTENT_SUCCESS';
// const GET_RECORD_CONTENT_FAIL = 'contentMirror/GET_RECORD_CONTENT_FAIL';

// const CHANGE_TABLE = 'contentMirror/CHANGE_TABLE';
// const CHANGE_RECORD = 'contentMirror/CHANGE_RECORD';

// export const saveCode = body =>
//   actionCreator(SAVE_CODE_START, SAVE_CODE_SUCCESS, SAVE_CODE_FAIL, contentMirror.saveCode, body)();
// export const getRecords = tableName =>
//   actionCreator(GET_RECORDS_START, GET_RECORDS_SUCCESS, GET_RECORDS_FAIL, contentMirror.getRecords, tableName)();
// export const getRecordContent = (tableName, id) =>
//   actionCreator(
//     GET_RECORD_CONTENT_START,
//     GET_RECORD_CONTENT_SUCCESS,
//     GET_RECORD_CONTENT_FAIL,
//     contentMirror.getRecordContent,
//     tableName,
//     id
//   )();

// export const changeTable = table => ({ type: CHANGE_TABLE, table });
// export const changeRecord = record => ({ type: CHANGE_RECORD, record });

// export default (
//   state = {
//     content: '',
//     selectedTable: 'default',
//     selectedRecord: 'default',
//     records: []
//   },
//   action
// ) => {
//   switch (action.type) {
//     case SAVE_CODE_SUCCESS:
//       toast.success(`Save content success`, {
//         position: toast.POSITION.BOTTOM_LEFT,
//         className: 'toast-success'
//       });
//       return state;
//     case GET_RECORDS_SUCCESS:
//       return { ...state, records: action.data };
//     case GET_RECORD_CONTENT_SUCCESS:
//       return { ...state, content: action.data.content };
//     case CHANGE_RECORD:
//       return { ...state, selectedRecord: action.record };
//     case CHANGE_TABLE:
//       return { ...state, selectedTable: action.table, selectedRecord: 'default', content: '' };

//     case SAVE_CODE_FAIL:
//     case GET_RECORDS_FAIL:
//     case GET_RECORD_CONTENT_FAIL:
//       toast.error(`${action.error}`, {
//         position: toast.POSITION.TOP_LEFT,
//         className: 'toast-error'
//       });
//       return state;
//     default:
//       return state;
//   }
// };
