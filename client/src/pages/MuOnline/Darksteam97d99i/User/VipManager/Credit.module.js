import { LOGIN } from '../User.module';
import { REFRESH_QUEST_LIST } from '../WebQuest/WebQuest.module';
import { GRAND_RESET, RESET } from '../CharacterManager/Character.module';

const initialState = { credits: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return { ...state, credits: action.payload.MembCredits.credits };
    case REFRESH_QUEST_LIST:
      return { ...state, credits: action.data.credits ? action.data.credits : state.credits };
    case `${GRAND_RESET}_SUCCESS`:
    case `${RESET}_SUCCESS`:
      return { ...state, credits: action.payload.credits };

    default:
      return state;
  }
};
