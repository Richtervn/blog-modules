import _ from 'underscore';
import React from 'react';
import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';
import { toastSuccess } from 'common/Toast';

import { LOGIN, setVipAccount } from '../User.module';
import { REFRESH_QUEST_LIST } from '../WebQuest/WebQuest.module';
import { GRAND_RESET, RESET, setVipCharacter } from '../CharacterManager/Character.module';
import { BUY_CREDIT, SELL_CREDIT } from '../BankingManager/Banking.module';
import { BUY_WEB_SHOP_PACKAGE } from '../WebShop/WebShop.module';
import { BUY_RECEIPT, BUY_CONSUMABLE, TRADE_EXCHANGE } from '../LuxuryShop/LuxuryShop.module';
import { UPGRADE_ITEMS } from '../UpgradeItems/UpgradeItems.module';
import { CRAFT_ITEM, SELL_RECEIPT } from '../Blacksmith/Blacksmith.module';

const GET_LOGS = 'ds9799_credit/GET_LOGS';
const GET_PACKAGES = 'ds9799_credit/GET_PACKAGES';
const BUY_PACKAGE = 'ds9799_credit/BUY_PACKAGE';

export const getLogs = () =>
  actionCreator(GET_LOGS, services.getUserCreditLogs, {
    payload: {},
    transformPayload({ payload, getState }) {
      payload.id = getState().ds9799_user.user.memb___id;
      return payload;
    }
  })();

export const getPackages = () => actionCreator(GET_PACKAGES, services.getVipPackages)();
export const buyPackage = query =>
  actionCreator(BUY_PACKAGE, services.buyVip, {
    payload: { query },
    onAfterSuccess({ getState, payload, data, socket, dispatch }) {
      const { packages } = getState().ds9799_credit;
      const boughtPackage = _.findWhere(packages, { id: parseInt(payload.query.packageId, 10) });
      if (boughtPackage.type === 'Character') {
        toastSuccess(() => (
          <p>
            You bought {boughtPackage.name} for {payload.query.characterId}
          </p>
        ));
        dispatch(setVipCharacter(payload.query.characterId));
        socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ10');
      }
      if (boughtPackage.type === 'Account') {
        toastSuccess(() => <p>You bought {boughtPackage.name} for your account</p>);
        dispatch(setVipAccount());
        socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ11');
      }
    }
  })();

const initialState = { credits: null, logs: null, packages: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
      return { ...state, credits: action.payload.MembCredits.credits };
    case REFRESH_QUEST_LIST:
      return { ...state, credits: action.data.credits ? action.data.credits : state.credits };

    case `${GET_LOGS}_SUCCESS`:
      return { ...state, logs: action.payload };
    case `${GET_PACKAGES}_SUCCESS`:
      return { ...state, packages: action.payload };

    case `${BUY_PACKAGE}_SUCCESS`:
    case `${BUY_WEB_SHOP_PACKAGE}_SUCCESS`:
    case `${GRAND_RESET}_SUCCESS`:
    case `${RESET}_SUCCESS`:
    case `${BUY_CREDIT}_SUCCESS`:
    case `${SELL_CREDIT}_SUCCESS`:
    case `${BUY_RECEIPT}_SUCCESS`:
    case `${BUY_CONSUMABLE}_SUCCESS`:
    case `${TRADE_EXCHANGE}_SUCCESS`:
    case `${UPGRADE_ITEMS}_SUCCESS`:
    case `${CRAFT_ITEM}_SUCCESS`:
    case `${SELL_RECEIPT}_SUCCESS`:
      return { ...state, credits: action.payload.credits };

    default:
      return state;
  }
};
