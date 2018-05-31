import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';
import { toastSuccess } from 'common/Toast';

const SET_SELECTED_SLOT = 'ds9799_upgradeItems/SET_SELECTED_SLOT';
const GET_INVENTORY = 'ds9799_upgradeItems/GET_INVENTORY';
export const UPGRADE_ITEMS = 'ds9799_upgradeItems/UPGRADE_ITEMS';

export const getInventory = characterName =>
  actionCreator(GET_INVENTORY, services.getCharacterInventory, { payload: { characterName } })();
export const setSelectedSlot = slot => ({ type: SET_SELECTED_SLOT, slot });

export const upgradeItem = formBody =>
  actionCreator(UPGRADE_ITEMS, services.upgradeItem, {
    payload: { formBody },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ14');
    }
  })();

const initialState = { inventories: {}, selectedSlot: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SLOT:
      return { ...state, selectedSlot: action.slot };
    case `${GET_INVENTORY}_SUCCESS`:
      return { ...state, inventories: { ...state.inventories, [action.params.characterName]: action.payload } };
    case `${UPGRADE_ITEMS}_SUCCESS`:
      toastSuccess('Item upgraded');
      return {
        ...state,
        inventories: { ...state.inventories, [action.params.formBody.characterName]: action.payload.inventory }
      };
    default:
      return state;
  }
};
