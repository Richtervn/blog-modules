import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';

const SET_SELECTED_SLOT = 'ds9799_upgradeItems/SET_SELECTED_SLOT';
const GET_INVENTORY = 'ds9799_upgradeItems/GET_INVENTORY';

export const getInventory = characterName =>
  actionCreator(GET_INVENTORY, services.getCharacterInventory, { payload: { characterName } })();
export const setSelectedSlot = slot => ({ type: SET_SELECTED_SLOT, slot });

const initialState = { inventories: {}, selectedSlot: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SLOT:
      return { ...state, selectedSlot: action.slot };
    case `${GET_INVENTORY}_SUCCESS`:
      return { ...state, inventories: { ...state.inventories, [action.params.characterName]: action.payload } };
    default:
      return state;
  }
};
