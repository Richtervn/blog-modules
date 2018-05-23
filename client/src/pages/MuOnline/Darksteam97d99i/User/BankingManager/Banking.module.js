import React from 'react';
import { actionCreator, formatNumber } from 'helpers';
import { toastSuccess } from 'common/Toast';
import services from '../../Darksteam97d99i.services';

import { LOGIN } from '../User.module';
import { REFRESH_QUEST_LIST } from '../WebQuest/WebQuest.module';
import { ADD_POINT, RESET_QUEST, GRAND_RESET, RESET } from '../CharacterManager/Character.module';

export const DEPOSIT = 'ds9799_banking/DEPOSIT';
export const WITHDRAW = 'ds9799_banking/WITHDRAW';
export const LOAN = 'ds9799_banking/LOAN';
export const TRANSFER = 'ds9799_banking/TRANSFER';
export const BUY_CREDIT = 'ds9799_banking/BUY_CREDIT';
export const SELL_CREDIT = 'ds9799_banking/SELL_CREDIT';
const GET_LOGS = 'ds9799_banking/GET_LOGS';

export const withdraw = query => actionCreator(WITHDRAW, services.withdraw, { payload: { query } })();
export const transfer = query => actionCreator(TRANSFER, services.transfer, { payload: { query } })();
export const deposit = query =>
  actionCreator(DEPOSIT, services.deposit, {
    payload: { query },
    onAfterSuccess({ payload, data, socket }) {
      if (data.loan_money) {
        socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ08', payload.query.amount);
      } else {
        socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ15', payload.query.amount);
      }
    }
  })();
export const loan = query =>
  actionCreator(LOAN, services.loan, {
    payload: { query },
    onAfterSuccess({ payload, socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ06', payload.query.amount);
    }
  })();
export const buyCredit = query =>
  actionCreator(BUY_CREDIT, services.buyCredit, {
    payload: { query },
    onAfterSuccess({ payload, socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ09', payload.query.amount);
    }
  })();
export const sellCredit = query => actionCreator(SELL_CREDIT, services.sellCredit, { payload: { query } })();

export const getLogs = () =>
  actionCreator(GET_LOGS, services.getUserBankingLogs, {
    payload: {},
    transformPayload({ payload, getState }) {
      payload.id = getState().ds9799_user.user.memb___id;
      return payload;
    }
  })();

const initialState = {
  zen_balance: null,
  loan_money: null,
  logs: null
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

    case `${LOAN}_SUCCESS`:
      toastSuccess(() => (
        <p>
          You loaned <b>{formatNumber(action.params.query.amount)}</b> Zen successfully. You now indept of{' '}
          <b>{formatNumber(action.payload.loan_money)}</b> Zen.
        </p>
      ));
      return { ...state, loan_money: action.payload.loan_money };
    case `${DEPOSIT}_SUCCESS`:
      toastSuccess(() => (
        <p>
          You deposited <b>{formatNumber(action.params.query.amount)}</b> Zen successfully. Your balance is now{' '}
          <b>{formatNumber(action.payload.zen_balance)}</b> Zen.
        </p>
      ));
      return { ...state, zen_balance: action.payload.zen_balance, loan_money: action.payload.loan_money };
    case `${WITHDRAW}_SUCCESS`:
      toastSuccess(() => (
        <p>
          You withdrawed <b>{formatNumber(action.params.query.amount)}</b> Zen successfully. Your balance is now{' '}
          <b>{formatNumber(action.payload.zen_balance)}</b> Zen.
        </p>
      ));
      return { ...state, zen_balance: action.payload.zen_balance };

    case `${BUY_CREDIT}_SUCCESS`:
      toastSuccess(() => (
        <p>
          You bought <b>{formatNumber(action.params.query.amount)}</b> Credits successfully. Your balance is now{' '}
          <b>{formatNumber(action.payload.zen_balance)}</b> Zen. Your credits is now{' '}
          <b>{formatNumber(action.payload.credits)}</b> Credits.
        </p>
      ));
      return { ...state, zen_balance: action.payload.zen_balance };

    case `${SELL_CREDIT}_SUCCESS`:
      toastSuccess(() => (
        <p>
          You sold <b>{formatNumber(action.params.query.amount)}</b> Credits successfully. Your balance is now{' '}
          <b>{formatNumber(action.payload.zen_balance)}</b> Zen. Your credits is now{' '}
          <b>{formatNumber(action.payload.credits)}</b> Credits.
        </p>
      ));
      return { ...state, zen_balance: action.payload.zen_balance };

    case `${TRANSFER}_SUCCESS`:
      toastSuccess(() => (
        <p>
          You transfered <b>{formatNumber(action.params.query.amount)}</b> Zen to{' '}
          <b>{action.params.query.receiveMemb}</b> successfully. Your balance is now{' '}
          <b>{formatNumber(action.payload.zen_balance)}</b>
        </p>
      ));
      return { ...state, zen_balance: action.payload.zen_balance };

    case `${GET_LOGS}_SUCCESS`:
      return { ...state, logs: action.payload };

    default:
      return state;
  }
};
