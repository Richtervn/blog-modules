import { toastError } from 'common/Toast';

export default (type, process, options = {}) => {
  let {
    payload,
    validate,
    preProcess,
    transformPayload,
    transformData,
    onBeforeStart,
    onAfterStart,
    onBeforeSuccess,
    onAfterSuccess,
    toast
  } = options;

  if (!toast) {
    toast = true;
  }

  const actionStart = () => ({ type: `${type}_START`, payload });
  const actionSuccess = data => ({ type: `${type}_SUCCESS`, payload: data, params: { ...payload } });
  const actionFail = error => {
    if (toast) {
      toastError(error);
    }
    return { type: `${type}_FAIL`, error };
  };

  const action = () => {
    return async (dispatch, getState, socket) => {
      if (onBeforeStart) {
        await onBeforeStart({ payload, dispatch, getState, socket });
      }
      dispatch(actionStart());
      if (onAfterStart) {
        await onAfterStart({ payload, dispatch, getState, socket });
      }

      if (transformPayload) {
        payload = await transformPayload({ payload, dispatch, getState, socket });
      }

      if (validate) {
        const isValid = validate({ payload, dispatch, getState, socket });
        if (!isValid) {
          return;
        }
      }

      if (preProcess) {
        await preProcess({ payload, dispatch, getState, socket });
      }

      try {
        let data = await process(payload, { dispatch, getState, socket });

        if (data && data.message) {
          return dispatch(actionFail(data.message));
        }

        if (transformData) {
          data = transformData({ data, getState });
        }
        if (onBeforeSuccess) {
          await onBeforeSuccess({ data, dispatch, getState, socket });
        }
        dispatch(actionSuccess(data));
        if (onAfterSuccess) {
          await onAfterSuccess({ data, dispatch, getState, socket });
        }
      } catch (e) {
        console.log(e);
        return dispatch(actionFail(e.message));
      }
    };
  };

  return action;
};
