import { contentMirror } from 'services';
import { toast } from 'react-toastify';

import actionCreator from 'factories/actionCreator';

const SAVE_CODE_START = 'contentMirror/SAVE_CODE_START';
const SAVE_CODE_SUCCESS = 'contentMirror/SAVE_CODE_SUCCESS';
const SAVE_CODE_FAIL = 'contentMirror/SAVE_CODE_FAIL';

const GET_RECORDS_START = 'contentMirror/GET_RECORDS_START';
const GET_RECORDS_SUCCESS = 'contentMirror/GET_RECORDS_SUCCESS';
const GET_RECORDS_FAIL = 'contentMirror/GET_RECORDS_FAIL';

const GET_RECORD_CONTENT_START = 'contentMirror/GET_RECORD_CONTENT_START';
const GET_RECORD_CONTENT_SUCCESS = 'contentMirror/GET_RECORD_CONTENT_SUCCESS';
const GET_RECORD_CONTENT_FAIL = 'contentMirror/GET_RECORD_CONTENT_FAIL';

const CHANGE_TABLE = 'contentMirror/CHANGE_TABLE';
const CHANGE_RECORD = 'contentMirror/CHANGE_RECORD';

export const saveCode = body =>
  actionCreator(SAVE_CODE_START, SAVE_CODE_SUCCESS, SAVE_CODE_FAIL, contentMirror.saveCode, body)();
export const getRecords = tableName =>
  actionCreator(GET_RECORDS_START, GET_RECORDS_SUCCESS, GET_RECORDS_FAIL, contentMirror.getRecords, tableName)();
export const getRecordContent = (tableName, id) =>
  actionCreator(
    GET_RECORD_CONTENT_START,
    GET_RECORD_CONTENT_SUCCESS,
    GET_RECORD_CONTENT_FAIL,
    contentMirror.getRecordContent,
    tableName,
    id
  )();

export const changeTable = table => ({ type: CHANGE_TABLE, table });
export const changeRecord = record => ({ type: CHANGE_RECORD, record });

export default (
  state = {
    content: '',
    selectedTable: 'default',
    selectedRecord: 'default',
    records: []
  },
  action
) => {
  switch (action.type) {
    case SAVE_CODE_SUCCESS:
      toast.success(`Save content success`, {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-success'
      });
      return state;
    case GET_RECORDS_SUCCESS:
      return { ...state, records: action.data };
    case GET_RECORD_CONTENT_SUCCESS:
      return { ...state, content: action.data.content };
    case CHANGE_RECORD:
      return { ...state, selectedRecord: action.record };
    case CHANGE_TABLE:
      return { ...state, selectedTable: action.table, selectedRecord: 'default', content: '' };

    case SAVE_CODE_FAIL:
    case GET_RECORDS_FAIL:
    case GET_RECORD_CONTENT_FAIL:
      toast.error(`${action.error}`, {
        position: toast.POSITION.TOP_LEFT,
        className: 'toast-error'
      });
      return state;
    default:
      return state;
  }
};
