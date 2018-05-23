import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';

import { LOGIN } from '../User.module';
import { REFRESH_QUEST_LIST } from '../WebQuest/WebQuest.module';
import { GRAND_RESET, RESET } from '../CharacterManager/Character.module';
import { BUY_CREDIT, SELL_CREDIT } from '../BankingManager/Banking.module';

const GET_LOGS = 'ds9799_credit/GET_LOGS';

export const getLogs = () =>
  actionCreator(GET_LOGS, services.getUserCreditLogs, {
    payload: {},
    transformPayload({ payload, getState }) {
      payload.id = getState().ds9799_user.user.memb___id;
      return payload;
    }
  })();

const initialState = { credits: null, logs: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return { ...state, credits: action.payload.MembCredits.credits };
    case REFRESH_QUEST_LIST:
      return { ...state, credits: action.data.credits ? action.data.credits : state.credits };
    case `${GRAND_RESET}_SUCCESS`:
    case `${RESET}_SUCCESS`:
      return { ...state, credits: action.payload.credits };

    case `${BUY_CREDIT}_SUCCESS`:
      return { ...state, credits: action.payload.credits };
    case `${SELL_CREDIT}_SUCCESS`:
      return { ...state, credits: action.payload.credits };

    case `${GET_LOGS}_SUCCESS`:
      return { ...state, logs: action.payload };

    default:
      return state;
  }
};
