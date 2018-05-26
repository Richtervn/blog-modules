import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';
import { toastError } from 'common/Toast';
import { hideModal } from 'common/Modal';

const GET_PACKAGES = 'ds9799_webShop/GET_PACKAGES';
const SET_FOCUS_CATEGORY = 'ds9799_webShop/SET_FOCUS_CATEGORY';
const SET_FOCUS_PACKAGE = 'ds9799_webShop/SET_FOCUS_PACKAGE';
export const BUY_WEB_SHOP_PACKAGE = 'ds9799_webShop/BUY_PACKAGE';

export const buyWebShopPackage = (packageId, characterName) =>
  actionCreator(BUY_WEB_SHOP_PACKAGE, services.buyWebShopPackage, {
    payload: { packageId, characterName },
    validate({ payload }) {
      if (!payload.characterName) {
        toastError('No Character Selected');
        return false;
      }
      return true;
    },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ12');
      hideModal();
    }
  })();

export const getPackages = id => actionCreator(GET_PACKAGES, services.getWebShopPackages, { payload: { id } })();
export const setFocusCategory = id => ({ type: SET_FOCUS_CATEGORY, id });
export const setFocusPackage = pack => ({ type: SET_FOCUS_PACKAGE, pack });

const initialState = {
  categories: [
    { _id: 0, Name: 'Swords', Icon: 'ws-sword' },
    { _id: 1, Name: 'Axes', Icon: 'ws-axe' },
    { _id: 2, Name: 'Maces', Icon: 'ws-mace' },
    { _id: 3, Name: 'Spears', Icon: 'ws-spear' },
    { _id: 4, Name: 'Bows', Icon: 'ws-bow' },
    { _id: 5, Name: 'Staffs', Icon: 'ws-staff' },
    { _id: 6, Name: 'Shields', Icon: 'ws-shield' },
    { _id: 7, Name: 'Wings', Icon: 'ws-wing' },
    { _id: 8, Name: 'Sets', Icon: 'ws-set' }
  ],
  focusCategory: 0,
  packages: {},
  focusPackage: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PACKAGES}_SUCCESS`:
      return { ...state, packages: { ...state.packages, [action.params.id]: action.payload } };
    case SET_FOCUS_CATEGORY:
      return { ...state, focusCategory: action.id };
    case SET_FOCUS_PACKAGE:
      return { ...state, focusPackage: { ...action.pack } };
    default:
      return state;
  }
};
