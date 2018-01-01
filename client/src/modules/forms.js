import commonFormChange from 'factories/commonFormChange';

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

import {
  GET_MODS_SUCCESS as GET_D2_MODS_SUCCESS,
  GET_MOD_DETAIL_SUCCESS as GET_D2_MOD_DETAIL_SUCCESS,
  GET_TOOL_DETAIL_SUCCESS as GET_D2_TOOL_DETAIL_SUCCESS,
  SET_FOCUS_CHARACTER as SET_FOCUS_D2_CHARACTER,
  SET_FOCUS_SURVIVAL_KIT as SET_FOCUS_D2_SURVIVAL_KIT,
  GET_TOOLS_SUCCESS as GET_D2_TOOLS_SUCCESS,
  GET_CHARACTERS_SUCCESS as GET_D2_CHARACTERS_SUCCESS,
  GET_SURVIVAL_KITS_SUCCESS as GET_D2_SURVIVAL_KITS_SUCCESS
} from 'modules/Games/diabloII';

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
const CHANGE_D2_ADD_MOD_FORM = 'forms/CHANGE_D2_ADD_MOD_FORM';
const CHANGE_D2_ADD_TOOL_FORM = 'forms/CHANGE_D2_ADD_TOOL_FORM';
const CHANGE_D2_ADD_CHARACTER_FORM = 'forms/CHANGE_D2_ADD_CHARACTER_FORM';
const CHANGE_D2_ADD_SURVIVAL_KIT_FORM = 'forms/CHANGE_D2_ADD_SURVIVAL_KIT_FORM';
const CHANGE_D2_EDIT_MOD_FORM = 'forms/CHANGE_D2_EDIT_MOD_FORM';
const CHANGE_D2_EDIT_TOOL_FORM = 'forms/CHANGE_D2_EDIT_TOOL_FORM';
const CHANGE_D2_EDIT_CHARACTER_FORM = 'forms/CHANGE_D2_EDIT_CHARACTER_FORM';
const CHANGE_D2_EDIT_SURVIVAL_KIT_FORM = 'forms/CHANGE_D2_EDIT_SURVIVAL_KIT_FORM';

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
const ADD_ARRAY_D2_ADD_MOD_FORM = 'forms/ADD_ARRAY_D2_ADD_MOD_FORM';
const ADD_ARRAY_D2_ADD_TOOL_FORM = 'forms/ADD_ARRAY_D2_ADD_TOOL_FORM';
const ADD_ARRAY_D2_ADD_CHARACTER_FORM = 'forms/ADD_ARRAY_D2_ADD_CHARACTER_FORM';
const ADD_ARRAY_D2_ADD_SURVIVAL_KIT_FORM = 'forms/ADD_ARRAY_D2_ADD_SURVIVAL_KIT_FORM';
const ADD_ARRAY_D2_EDIT_MOD_FORM = 'forms/ADD_ARRAY_D2_EDIT_MOD_FORM';
const ADD_ARRAY_D2_EDIT_TOOL_FORM = 'forms/ADD_ARRAY_D2_EDIT_TOOL_FORM';
const ADD_ARRAY_D2_EDIT_CHARACTER_FORM = 'forms/ADD_ARRAY_D2_EDIT_CHARACTER_FORM';
const ADD_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM = 'forms/ADD_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM';

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
const REMOVE_ARRAY_D2_ADD_MOD_FORM = 'forms/REMOVE_ARRAY_D2_ADD_MOD_FORM';
const REMOVE_ARRAY_D2_ADD_TOOL_FORM = 'forms/REMOVE_ARRAY_D2_ADD_TOOL_FORM';
const REMOVE_ARRAY_D2_ADD_CHARACTER_FORM = 'forms/REMOVE_ARRAY_D2_ADD_CHARACTER_FORM';
const REMOVE_ARRAY_D2_ADD_SURVIVAL_KIT_FORM = 'forms/REMOVE_ARRAY_D2_ADD_SURVIVAL_KIT_FORM';
const REMOVE_ARRAY_D2_EDIT_MOD_FORM = 'forms/REMOVE_ARRAY_D2_EDIT_MOD_FORM';
const REMOVE_ARRAY_D2_EDIT_TOOL_FORM = 'forms/REMOVE_ARRAY_D2_EDIT_TOOL_FORM';
const REMOVE_ARRAY_D2_EDIT_CHARACTER_FORM = 'forms/REMOVE_ARRAY_D2_EDIT_CHARACTER_FORM';
const REMOVE_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM = 'forms/REMOVE_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM';

const CHANGE_FORM_RATING = 'forms/CHANGE_FORM_RATING';
const CHANGE_FORM_CHECK = 'forms/CHANGE_FORM_CHECK';

export const changeFormCheck = (name, formName) => ({
  type: CHANGE_FORM_CHECK,
  name,
  formName
});

export const changeAddDs9799VipSystemForm = event => ({
  type: CHANGE_ADD_DS9799_VIP_SYSTEM_FORM,
  event
});
export const changeEditDs9799VipSystemForm = event => ({
  type: CHANGE_EDIT_DS9799_VIP_SYSTEM_FORM,
  event
});
export const changeAddFlashForm = event => ({ type: CHANGE_ADD_FLASH_FORM, event });
export const changeAddMusicForm = event => ({ type: CHANGE_ADD_MUSIC_FORM, event });
export const changeAddStarcraftModForm = event => ({ type: CHANGE_ADD_STARCRAFT_MOD_FORM, event });
export const changeEditStarcraftModForm = event => ({
  type: CHANGE_EDIT_STARTCRAFT_MOD_FORM,
  event
});
export const changeAddYugiohModForm = (event, index) => ({
  type: CHANGE_ADD_YUGIOH_MOD_FORM,
  event,
  index
});
export const changeAddStarcraftCampaignForm = event => ({
  type: CHANGE_ADD_STARCRAFT_CAMPAIGN_FORM,
  event
});
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
export const changeD2AddModForm = (event, index) => ({
  type: CHANGE_D2_ADD_MOD_FORM,
  event,
  index
});
export const changeD2AddToolForm = (event, index) => ({
  type: CHANGE_D2_ADD_TOOL_FORM,
  event,
  index
});
export const changeD2AddCharacterForm = (event, index) => ({
  type: CHANGE_D2_ADD_CHARACTER_FORM,
  event,
  index
});
export const changeD2AddSurvivalKitForm = (event, index) => ({
  type: CHANGE_D2_ADD_SURVIVAL_KIT_FORM,
  event,
  index
});
export const changeD2EditModForm = (event, index) => ({
  type: CHANGE_D2_EDIT_MOD_FORM,
  event,
  index
});
export const changeD2EditToolForm = (event, index) => ({
  type: CHANGE_D2_EDIT_TOOL_FORM,
  event,
  index
});
export const changeD2EditSurvivalKitForm = (event, index) => ({
  type: CHANGE_D2_EDIT_SURVIVAL_KIT_FORM,
  event,
  index
});
export const changeD2EditCharacterForm = (event, index) => ({
  type: CHANGE_D2_EDIT_CHARACTER_FORM,
  event,
  index
});

export const addArrayYugiohModForm = name => ({ type: ADD_ARRAY_YUGIOH_MOD_FORM, name });
export const addArrayYugiohDeckForm = name => ({ type: ADD_ARRAY_YUGIOH_DECK_FORM, name });
export const addArrayYugiohEditModForm = name => ({ type: ADD_ARRAY_YUGIOH_EDIT_MOD_FORM, name });
export const addArrayYugiohEditDeckForm = name => ({ type: ADD_ARRAY_YUGIOH_EDIT_DECK_FORM, name });
export const addArrayStarcraftMapForm = name => ({ type: ADD_ARRAY_STARCRAFT_MAP_FORM, name });
export const addArrayStarcraftEditMapForm = name => ({
  type: ADD_ARRAY_STARCRAFT_EDIT_MAP_FORM,
  name
});
export const addArrayMuonlineToolForm = name => ({ type: ADD_ARRAY_MUONLINE_TOOL_FORM, name });
export const addArrayMuonlineVersionForm = name => ({
  type: ADD_ARRAY_MUONLINE_VERSION_FORM,
  name
});
export const addArrayMuonlineEditToolForm = name => ({
  type: ADD_ARRAY_MUONLINE_EDIT_TOOL_FORM,
  name
});
export const addArrayMuonlineEditVersionForm = name => ({
  type: ADD_ARRAY_MUONLINE_EDIT_VERSION_FORM,
  name
});
export const addArrayD2AddModForm = name => ({
  type: ADD_ARRAY_D2_ADD_MOD_FORM,
  name
});
export const addArrayD2EditModForm = name => ({
  type: ADD_ARRAY_D2_EDIT_MOD_FORM,
  name
});
export const addArrayD2AddToolForm = name => ({
  type: ADD_ARRAY_D2_ADD_TOOL_FORM,
  name
});
export const addArrayD2EditToolForm = name => ({
  type: ADD_ARRAY_D2_EDIT_TOOL_FORM,
  name
});
export const addArrayD2AddCharacterForm = name => ({
  type: ADD_ARRAY_D2_ADD_CHARACTER_FORM,
  name
});
export const addArrayD2EditCharacterForm = name => ({
  type: ADD_ARRAY_D2_EDIT_CHARACTER_FORM,
  name
});
export const addArrayD2AddSurvivalKitForm = name => ({
  type: ADD_ARRAY_D2_ADD_SURVIVAL_KIT_FORM,
  name
});
export const addArrayD2EditSurvivalKitForm = name => ({
  type: ADD_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM,
  name
});
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
export const removeArrayD2AddModForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_ADD_MOD_FORM,
  name,
  index
});
export const removeArrayD2EditModForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_EDIT_MOD_FORM,
  name,
  index
});
export const removeArrayD2EditCharacterForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_EDIT_CHARACTER_FORM,
  name,
  index
});
export const removeArrayD2AddCharacterForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_ADD_CHARACTER_FORM,
  name,
  index
});
export const removeArrayD2AddToolForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_ADD_TOOL_FORM,
  name,
  index
});
export const removeArrayD2EditToolForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_EDIT_TOOL_FORM,
  name,
  index
});
export const removeArrayD2AddSurvivalKitForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_ADD_SURVIVAL_KIT_FORM,
  name,
  index
});
export const removeArrayD2EditSurvivalKitForm = (name, index) => ({
  type: REMOVE_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM,
  name,
  index
});

export const changeFormRating = (formName, value) => ({
  type: CHANGE_FORM_RATING,
  formName,
  value
});

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
    EditDS9799VipSystem: null,
    AddD2Mod: {
      Archive: null,
      Icon: null,
      Background: null,
      Name: '',
      ModVersion: '1.08',
      Version: '',
      Overview: [''],
      Description: '',
      Rating: 0
    },
    EditD2Mod: null,
    AddD2Tool: {
      Archive: null,
      Icon: null,
      Name: '',
      Description: '',
      Overview: [''],
      Rating: 0
    },
    EditD2Tool: null,
    AddD2SurvivalKit: {
      file: null,
      Name: '',
      Type: 'Character',
      Description: '',
      Overview: [''],
      Rating: 0
    },
    EditD2SurvivalKit: null,
    AddD2Character: {
      file: '',
      Name: '',
      Title: 'No Title',
      Class: 'Amazon',
      Level: 0,
      ModId: '',
      Overview: [''],
      Rating: 0,
      IsCount: true
    },
    EditD2Character: null
  },
  action
) => {
  let formValue;
  console.log(action);
  switch (action.type) {
    case CHANGE_D2_ADD_MOD_FORM:
      formValue = commonFormChange(
        state.AddD2Mod,
        action.event,
        action.index,
        ['Overview'],
        ['Archive', 'Icon', 'Background']
      );
      return { ...state, AddD2Mod: formValue };
    case CHANGE_D2_EDIT_MOD_FORM:
      formValue = commonFormChange(
        state.EditD2Mod,
        action.event,
        action.index,
        ['Overview'],
        ['Archive', 'Icon', 'Background']
      );
      return { ...state, EditD2Mod: { ...formValue } };
    case CHANGE_D2_ADD_TOOL_FORM:
      formValue = commonFormChange(state.AddD2Tool, action.event, action.index, ['Overview'], ['Archive', 'Icon']);
      return { ...state, AddD2Tool: formValue };
    case CHANGE_D2_EDIT_TOOL_FORM:
      formValue = commonFormChange(state.EditD2Tool, action.event, action.index, ['Overview'], ['Archive', 'Icon']);
      return { ...state, EditD2Tool: { ...formValue } };
    case CHANGE_D2_ADD_SURVIVAL_KIT_FORM:
      formValue = commonFormChange(state.AddD2SurvivalKit, action.event, action.index, ['Overview']);
      return { ...state, AddD2SurvivalKit: formValue };
    case CHANGE_D2_EDIT_SURVIVAL_KIT_FORM:
      formValue = commonFormChange(state.EditD2SurvivalKit, action.event, action.index, ['Overview']);
      return { ...state, EditD2SurvivalKit: { ...formValue } };
    case CHANGE_D2_ADD_CHARACTER_FORM:
      formValue = commonFormChange(state.AddD2Character, action.event, action.index, ['Overview']);
      return { ...state, AddD2Character: formValue };
    case CHANGE_D2_EDIT_CHARACTER_FORM:
      formValue = commonFormChange(state.EditD2Character, action.event, action.index, ['Overview']);
      return { ...state, EditD2Character: { ...formValue } };
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
      formValue = commonFormChange(state.AddYugiohMod, action.event, action.index, ['Credits'], ['Icon', 'Image']);
      return { ...state, AddYugiohMod: formValue };
    case CHANGE_ADD_YUGIOH_DECK_FORM:
      formValue = commonFormChange(state.AddYugiohDeck, action.event, action.index, ['Pros', 'Cons'], ['Image']);
      return { ...state, AddYugiohDeck: formValue };
    case CHANGE_EDIT_YUGIOH_MOD_FORM:
      formValue = commonFormChange(state.EditYugiohMod, action.event, action.index, ['Credits'], ['Icon', 'Image']);
      return { ...state, EditYugiohMod: { ...formValue } };
    case CHANGE_EDIT_YUGIOH_DECK_FORM:
      formValue = commonFormChange(state.EditYugiohDeck, action.event, action.index, ['Pros', 'Cons'], ['Image']);
      return { ...state, EditYugiohDeck: { ...formValue } };
    case CHANGE_ADD_STARCRAFT_MAP_FORM:
      formValue = commonFormChange(state.AddStarcraftMap, action.event, action.index, ['Tipntrick']);
      return { ...state, AddStarcraftMap: { ...formValue } };
    case CHANGE_EDIT_STARCRAFT_MAP_FORM:
      formValue = commonFormChange(state.EditStarcraftMap, action.event, action.index, ['Tipntrick']);
      return { ...state, EditStarcraftMap: { ...formValue } };
    case CHANGE_ADD_MUONLINE_TOOL_FORM:
      formValue = commonFormChange(state.AddMuonlineTool, action.event, action.index, ['Credits'], ['Archive', 'Icon']);
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
    case ADD_ARRAY_D2_ADD_CHARACTER_FORM:
      state.AddD2Character[action.name].push('');
      return {
        ...state,
        AddD2Character: { ...state.AddD2Character, [action.name]: state.AddD2Character[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_EDIT_CHARACTER_FORM:
      state.EditD2Character[action.name].push('');
      return {
        ...state,
        EditD2Character: { ...state.EditD2Character, [action.name]: state.EditD2Character[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_ADD_MOD_FORM:
      state.AddD2Mod[action.name].push('');
      return {
        ...state,
        AddD2Mod: { ...state.AddD2Mod, [action.name]: state.AddD2Mod[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_EDIT_MOD_FORM:
      state.EditD2Mod[action.name].push('');
      return {
        ...state,
        EditD2Mod: { ...state.EditD2Mod, [action.name]: state.EditD2Mod[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_ADD_TOOL_FORM:
      state.AddD2Tool[action.name].push('');
      return {
        ...state,
        AddD2Tool: { ...state.AddD2Tool, [action.name]: state.AddD2Tool[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_EDIT_TOOL_FORM:
      state.EditD2Tool[action.name].push('');
      return {
        ...state,
        EditD2Tool: { ...state.EditD2Tool, [action.name]: state.EditD2Tool[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_ADD_SURVIVAL_KIT_FORM:
      state.AddD2SurvivalKit[action.name].push('');
      return {
        ...state,
        AddD2SurvivalKit: { ...state.AddD2SurvivalKit, [action.name]: state.AddD2SurvivalKit[action.name].slice(0) }
      };
    case ADD_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM:
      state.EditD2SurvivalKit[action.name].push('');
      return {
        ...state,
        EditD2SurvivalKit: { ...state.EditD2SurvivalKit, [action.name]: state.EditD2SurvivalKit[action.name].slice(0) }
      };
    case ADD_ARRAY_YUGIOH_MOD_FORM:
      state.AddYugiohMod[action.name].push('');
      return {
        ...state,
        AddYugiohMod: {
          ...state.AddYugiohMod,
          [action.name]: state.AddYugiohMod[action.name].slice(0)
        }
      };
    case ADD_ARRAY_YUGIOH_DECK_FORM:
      state.AddYugiohDeck[action.name].push('');
      return {
        ...state,
        AddYugiohDeck: {
          ...state.AddYugiohDeck,
          [action.name]: state.AddYugiohDeck[action.name].slice(0)
        }
      };
    case ADD_ARRAY_YUGIOH_EDIT_MOD_FORM:
      state.EditYugiohMod[action.name].push('');
      return {
        ...state,
        EditYugiohMod: {
          ...state.EditYugiohMod,
          [action.name]: state.EditYugiohMod[action.name].slice(0)
        }
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
        EditYugiohDeck: {
          ...state.EditYugiohDeck,
          [action.name]: state.EditYugiohDeck[action.name].slice(0)
        }
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
        AddYugiohMod: {
          ...state.AddYugiohMod,
          [action.name]: state.AddYugiohMod[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_YUGIOH_DECK_FORM:
      state.AddYugiohDeck[action.name].splice(action.index, 1);
      return {
        ...state,
        AddYugiohDeck: {
          ...state.AddYugiohDeck,
          [action.name]: state.AddYugiohDeck[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_YUGIOH_EDIT_MOD_FORM:
      state.EditYugiohMod[action.name].splice(action.index, 1);
      return {
        ...state,
        EditYugiohMod: {
          ...state.EditYugiohMod,
          [action.name]: state.EditYugiohMod[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_YUGIOH_EDIT_DECK_FORM:
      state.EditYugiohDeck[action.name].splice(action.index, 1);
      return {
        ...state,
        EditYugiohDeck: {
          ...state.EditYugiohDeck,
          [action.name]: state.EditYugiohMod[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_TOOL_FORM:
      state.AddMuonlineTool[action.name].splice(action.index, 1);
      return {
        ...state,
        AddMuonlineTool: {
          ...state.AddMuonlineTool,
          [action.name]: state.AddMuonlineTool[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_VERSION_FORM:
      state.AddMuonlineVersion[action.name].splice(action.index, 1);
      return {
        ...state,
        AddMuonlineVersion: {
          ...state.AddMuonlineVersion,
          [action.name]: state.AddMuonlineVersion[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_EDIT_TOOL_FORM:
      state.EditMuonlineTool[action.name].splice(action.index, 1);
      return {
        ...state,
        EditMuonlineTool: {
          ...state.EditMuonlineTool,
          [action.name]: state.EditMuonlineTool[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_MUONLINE_EDIT_VERSION_FORM:
      state.EditMuonlineVersion[action.name].splice(action.index, 1);
      return {
        ...state,
        EditMuonlineVersion: {
          ...state.EditMuonlineVersion,
          [action.name]: state.EditMuonlineVersion[action.name].slice(0)
        }
      };
    case REMOVE_ARRAY_D2_ADD_MOD_FORM:
      state.AddD2Mod[action.name].splice(action.index, 1);
      return {
        ...state,
        AddD2Mod: { ...state.AddD2Mod, [action.name]: state.AddD2Mod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_EDIT_MOD_FORM:
      state.EditD2Mod[action.name].splice(action.index, 1);
      return {
        ...state,
        EditD2Mod: { ...state.EditD2Mod, [action.name]: state.EditD2Mod[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_ADD_TOOL_FORM:
      state.AddD2Tool[action.name].splice(action.index, 1);
      return {
        ...state,
        AddD2Tool: { ...state.AddD2Tool, [action.name]: state.AddD2Tool[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_EDIT_TOOL_FORM:
      state.EditD2Tool[action.name].splice(action.index, 1);
      return {
        ...state,
        EditD2Tool: { ...state.EditD2Tool, [action.name]: state.EditD2Tool[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_ADD_SURVIVAL_KIT_FORM:
      state.AddD2SurvivalKit[action.name].splice(action.index, 1);
      return {
        ...state,
        AddD2SurvivalKit: { ...state.AddD2SurvivalKit, [action.name]: state.AddD2SurvivalKit[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_EDIT_SURVIVAL_KIT_FORM:
      state.EditD2SurvivalKit[action.name].splice(action.index, 1);
      return {
        ...state,
        EditD2SurvivalKit: { ...state.EditD2SurvivalKit, [action.name]: state.EditD2SurvivalKit[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_ADD_CHARACTER_FORM:
      state.AddD2Character[action.name].splice(action.index, 1);
      return {
        ...state,
        AddD2Character: { ...state.AddD2Character, [action.name]: state.AddD2Character[action.name].slice(0) }
      };
    case REMOVE_ARRAY_D2_EDIT_CHARACTER_FORM:
      state.EditD2Character[action.name].splice(action.index, 1);
      return {
        ...state,
        EditD2Character: { ...state.EditD2Character, [action.name]: state.EditD2Character[action.name].slice(0) }
      };

    case CHANGE_FORM_RATING:
      state[action.formName].Rating = action.value;
      return { ...state, [action.formName]: { ...state[action.formName] } };
    case CHANGE_FORM_CHECK:
      state[action.formName][action.name] = !state[action.formName][action.name];
      return { ...state, [action.formName]: { ...state[action.formName] } };

    case GET_MOD_LIST_SUCCESS:
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, ModId: action.data[0]._id },
        EditYugiohMod: action.data[0]
      };

    case GET_DECK_LIST_SUCCESS:
      return { ...state, EditYugiohDeck: action.data[0] };
    case SET_FOCUS_MOD:
      return {
        ...state,
        AddYugiohDeck: { ...state.AddYugiohDeck, ModId: action.mod._id },
        EditYugiohMod: action.mod
      };
    case SET_FOCUS_DECK:
      return { ...state, EditYugiohDeck: action.deck };
    case SUBMIT_ADD_YUGIOH_MOD_FORM_SUCCESS:
      return { ...state, EditYugiohMod: { ...action.data } };
    case SUBMIT_ADD_YUGIOH_DECK_FORM_SUCCESS:
      return { ...state, EditYugiohDeck: { ...action.data } };
    case GET_MAP_LIST_SUCCESS:
      return { ...state, EditStarcraftMap: action.data[0] };
    case SET_MAP_FOCUS:
      return { ...state, EditStarcraftMap: action.map };
    case GET_D2_MOD_DETAIL_SUCCESS:
      return { ...state, EditD2Mod: action.data };
    case GET_D2_TOOL_DETAIL_SUCCESS:
      return { ...state, EditD2Tool: action.data };
    case SET_FOCUS_D2_CHARACTER:
      return { ...state, EditD2Character: action.character };
    case SET_FOCUS_D2_SURVIVAL_KIT:
      return { ...state, EditD2SurvivalKit: action.survivalKit };
    case GET_D2_CHARACTERS_SUCCESS:
      return { ...state, EditD2Character: action.data[0] || { Overview: [''] } };
    case GET_D2_TOOLS_SUCCESS:
      return { ...state, EditD2Tool: action.data[0] };
    case GET_D2_SURVIVAL_KITS_SUCCESS:
      return { ...state, EditD2SurvivalKit: action.data[0] };
    case GET_D2_MODS_SUCCESS:
      return { ...state, AddD2Character: { ...state.AddD2Character, ModId: action.data[0]._id || 0 } };
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
