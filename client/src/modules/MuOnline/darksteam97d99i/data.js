import { darksteam97d99i } from 'services';
import actionCreator from 'factories/actionCreator';

const GET_DATA_START = 'darksteam97d99i/data/GET_DATA_START';
const GET_DATA_SUCCESS = 'darksteam97d99i/data/GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'darksteam97d99i/data/GET_DATA_FAIL';

const GET_VIP_SYSTEMS_START = 'darksteam97d99i/data/GET_VIP_SYSTEMS_START';
export const GET_VIP_SYSTEMS_SUCCESS = 'darksteam97d99i/data/GET_VIP_SYSTEMS_SUCCESS';
const GET_VIP_SYSTEMS_FAIL = 'darksteam97d99i/data/GET_VIP_SYSTEMS_FAIL';

const SUBMIT_ADD_VIP_SYSTEM_START = 'darksteam97d99i/data/SUBMIT_ADD_VIP_SYSTEM_START';
const SUBMIT_ADD_VIP_SYSTEM_SUCCESS = 'darksteam97d99i/data/SUBMIT_ADD_VIP_SYSTEM_SUCCESS';
const SUBMIT_ADD_VIP_SYSTEM_FAIL = 'darksteam97d99i/data/SUBMIT_ADD_VIP_SYSTEM_FAIL';

const SUBMIT_EDIT_VIP_SYSTEM_START = 'darksteam97d99i/data/SUBMIT_EDIT_VIP_SYSTEM_START';
const SUBMIT_EDIT_VIP_SYSTEM_SUCCESS = 'darksteam97d99i/data/SUBMIT_EDIT_VIP_SYSTEM_SUCCESS';
const SUBMIT_EDIT_VIP_SYSTEM_FAIL = 'darksteam97d99i/data/SUBMIT_EDIT_VIP_SYSTEM_FAIL';

const DELETE_VIP_SYSTEM_START = 'darksteam97d99i/data/DELETE_VIP_SYSTEM_START';
const DELETE_VIP_SYSTEM_SUCCESS = 'darksteam97d99i/data/DELETE_VIP_SYSTEM_SUCCESS';
const DELETE_VIP_SYSTEM_FAIL = 'darksteam97d99i/data/DELETE_VIP_SYSTEM_FAIL';

export const SET_FOCUS_VIP_SYSTEM = 'darksteam97d99i/data/SET_FOCUS_VIP_SYSTEM';

export const getData = file => {
  const getDataStart = () => ({ type: GET_DATA_START });
  const getDataSuccess = (file, data) => ({ type: GET_DATA_SUCCESS, file, data });
  const getDataFail = error => ({ type: GET_DATA_FAIL, error: error.message });
  return async dispatch => {
    dispatch(getDataStart());
    try {
      const data = await darksteam97d99i.getMuData(file);
      if (data.message) dispatch(getDataFail(data));
      dispatch(getDataSuccess(file, data));
    } catch (e) {
      dispatch(getDataFail(e));
    }
  };
};

export const getVipSystems = actionCreator(
  GET_VIP_SYSTEMS_START,
  GET_VIP_SYSTEMS_SUCCESS,
  GET_VIP_SYSTEMS_FAIL,
  darksteam97d99i.getVipSystems
);

export const addVipSystem = formBody =>
  actionCreator(
    SUBMIT_ADD_VIP_SYSTEM_START,
    SUBMIT_ADD_VIP_SYSTEM_SUCCESS,
    SUBMIT_ADD_VIP_SYSTEM_FAIL,
    darksteam97d99i.addVipSystem,
    formBody
  )();

export const editVipSystem = formBody =>
  actionCreator(
    SUBMIT_EDIT_VIP_SYSTEM_START,
    SUBMIT_EDIT_VIP_SYSTEM_SUCCESS,
    SUBMIT_EDIT_VIP_SYSTEM_FAIL,
    darksteam97d99i.editVipSystem,
    formBody
  )();
export const deleteVipSystem = id =>
  actionCreator(
    DELETE_VIP_SYSTEM_START,
    DELETE_VIP_SYSTEM_SUCCESS,
    DELETE_VIP_SYSTEM_FAIL,
    darksteam97d99i.deleteVipSystem,
    id
  )();

export const setFocusVipSystem = system => ({ type: SET_FOCUS_VIP_SYSTEM, system });

export default (state = { VipSystems: null, focusVipSystem: {} }, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, [action.file]: action.data };
    case GET_VIP_SYSTEMS_SUCCESS:
      return { ...state, VipSystems: action.data };
    case SUBMIT_ADD_VIP_SYSTEM_SUCCESS:
      state.VipSystems.push(action.data);
      return { ...state, VipSystems: state.VipSystems.slice(0) };
    case SET_FOCUS_VIP_SYSTEM:
      return { ...state, focusVipSystem: action.system };
    case SUBMIT_EDIT_VIP_SYSTEM_SUCCESS:
      state.VipSystems = state.VipSystems.map(system => {
        if (system.id == action.data.id) {
          return action.data;
        }
        return system;
      });
      return { ...state, VipSystems: state.VipSystems.slice(0), focusVipSystem: action.data };
    case DELETE_VIP_SYSTEM_SUCCESS:
      state.VipSystems = state.VipSystems.filter(system => system.id != action.data.id);
      return { ...state, VipSystems: state.VipSystems.slice(0) };
    default:
      return state;
  }
};
