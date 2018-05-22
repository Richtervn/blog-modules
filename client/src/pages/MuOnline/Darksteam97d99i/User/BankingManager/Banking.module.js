import { LOGIN } from '../User.module';
import { REFRESH_QUEST_LIST } from '../WebQuest/WebQuest.module';
import { ADD_POINT, RESET_QUEST, GRAND_RESET, RESET } from '../CharacterManager/Character.module';

const initialState = {
  zen_balance: null,
  loan_money: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return {
        ...state,
        zen_balance: action.payload.Banking.zen_balance,
        loan_money: action.payload.Banking.loan_money
      };
    case REFRESH_QUEST_LIST:
      return { ...state, zen_balance: action.data.zen_balance ? action.data.zen_balance : state.zen_balance };

    case `${ADD_POINT}_SUCCESS`:
    case `${RESET_QUEST}_SUCCESS`:
    case `${GRAND_RESET}_SUCCESS`:
    case `${RESET}_SUCCESS`:
      if (action.payload.isUseBank === 'true') {
        return { ...state, zen_balance: action.payload.zen_balance };
      }
      return state;

    default:
      return state;
  }
};
