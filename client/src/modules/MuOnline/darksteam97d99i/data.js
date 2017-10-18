import { darksteam97d99i } from 'services';

const GET_DATA_START = 'darksteam97d99i/GET_DATA_START';
const GET_DATA_SUCCESS = 'darksteam97d99i/GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'darksteam97d99i/GET_DATA_FAIL';

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

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, [action.file]: action.data };
    default:
      return state;
  }
};
