export default (type, service, ...serviceParams) => {
  const actionStart = () => ({ type: `${type}_START`, params: { ...serviceParams } });
  const actionSuccess = data => ({ type: `${type}_SUCCESS`, data, params: { ...serviceParams } });
  const actionError = error => ({ type: `${type}_FAIL`, error: error.message });

  const action = () => {
    return async dispatch => {
      dispatch(actionStart());
      try {
        const data = await service(...serviceParams);
        if (data && data.message) {
          return dispatch(actionError(data));
        }
        dispatch(actionSuccess(data));
      } catch (e) {
        console.error(e);
        return dispatch(actionError(e));
      }
    };
  };

  return action;
};
