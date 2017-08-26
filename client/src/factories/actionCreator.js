export default (START, SUCCESS, FAIL, service, ...serviceParams) => {
  const actionStart = () => ({type: START});
  const actionSuccess = data => ({type: SUCCESS, data});
  const actionError = error => ({type: FAIL, error: error.message});

  const action = () => {
    return async dispatch => {
      dispatch(actionStart());
      try {
        const data = await service(...serviceParams);
        if(data.message){
          return dispatch(actionError(data));
        }
        dispatch(actionSuccess(data));
      } catch(e){
        return dispatch(actionError(e));
      }
    }
  }

  return action;
}