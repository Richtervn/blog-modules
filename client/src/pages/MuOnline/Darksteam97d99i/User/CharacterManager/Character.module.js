import { actionCreator } from 'helpers';
import { toastSuccess } from 'common/Toast';

import services from '../../Darksteam97d99i.services';

const GET_CHARACTERS = 'ds9799_character/GET_CHARACTERS';
const SET_FOCUS_CHARACTER = 'ds9799_character/SET_FOCUS_CHARACTER';

export const RESET = 'ds9799_character/RESET';
export const ADD_POINT = 'ds9799_character/ADD_POINT';
export const GRAND_RESET = 'ds9799_character/GRAND_RESET';
export const RESET_QUEST = 'ds9799_character/RESET_QUEST';

export const getCharacters = id => actionCreator(GET_CHARACTERS, services.getCharacters, { payload: { id } })();
export const setFocusCharacter = name => ({ type: SET_FOCUS_CHARACTER, name });

export const reset = query =>
  actionCreator(RESET, services.reset, {
    payload: { query },
    onAfterSuccess({ socket, payload }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ03', payload.query.name);
    }
  })();
export const grandReset = query =>
  actionCreator(GRAND_RESET, services.grandReset, {
    payload: { query },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ04');
    }
  })();
export const addPoint = query =>
  actionCreator(ADD_POINT, services.addPoint, {
    payload: { query },
    onAfterSuccess({ payload, socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ02', payload.query.point);
    }
  })();
export const resetQuest = query =>
  actionCreator(RESET_QUEST, services.resetQuest, {
    payload: { query },
    onAfterSuccess({ socket }) {
      socket.emit('darksteam97d99i/CHECK_POINT_QUEST', 'WQ05');
    }
  })();

const initialState = {
  characters: null,
  focusCharacter: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CHARACTERS}_SUCCESS`:
      return {
        ...state,
        characters: action.payload,
        focusCharacter: action.payload.length > 0 ? action.payload[0].Name : null
      };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.name };

    case `${ADD_POINT}_SUCCESS`:
      state.characters = state.characters.map(character => {
        if (character.Name === action.params.query.name) {
          character[action.params.query.type] = action.payload[action.params.query.type];
          character.LevelUpPoint = action.payload.LevelUpPoint;
        }
        if (!action.params.query.isUseBank) {
          character.Money = action.payload.Money;
        }
        return character;
      });
      toastSuccess('Added point successfully');
      return { ...state, characters: state.characters.slice(0) };
      
    case `${RESET_QUEST}_SUCCESS`:
    case `${GRAND_RESET}_SUCCESS`:
    case `${RESET}_SUCCESS`:
      let notice = '';
      if (action.type === `${RESET_QUEST}_SUCCESS`) notice = 'Reset successfull';
      if (action.type === `${GRAND_RESET}_SUCCESS`) notice = 'Grand Reset successfull';
      if (action.type === `${RESET}_SUCCESS`) notice = 'Quest Reset successfull';
      toastSuccess(notice);
      state.characters = state.characters.map(character => {
        if (character.Name === action.params.query.name) {
          if (!action.params.query.isUseBank) {
            character.Money = action.payload.Money;
          }
          if (action.payload.Strength) character.Strength = action.payload.Strength;
          if (action.payload.Dexterity) character.Dexterity = action.payload.Dexterity;
          if (action.payload.Vitality) character.Vitality = action.payload.Vitality;
          if (action.payload.Energy) character.Energy = action.payload.Energy;
          if (action.payload.LevelUpPoint) character.LevelUpPoint = action.payload.LevelUpPoint;
          if (action.payload.GrandResets) character.GrandResets = action.payload.GrandResets;
          character.Resets = action.payload.Resets;
          character.cLevel = action.payload.cLevel;
        }
        return character;
      });
      return { ...state, characters: state.characters.slice(0) };

    default:
      return state;
  }
};
