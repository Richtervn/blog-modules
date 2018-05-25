import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';

const GET_PACKAGES = 'ds9799_webShop/GET_PACKAGES';
const SET_FOCUS_CATEGORY = 'ds9799_webShop/SET_FOCUS_CATEGORY';

export const getPackages = id => actionCreator(GET_PACKAGES, services.getWebShopPackages, { payload: { id } })();
export const setFocusCategory = id => ({ type: SET_FOCUS_CATEGORY, id });

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
  packages: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PACKAGES}_SUCCESS`:
      return { ...state, packages: { ...state.packages, [action.params.id]: action.payload } };
    case SET_FOCUS_CATEGORY:
      return { ...state, focusCategory: action.id };
    default:
      return state;
  }
};
