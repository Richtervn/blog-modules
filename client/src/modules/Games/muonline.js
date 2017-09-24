const CHANGE_ACTIVE_VIEW = 'muonline/CHANGE_ACTIVE_VIEW';

export const changeActiveView = view => ({ type: CHANGE_ACTIVE_VIEW, view });

export default (
  state = {
    viewControl: {
      activeView: 'Versions'
    }
  },
  action
) => {
  switch (action.type) {
    case CHANGE_ACTIVE_VIEW:
      return { ...state, viewControl: { ...state.viewControl, activeView: action.view } };
    default:
      return state;
  }
};
