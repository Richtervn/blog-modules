import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './AppDiary.services';

const GET_LOGS = 'appDiary/GET_LOGS';
const ADD_LOG = 'appDiary/ADD_LOG';

export const getLogs = actionCreator(GET_LOGS, services.getLogs);
export const addLog = formBody => actionCreator(ADD_LOG, services.addLog, formBody)();

export default (state = { logs: null }, action) => {
  switch (action.type) {
    case `${GET_LOGS}_SUCCESS`:
      return { ...state, logs: action.data };
    case `${ADD_LOG}_SUCCESS`:
      if (state.logs) {
        state.logs.push(action.data);
      } else {
        toastSuccess('Added log');
      }
      return { ...state, logs: state.logs ? state.logs.slice(0) : null };

    case `${GET_LOGS}_FAIL`:
    case `${ADD_LOG}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};
