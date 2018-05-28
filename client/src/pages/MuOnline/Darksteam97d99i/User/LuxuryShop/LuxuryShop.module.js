import { actionCreator } from 'helpers';
import services from '../../Darksteam97d99i.services';

const GET_RECEIPTS = 'ds9799_luxury/GET_RECEIPTS';
const GET_EXCHANGES = 'ds9799_luxury/GET_EXCHANGES';
const GET_CONSUMABLES = 'ds9799_luxury/GET_CONSUMABLES';

export const getReceipts = () => actionCreator(GET_RECEIPTS, services.getReceipts)();
export const getConsumables = () => actionCreator(GET_CONSUMABLES, services.getConsumables)();
export const getExchanges = () => actionCreator(GET_EXCHANGES, services.getExchanges)(); 

const initialState = {
  receipts: null,
  exchanges: null,
  consumables: null
};

export default (state = initialState, action) => {
  switch(action.type){
    case `${GET_RECEIPTS}_SUCCESS`:
      return {...state, receipts: action.payload};
    case `${GET_EXCHANGES}_SUCCESS`:
      return {...state, exchanges: action.payload};
    case `${GET_CONSUMABLES}_SUCCESS`:
      return {...state, consumables: action.payload};
    default:
      return state;
  }
}