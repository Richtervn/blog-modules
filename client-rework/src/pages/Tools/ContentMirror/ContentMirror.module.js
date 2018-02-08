import { actionCreator } from 'helpers';
import { toastError } from 'common/Toast';
// toastSuccess

import services from './ContentMirror.services';

const TOGGLE_SHARE_VIEW = 'contentMirror/TOGGLE_SHARE_VIEW';
const CHANGE_CODE_VALUE = 'contentMirror/CHANGE_CODE_VALUE';
const CHANGE_LANGUAGE = 'contentMirror/CHANGE_LANGUAGE';
const NEW_CODE = 'contentMirror/NEW_CODE';
const REFRESH_CODE = 'contentMirror/REFRESH_CODE';
const CHANGE_BACKGROUND = 'contentMirror/CHANGE_BACKGROUND';
const CHANGE_OPACITY = 'contentMirror/CHANGE_OPACITY';

const GET_TABLES = 'contentMirror/GET_TABLES';
const GET_DOCUMENTS = 'contentMirror/GET_DOCUMENTS';
const CHANGE_COLLECTION_VALUE = 'contentMirror/CHANGE_COLLECTION_VALUE';
const CHANGE_DOCUMENT_VALUE = 'contentMirror/CHANGE_DOCUMENT_VALUE';

export const toggleShareView = () => ({ type: TOGGLE_SHARE_VIEW });
export const changeLanguage = language => ({ type: CHANGE_LANGUAGE, language });
export const changeCode = value => ({ type: CHANGE_CODE_VALUE, value });
export const newCode = () => ({ type: NEW_CODE });
export const refreshCode = () => ({ type: REFRESH_CODE });
export const changeBackground = background => ({ type: CHANGE_BACKGROUND, background });
export const changeOpacity = opacity => ({ type: CHANGE_OPACITY, opacity });
export const changeCollectionValue = collection => ({ type: CHANGE_COLLECTION_VALUE, collection });
export const changeDocumentValue = doc => ({ type: CHANGE_DOCUMENT_VALUE, doc });

export const getTables = actionCreator(GET_TABLES, services.getTables);
export const getDocuments = collection => actionCreator(GET_DOCUMENTS, services.getDocuments, collection)();

const initialState = {
  isShareView: true,
  cssCode: '',
  htmlCode: '',
  cssSource: '',
  htmlSource: '',
  currentLanguage: 'HTML',
  background: 'default',
  opacity: 0,
  documents: null,
  tables: null,
  collectionValue: 'default',
  documentValue: 'default'
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
    case CHANGE_COLLECTION_VALUE:
      return { ...state, collectionValue: action.collection };
    case CHANGE_DOCUMENT_VALUE:
      return { ...state, documentValue: action.doc };

    case `${GET_TABLES}_SUCCESS`:
      return { ...state, tables: action.data };
    case `${GET_DOCUMENTS}_SUCCESS`:
      return { ...state, documents: action.data };

    case `${GET_TABLES}_FAIL`:
    case `${GET_DOCUMENTS}_FAIL`:
      toastError(action.error);
      return state;
    default:
      return state;
  }
};
