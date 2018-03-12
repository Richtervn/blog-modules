const SET_ACTIVE_TAB = 'darksteam97d99i/Introduction/SET_ACTIVE_TAB';

export const setActiveTab = tab => ({ type: SET_ACTIVE_TAB, tab });

const initialState = {
  activeTab: 'Home'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.tab };
    default:
      return state;
  }
};
