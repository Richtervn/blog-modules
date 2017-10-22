import commonFormChange from 'factories/commonFormChange';
import actionCreator from 'factories/actionCreator';

import { flashGames, yugiohPoc, music, starcraft } from 'services';
import {
  SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS,
  SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS,
  GET_MOD_LIST_SUCCESS,
  SET_FOCUS_MOD,
  GET_DECK_LIST_SUCCESS,
  SET_FOCUS_DECK
} from 'modules/Games/yugiohPoc';

import {
  GET_MAP_LIST_SUCCESS,
  SET_MAP_FOCUS,
  GET_MOD_DETAIL_SUCCESS,
  GET_CAMPAIGN_DETAIL_SUCCESS
} from 'modules/Games/starcraft';

import { GET_VIP_SYSTEMS_SUCCESS, SET_FOCUS_VIP_SYSTEM } from 'modules/MuOnline/darksteam97d99i/data';

import { GET_TOOL_DETAIL_SUCCESS, GET_VERSION_DETAIL_SUCCESS } from 'modules/Games/muonline';

const CHANGE_ADD_FLASH_FORM = 'forms/CHANGE_ADD_FLASH_FORM';
const CHANGE_ADD_YUGIOH_MOD_FORM = 'forms/CHANGE_ADD_YUGIOH_MOD_FORM';
const CHANGE_ADD_YUGIOH_DECK_FORM = 'forms/CHANGE_ADD_YUGIOH_DECK_FORM';
const CHANGE_ADD_MUSIC_FORM = 'forms/CHANGE_ADD_MUSIC_FORM';
const CHANGE_EDIT_YUGIOH_MOD_FORM = 'forms/CHANGE_EDIT_YUGIOH_MOD_FORM';
const CHANGE_EDIT_YUGIOH_DECK_FORM = 'forms/CHANGE_EDIT_YUGIOH_DECK_FORM';
const CHANGE_ADD_STARCRAFT_MAP_FORM = 'forms/CHANGE_ADD_STARCRAFT_MAP_FORM';
const CHANGE_EDIT_STARCRAFT_MAP_FORM = 'forms/CHANGE_EDIT_STARCRAFT_MAP_FORM';
const CHANGE_ADD_STARCRAFT_CAMPAIGN_FORM = 'forms/CHANGE_ADD_STARCRAFT_CAMPAIGN_FORM';
const CHANGE_EDIT_STARCRAFT_CAMPAIGN_FORM = 'forms/CHANGE_EDIT_STARCRAFT_CAMPAIGN_FORM';
const CHANGE_ADD_STARCRAFT_MOD_FORM = 'forms/CHANGE_ADD_STARCRAFT_MOD_FORM';
const CHANGE_EDIT_STARTCRAFT_MOD_FORM = 'forms/CHANGE_EDIT_STARTCRAFT_MOD_FORM';
const CHANGE_ADD_MUONLINE_TOOL_FORM = 'forms/CHANGE_ADD_MUONLINE_TOOL_FORM';
const CHANGE_EDIT_MUONLINE_TOOL_FORM = 'forms/CHANGE_EDIT_MUONLINE_TOOL_FORM';
const CHANGE_ADD_MUONLINE_VERSION_FORM = 'forms/CHANGE_ADD_MUONLINE_VERSION_FORM';
const CHANGE_EDIT_MUONLINE_VERSION_FORM = 'forms/CHANGE_EDIT_MUONLINE_VERSION_FORM';
const CHANGE_ADD_DS9799_VIP_SYSTEM_FORM = 'forms/CHANGE_ADD_DS9799_VIP_SYSTEM_FORM';
const CHANGE_EDIT_DS9799_VIP_SYSTEM_FORM = 'forms/CHANGE_EDIT_DS9799_VIP_SYSTEM_FORM';

const ADD_ARRAY_YUGIOH_MOD_FORM = 'forms/ADD_ARRAY_YUGIOH_MOD_FORM';
const ADD_ARRAY_YUGIOH_DECK_FORM = 'forms/ADD_ARRAY_YUGIOH_DECK_FORM';
const ADD_ARRAY_YUGIOH_EDIT_MOD_FORM = 'forms/ADD_ARRAY_YUGIOH_EDIT_MOD_FORM';
const ADD_ARRAY_YUGIOH_EDIT_DECK_FORM = 'forms/ADD_ARRAY_YUGIOH_EDIT_DECK_FORM';
const ADD_ARRAY_STARCRAFT_MAP_FORM = 'forms/ADD_ARRAY_STARCRAFT_MAP_FORM';
const ADD_ARRAY_STARCRAFT_EDIT_MAP_FORM = 'forms/ADD_ARRAY_STARCRAFT_EDIT_MAP_FORM';
const ADD_ARRAY_MUONLINE_TOOL_FORM = 'forms/ADD_ARRAY_MUONLINE_TOOL_FORM';
const ADD_ARRAY_MUONLINE_VERSION_FORM = 'forms/ADD_ARRAY_MUONLINE_VERSION_FORM';
const ADD_ARRAY_MUONLINE_EDIT_TOOL_FORM = 'forms/ADD_ARRAY_MUONLINE_EDIT_TOOL_FORM';
const ADD_ARRAY_MUONLINE_EDIT_VERSION_FORM = 'forms/ADD_ARRAY_MUONLINE_EDIT_VERSION_FORM';

const REMOVE_ARRAY_YUGIOH_MOD_FORM = 'forms/REMOVE_ARRAY_YUGIOH_MOD_FORM';
const REMOVE_ARRAY_YUGIOH_DECK_FORM = 'forms/REMOVE_ARRAY_YUGIOH_DECK_FORM';
const REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM = 'forms/REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM';
const REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM = 'forms/REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM';
const REMOVE_ARRAY_STARCRAFT_MAP_FORM = 'forms/REMOVE_ARRAY_STARCRAFT_MAP_FORM';
const REMOVE_ARRAY_STARCRAFT_EDIT_MAP_FORM = 'forms/REMOVE_ARRAY_STARCRAFT_EDIT_MAP_FORM';
const REMOVE_ARRAY_MUONLINE_TOOL_FORM = 'forms/REMOVE_ARRAY_MUONLINE_TOOL_FORM';
const REMOVE_ARRAY_MUONLINE_VERSION_FORM = 'forms/REMOVE_ARRAY_MUONLINE_VERSION_FORM';
const REMOVE_ARRAY_MUONLINE_EDIT_TOOL_FORM = 'forms/REMOVE_ARRAY_MUONLINE_EDIT_TOOL_FORM';
const REMOVE_ARRAY_MUONLINE_EDIT_VERSION_FORM = 'forms/REMOVE_ARRAY_MUONLINE_EDIT_VERSION_FORM';

const CHANGE_FORM_RATING = 'forms/CHANGE_FORM_RATING';

export const changeAddDs9799VipSystemForm = event => ({ type: CHANGE_ADD_DS9799_VIP_SYSTEM_FORM, event });
export const changeEditDs9799VipSystemForm = event => ({ type: CHANGE_EDIT_DS9799_VIP_SYSTEM_FORM, event });
export const changeAddFlashForm = event => ({ type: CHANGE_ADD_FLASH_FORM, event });
export const changeAddMusicForm = event => ({ type: CHANGE_ADD_MUSIC_FORM, event });
export const changeAddStarcraftModForm = event => ({ type: CHANGE_ADD_STARCRAFT_MOD_FORM, event });
export const changeEditStarcraftModForm = event => ({ type: CHANGE_EDIT_STARTCRAFT_MOD_FORM, event });
export const changeAddYugiohModForm = (event, index) => ({ type: CHANGE_ADD_YUGIOH_MOD_FORM, event, index });
export const changeAddStarcraftCampaignForm = event => ({ type: CHANGE_ADD_STARCRAFT_CAMPAIGN_FORM, event });
export const changeEditStarcraftCampaignForm = event => ({
  type: CHANGE_EDIT_STARCRAFT_CAMPAIGN_FORM,
  event
});
export const changeAddYugiohDeckForm = (event, index) => ({
  type: CHANGE_ADD_YUGIOH_DECK_FORM,
  event,
  index
});

export const changeEditYugiohModForm = (event, index) => ({
  type: CHANGE_EDIT_YUGIOH_MOD_FORM,
  event,
  index
});
export const changeEditYugiohDeckForm = (event, index) => ({
  type: CHANGE_EDIT_YUGIOH_DECK_FORM,
  event,
  index
});
export const changeAddStarcraftMapForm = (event, index) => ({
  type: CHANGE_ADD_STARCRAFT_MAP_FORM,
  event,
  index
});
export const changeEditStarcraftMapForm = (event, index) => ({
  type: CHANGE_EDIT_STARCRAFT_MAP_FORM,
  event,
  index
});
export const changeAddMuonlineToolForm = (event, index) => ({
  type: CHANGE_ADD_MUONLINE_TOOL_FORM,
  event,
  index
});
export const changeAddMuonlineVersionForm = (event, index) => ({
  type: CHANGE_ADD_MUONLINE_VERSION_FORM,
  event,
  index
});

export const addArrayYugiohModForm = name => ({ type: ADD_ARRAY_YUGIOH_MOD_FORM, name });
export const addArrayYugiohDeckForm = name => ({ type: ADD_ARRAY_YUGIOH_DECK_FORM, name });
export const addArrayYugiohEditModForm = name => ({ type: ADD_ARRAY_YUGIOH_EDIT_MOD_FORM, name });
export const addArrayYugiohEditDeckForm = name => ({ type: ADD_ARRAY_YUGIOH_EDIT_DECK_FORM, name });
export const addArrayStarcraftMapForm = name => ({ type: ADD_ARRAY_STARCRAFT_MAP_FORM, name });
export const addArrayStarcraftEditMapForm = name => ({ type: ADD_ARRAY_STARCRAFT_EDIT_MAP_FORM, name });
export const addArrayMuonlineToolForm = name => ({ type: ADD_ARRAY_MUONLINE_TOOL_FORM, name });
export const addArrayMuonlineVersionForm = name => ({ type: ADD_ARRAY_MUONLINE_VERSION_FORM, name });
export const addArrayMuonlineEditToolForm = name => ({ type: ADD_ARRAY_MUONLINE_EDIT_TOOL_FORM, name });
export const addArrayMuonlineEditVersionForm = name => ({ type: ADD_ARRAY_MUONLINE_EDIT_VERSION_FORM, name });
export const removeArrayYugiohModForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_MOD_FORM,
  name,
  index
});
export const removeArrayYugiohDeckForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_DECK_FORM,
  name,
  index
});
export const removeArrayYugiohEditModForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM,
  name,
  index
});
export const removeArrayYugiohEditDeckForm = (name, index) => ({
  type: REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM,
  name,
  index
});
export const removeArrayStarcraftMapForm = (name, index) => ({
  type: REMOVE_ARRAY_STARCRAFT_MAP_FORM,
  name,
  index
});
export const removeArrayStarcraftEditMapForm = (name, index) => ({
  type: REMOVE_ARRAY_STARCRAFT_EDIT_MAP_FORM,
  name,
  index
});
export const removeArrayMuonlineToolForm = (name, index) => ({
  type: REMOVE_ARRAY_MUONLINE_TOOL_FORM,
  name,
  index
});
export const removeArrayMuonlineVersionForm = (name, index) => ({
  type: REMOVE_ARRAY_MUONLINE_VERSION_FORM,
  name,
  index
});
export const removeArrayMuonlineEditToolForm = (name, index) => ({
  type: REMOVE_ARRAY_MUONLINE_EDIT_TOOL_FORM,
  name,
  index
});
export const removeArrayMuonlineEditVersionForm = (name, index) => ({
  type: REMOVE_ARRAY_MUONLINE_EDIT_VERSION_FORM,
  name,
  index
});

export const changeFormRating = (formName, value) => ({ type: CHANGE_FORM_RATING, formName, value });

export default (
  state = {
    AddFlashGame: {
      Name: '',
      File: ''
    },
    AddYugiohMod: {
      Name: '',
      Icon: null,
      Image: null,
      Credits: [''],
      Rating: 0,
      Description: '',
      Introduction: ''
    },
    AddYugiohDeck: {
      ModId: '',
      Name: '',
      Image: null,
      Rating: 0,
      Description: '',
      Pros: [''],
      Cons: [''],
      Winrate: 0
    },
    EditYugiohMod: null,
    EditYugiohDeck: null,
    AddMusic: {
      File: null,
      Rating: 0,
      Genre: ''
    },
    AddStarcraftMap: {
      Rating: 0,
      File: null,
      Matchup: '',
      Description: '',
      Tipntrick: ['']
    },
    EditStarcraftMap: null,
    AddStarcraftCampaign: {
      Rating: 0,
      Matchup: '',
      Description: '',
      Introduction: '',
      Version: ''
    },
    EditStarcraftCampaign: null,
    AddStarcraftMod: {
      Name: '',
      Rating: 0,
      Description: '',
      Introduction: '',
      Version: ''
    },
    EditStarcraftMod: null,
    AddMuonlineTool: {
      Credits: [''],
      Archive: null,
      Icon: null,
      Rating: 0,
      Description: '',
      Introduce: '',
      Version: ''
    },
    EditMuonlineTool: null,
    AddMuonlineVersion: {
      file: null,
      Credits: [''],
      Rating: 0,
      Description: '',
      Introduce: '',
      Version: ''
    },
    EditMuonlineVersion: null,
    AddDS9799VipSystem: {
      name: '',
      price: 0,
      duration: 0,
      type: 'Account'
    },
    EditDS9799VipSystem: null
  },
  action
) => {
  let formValue;
  switch (action.type) {
    case CHANGE_ADD_FLASH_FORM:
      formValue = commonFormChange(state.AddFlashGame, action.event);
      return { ...state, AddFlashGame: formValue };
    case CHANGE_ADD_STARCRAFT_CAMPAIGN_FORM:
      formValue = commonFormChange(state.AddStarcraftCampaign, action.event);
      return { ...state, AddStarcraftCampaign: formValue };
    case CHANGE_ADD_STARCRAFT_MOD_FORM:
      formValue = commonFormChange(state.AddStarcraftMod, action.event);
      return { ...state, AddStarcraftMod: formValue };
    case CHANGE_EDIT_STARTCRAFT_MOD_FORM:
      formValue = commonFormChange(state.EditStarcraftMod, action.event);
      return { ...state, EditStarcraftMod: formValue };
    case CHANGE_EDIT_STARCRAFT_CAMPAIGN_FORM:
      formValue = commonFormChange(state.EditStarcraftCampaign, action.event);
      return { ...state, EditStarcraftCampaign: formValue };
    case CHANGE_ADD_MUSIC_FORM:
      formValue = commonFormChange(state.AddMusic, action.event);
      return { ...state, AddMusic: formValue };
    case CHANGE_ADD_YUGIOH_MOD_FORM:
      formValue = commonFormChange(
        state.AddYugiohMod,
        action.event,
        action.index,
        ['Credits'],
        ['Icon', 'Image']
      );
      return { ...state, AddYugiohMod: formValue };
    case CHANGE_ADD_YUGIOH_DECK_FORM:
      formValue = commonFormChange(
        state.AddYugiohDeck,
        action.event,
        action.index,
        ['Pros', 'Cons'],
        ['Image']
      );
      return { ...state, AddYugiohDeck: formValue };
    case CHANGE_EDIT_YUGIOH_MOD_FORM:
      formValue = commonFormChange(
        state.EditYugiohMod,
        action.event,
        action.index,
        ['Credits'],
        ['Icon', 'Image']
      );
      return { ...state, EditYugiohMod: { ...formValue } };
    case CHANGE_EDIT_YUGIOH_DECK_FORM:
      formValue = commonFormChange(
        state.EditYugiohDeck,
        action.event,
        action.index,
        ['Pros', 'Cons'],
        ['Image']
      );
      return { ...state, EditYugiohDeck: { ...formValue } };
    case CHANGE_ADD_STARCRAFT_MAP_FORM:
      formValue = commonFormChange(state.AddStarcraftMap, action.event, action.index, ['Tipntrick']);
      return { ...state, AddStarcraftMap: { ...formValue } };
    case CHANGE_EDIT_STARCRAFT_MAP_FORM:
      formValue = commonFormChange(state.EditStarcraftMap, action.event, action.index, ['Tipntrick']);
      return { ...state, EditStarcraftMap: { ...formValue } };
    case CHANGE_ADD_MUONLINE_TOOL_FORM:
      formValue = commonFormChange(
        state.AddMuonlineTool,
        action.event,
        action.index,
        ['Credits'],
        ['Archive', 'Icon']
      );
      return { ...state, AddMuonlineTool: { ...formValue } };
    case CHANGE_ADD_MUONLINE_VERSION_FORM:
      formValue = commonFormChange(state.AddMuonlineVersion, action.event, action.index, ['Credits']);
      return { ...state, AddMuonlineVersion: { ...formValue } };
    case CHANGE_EDIT_MUONLINE_TOOL_FORM:
      formValue = commonFormChange(
        state.EditMuonlineTool,
        action.event,
        action.index,
        ['Credits'],
        ['Archive', 'Icon']
      );
      return { ...state, EditMuonlineTool: { ...formValue } };
    case CHANGE_EDIT_MUONLINE_VERSION_FORM:
      formValue = commonFormChange(state.EditMuonlineVersion, action.event, action.index, ['Credits']);
      return { ...state, EditMuonlineVersion: { ...formValue } };
    case CHANGE_ADD_DS9799_VIP_SYSTEM_FORM:
      formValue = commonFormChange(state.AddDS9799VipSystem, action.event);
      return { ...state, AddDS9799VipSystem: { ...formValue } };
    case CHANGE_EDIT_DS9799_VIP_SYSTEM_FORM:
      formValue = commonFormChange(state.EditDS9799VipSystem, action.event);
      return { ...state, EditDS9799VipSystem: { ...formValue } };
    case ADD_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].push('');
      return {
        ...state,
        AddYugiohMod: { ...state.AddYugiohMod, [action.name]: state.AddYugiohMod[action.name].slice(0) }
      };
    case ADD_ARRAY_YUGIOH_DECK_FORM:
      state.AddYugiohDeck[action.name].push('');
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, [action.name]: state.AddYugiohDeck[action.name].slice(0) }
      };
    case ADD_ARRAY_YUGIOH_EDIT_MOD_FORM:
      state.EditYugiohMod[action.name].push('');
      return {
        ...state,
        EditYugiohMod: { ...state.EditYugiohMod, [action.name]: state.EditYugiohMod[action.name].slice(0) }
      };
    case ADD_ARRAY_STARCRAFT_MAP_FORM:
      state.AddStarcraftMap[action.name].push('');
      return {
        ...state,
        AddStarcraftMap: {
          ...state.AddStarcraftMap,
          [action.name]: state.AddStarcraftMap[action.name].slice(0)
        }
      };
    case ADD_ARRAY_STARCRAFT_EDIT_MAP_FORM:
      state.EditStarcraftMap[action.name].push('');
      return {
        ...state,
        EditStarcraftMap: {
          ...state.EditStarcraftMap,
          [action.name]: state.EditStarcraftMap[action.name].slice(0)
        }
      };
    case ADD_ARRAY_YUGIOH_EDIT_DECK_FORM:
      state.EditYugiohDeck[action.name].push('');
      return {
        ...state,
        EditYugiohDeck: { ...state.EditYugiohDeck, [action.name]: state.EditYugiohDeck[action.name].slice(0) }
      };
    case ADD_ARRAY_MUONLINE_TOOL_FORM:
      state.AddMuonlineTool[action.name].push('');
      return {
        ...state,
        AddMuonlineTool: {
          ...state.AddMuonlineTool,
          [action.name]: state.AddMuonlineTool[action.name].slice(0)
        }
      };
    case ADD_ARRAY_MUONLINE_VERSION_FORM:
      state.AddMuonlineVersion[action.name].push('');
      return {
        ...state,
        AddMuonlineVersion: {
          ...state.AddMuonlineVersion,
          [action.name]: state.AddMuonlineVersion[action.name].slice(0)
        }
      };
    case ADD_ARRAY_MUONLINE_EDIT_TOOL_FORM:
      state.EditMuonlineTool[action.name].push('');
      return {
        ...state,
        EditMuonlineTool: {
          ...state.EditMuonlineTool,
          [action.name]: state.EditMuonlineTool[action.name].slice(0)
        }
      };
    case ADD_ARRAY_MUONLINE_EDIT_VERSION_FORM:
      state.EditMuonlineVersion[action.name].push('');
      return {
        ...state,
        EditMuonlineVersion: {
          ...state.EditMuonlineVersion,
          [action.name]: state.EditMuonlineVersion[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_STARCRAFT_MAP_FORM:
      state.AddStarcraftMap[action.name].splice(action.index, 1);
      return {
        ...state,
        AddStarcraftMap: {
          ...state.AddStarcraftMap,
          [action.name]: state.AddStarcraftMap[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_STARCRAFT_EDIT_MAP_FORM:
      state.EditStarcraftMap[action.name].splice(action.index, 1);
      return {
        ...state,
        EditStarcraftMap: {
          ...state.EditStarcraftMap,
          [action.name]: state.EditStarcraftMap[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        AddYugiohMod: { ...state.AddYugiohMod, [action.name]: state.AddYugiohMod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_DECK_FORM:
      state.AddYugiohDeck[action.name].splice(action.index, 1);
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, [action.name]: state.AddYugiohDeck[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM:
      state.EditYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        EditYugiohMod: { ...state.EditYugiohMod, [action.name]: state.EditYugiohMod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM:
      state.EditYugiohDeck[action.name].splice(action.index, 1);
      return {
        ...state,
        EditYugiohDeck: { ...state.EditYugiohDeck, [action.name]: state.EditYugiohMod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_MUONLINE_TOOL_FORM:
      state.AddMuonlineTool[action.name].slice(action.index, 1);
      return {
        ...state,
        AddMuonlineTool: {
          ...state.AddMuonlineTool,
          [action.name]: state.AddMuonlineTool[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_VERSION_FORM:
      state.AddMuonlineVersion[action.name].slice(action.index, 1);
      return {
        ...state,
        AddMuonlineVersion: {
          ...state.AddMuonlineVersion,
          [action.name]: state.AddMuonlineVersion[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_EDIT_TOOL_FORM:
      state.EditMuonlineTool[action.name].slice(action.index, 1);
      return {
        ...state,
        EditMuonlineTool: {
          ...state.EditMuonlineTool,
          [action.name]: state.EditMuonlineTool[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_EDIT_VERSION_FORM:
      state.EditMuonlineVersion[action.name].slice(action.index, 1);
      return {
        ...state,
        EditMuonlineVersion: {
          ...state.EditMuonlineVersion,
          [action.name]: state.EditMuonlineVersion[action.name].slice(0)
        }
      };
    case CHANGE_FORM_RATING:
      state[action.formName].Rating = action.value;
      return { ...state, [action.formName]: { ...state[action.formName] } };
    case GET_MOD_LIST_SUCCESS:
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, ModId: action.data[0]._id },
        EditYugiohMod: action.data[0]
      };
    case GET_DECK_LIST_SUCCESS:
      return {
        ...state,
        EditYugiohDeck: action.data[0]
      };
    case SET_FOCUS_MOD:
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, ModId: action.mod._id },
        EditYugiohMod: action.mod
      };
    case SET_FOCUS_DECK:
      return {
        ...state,
        EditYugiohDeck: action.deck
      };
    case SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS:
      return {
        ...state,
        EditYugiohMod: { ...action.data }
      };
    case SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS:
      return {
        ...state,
        EditYugiohDeck: { ...action.data }
      };
    case GET_MAP_LIST_SUCCESS:
      return {
        ...state,
        EditStarcraftMap: action.data[0]
      };
    case SET_MAP_FOCUS:
      return {
        ...state,
        EditStarcraftMap: action.map
      };
    case GET_MOD_DETAIL_SUCCESS:
      return { ...state, EditStarcraftMod: { ...action.data } };
    case GET_CAMPAIGN_DETAIL_SUCCESS:
      return { ...state, EditStarcraftCampaign: { ...action.data } };
    case GET_TOOL_DETAIL_SUCCESS:
      return { ...state, EditMuonlineTool: { ...action.data } };
    case GET_VERSION_DETAIL_SUCCESS:
      return { ...state, EditMuonlineVersion: { ...action.data } };
    case SET_FOCUS_VIP_SYSTEM:
      return { ...state, EditDS9799VipSystem: { ...action.system } };
    case GET_VIP_SYSTEMS_SUCCESS:
      return { ...state, EditDS9799VipSystem: action.data[0] };
    default:
      return state;
  }
};
