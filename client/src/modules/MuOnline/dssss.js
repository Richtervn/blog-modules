const CHANGE_ADMIN_PAGE = 'darksteam97d99i/CHANGE_ADMIN_PAGE';
const CHANGE_SERVER_PAGE = 'darksteam97d99i/CHANGE_SERVER_PAGE';
const SET_FOCUS_CHARACTER = 'darksteam97d99i/SET_FOCUS_CHARACTER';
const CLEAR_ADD_POINT_ERROR = 'darksteam97d99i/CLEAR_ADD_POINT_ERROR';
const CLEAR_RESET_ERROR = 'darksteam97d99i/CLEAR_RESET_ERROR';
const CLEAR_BANKING_ERROR = 'darksteam97d99i/CLEAR_BANKING_ERROR';
const CLEAR_GRAND_RESET_ERROR = 'darksteam97d99i/CLEAR_GRAND_RESET_ERROR';
const CLEAR_RESET_QUEST_ERROR = 'darksteam97d99i/CLEAR_RESET_QUEST_ERROR';
const ADMIN_SET_ACTIVE_ACCOUNT = 'darksteam97d99i/ADMIN_SET_ACTIVE_ACCOUNT';



const GET_CHARACTERS_START = 'darksteam97d99i/GET_CHARACTERS_START';
const GET_CHARACTERS_SUCCESS = 'darksteam97d99i/GET_CHARACTERS_SUCCESS';
const GET_CHARACTERS_FAIL = 'darksteam97d99i/GET_CHARACTERS_FAIL';
const ADD_POINT_START = 'darksteam97d99i/ADD_POINT_START';
const ADD_POINT_SUCCESS = 'darksteam97d99i/ADD_POINT_SUCCESS';
const ADD_POINT_FAIL = 'darksteam97d99i/ADD_POINT_FAIL';
const RESET_START = 'darksteam97d99i/RESET_START';
const RESET_SUCCESS = 'darksteam97d99i/RESET_SUCCESS';
const RESET_FAIL = 'darksteam97d99i/RESET_FAIL';
const GRAND_RESET_START = 'darksteam97d99i/GRAND_RESET_START';
const GRAND_RESET_SUCCESS = 'darksteam97d99i/GRAND_RESET_SUCCESS';
const GRAND_RESET_FAIL = 'darksteam97d99i/GRAND_RESET_FAIL';
const RESET_QUEST_START = 'darksteam97d99i/RESET_QUEST_START';
const RESET_QUEST_SUCCESS = 'darksteam97d99i/RESET_QUEST_SUCCESS';
const RESET_QUEST_FAIL = 'darksteam97d99i/RESET_QUEST_FAIL';
const DEPOSIT_START = 'darksteam97d99i/DEPOSIT_START';
const DEPOSIT_SUCCESS = 'darksteam97d99i/DEPOSIT_SUCCESS';
const DEPOSIT_FAIL = 'darksteam97d99i/DEPOSIT_FAIL';
const WITHDRAW_START = 'darksteam97d99i/WITHDRAW_START';
const WITHDRAW_SUCCESS = 'darksteam97d99i/WITHDRAW_SUCCESS';
const WITHDRAW_FAIL = 'darksteam97d99i/WITHDRAW_FAIL';
const LOAN_START = 'darksteam97d99i/LOAN_START';
const LOAN_SUCCESS = 'darksteam97d99i/LOAN_SUCCESS';
const LOAN_FAIL = 'darksteam97d99i/LOAN_FAIL';
const TRANSFER_START = 'darksteam97d99i/TRANSFER_START';
const TRANSFER_SUCCESS = 'darksteam97d99i/TRANSFER_SUCCESS';
const TRANSFER_FAIL = 'darksteam97d99i/TRANSFER_FAIL';
const BUY_CREDIT_START = 'darksteam97d99i/BUY_CREDIT_START';
const BUY_CREDIT_SUCCESS = 'darksteam97d99i/BUY_CREDIT_SUCCESS';
const BUY_CREDIT_FAIL = 'darksteam97d99i/BUY_CREDIT_FAIL';

const GET_DATA_START = 'darksteam97d99i/GET_DATA_START';
const GET_DATA_SUCCESS = 'darksteam97d99i/GET_DATA_SUCCESS';
const GET_DATA_FAIL = 'darksteam97d99i/GET_DATA_FAIL';

const ADMIN_GET_ACCOUNTS_START = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_START';
const ADMIN_GET_ACCOUNTS_SUCCESS = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_SUCCESS';
const ADMIN_GET_ACCOUNTS_FAIL = 'darksteam97d99i/ADMIN_GET_ACCOUNTS_FAIL';



export const changeUserPage = page => ({ type: CHANGE_USER_PAGE, page });
export const changeAdminPage = page => ({ type: CHANGE_ADMIN_PAGE, page });
export const changeServerPage = page => ({ type: CHANGE_SERVER_PAGE, page });
export const setFocusCharacter = character => ({ type: SET_FOCUS_CHARACTER, character });
export const clearAddPointError = () => ({ type: CLEAR_ADD_POINT_ERROR });
export const clearResetError = () => ({ type: CLEAR_RESET_ERROR });
export const clearBankingError = () => ({ type: CLEAR_BANKING_ERROR });
export const clearGrandResetError = () => ({ type: CLEAR_GRAND_RESET_ERROR });
export const clearResetQuestError = () => ({ type: CLEAR_RESET_QUEST_ERROR });



export const getCharacters = id =>
  actionCreator(
    GET_CHARACTERS_START,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAIL,
    darksteam97d99i.getCharacters,
    id
  )();
export const addPoint = query =>
  actionCreator(ADD_POINT_START, ADD_POINT_SUCCESS, ADD_POINT_FAIL, darksteam97d99i.addPoint, query)();
export const reset = query =>
  actionCreator(RESET_START, RESET_SUCCESS, RESET_FAIL, darksteam97d99i.reset, query)();
export const grandReset = query =>
  actionCreator(
    GRAND_RESET_START,
    GRAND_RESET_SUCCESS,
    GRAND_RESET_FAIL,
    darksteam97d99i.grandReset,
    query
  )();

export const resetQuest = query =>
  actionCreator(
    RESET_QUEST_START,
    RESET_QUEST_SUCCESS,
    RESET_QUEST_FAIL,
    darksteam97d99i.resetQuest,
    query
  )();


export const deposit = query =>
  actionCreator(DEPOSIT_START, DEPOSIT_SUCCESS, DEPOSIT_FAIL, darksteam97d99i.deposit, query)();
export const withdraw = query =>
  actionCreator(WITHDRAW_START, WITHDRAW_SUCCESS, WITHDRAW_FAIL, darksteam97d99i.withdraw, query)();
export const loan = query =>
  actionCreator(LOAN_START, LOAN_SUCCESS, LOAN_FAIL, darksteam97d99i.loan, query)();
export const transfer = query =>
  actionCreator(TRANSFER_START, TRANSFER_SUCCESS, TRANSFER_FAIL, darksteam97d99i.transfer, query)();
export const buyCredit = query =>
  actionCreator(BUY_CREDIT_START, BUY_CREDIT_SUCCESS, BUY_CREDIT_FAIL, darksteam97d99i.buyCredit, query)();
export const adminSetActiveAccount = account => ({ type: ADMIN_SET_ACTIVE_ACCOUNT, account });

export const adminGetAccounts = query =>
  actionCreator(
    ADMIN_GET_ACCOUNTS_START,
    ADMIN_GET_ACCOUNTS_SUCCESS,
    ADMIN_GET_ACCOUNTS_FAIL,
    darksteam97d99i.adminGetAccounts,
    query
  )();

export const getData = file => {
  const getDataStart = () => ({ type: GET_DATA_START });
  const getDataSuccess = (file, data) => ({ type: GET_DATA_SUCCESS, file, data });
  const getDataFail = error => ({ type: GET_DATA_FAIL, error: error.message });
  return async dispatch => {
    dispatch(getDataStart());
    try {
      const data = await darksteam97d99i.getMuData(file);
      if (data.message) dispatch(getDataFail(data));
      dispatch(getDataSuccess(file, data));
    } catch (e) {
      dispatch(getDataFail(e));
    }
  };
};

export default (
  state = {
    user: null,
    characters: null,
    gameSetting: null,
    serverInfo: null,
    focusCharacter: {},
    viewControl: {
      activeChannel: 'User',

      userPage: 'Introduction',
      adminPage: 'Accounts Manager',
      serverPage: 'Monster Set Base'
    },
    error: {
      Register: null,
      Login: null,
      AddPoint: null,
      Reset: null,
      Banking: null,
      GrandReset: null,
      ResetQuest: null
    },
    allAccounts: null,
    adminFocusAccount: {},
    data: {}
  },
  action
) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: { ...state.data, [action.file]: action.data } };


    case EDIT_PROFILE_SUCCESS:
      return { ...state, user: { ...state.user, ...action.data } };
    case CHANGE_USER_PAGE:
      return { ...state, viewControl: { ...state.viewControl, userPage: action.page } };
    case CHANGE_SERVER_PAGE:
      return { ...state, viewControl: { ...state.viewControl, serverPage: action.page } };
    case CHANGE_ADMIN_PAGE:
      return { ...state, viewControl: { ...state.viewControl, adminPage: action.page } };
    case GET_CHARACTERS_SUCCESS:
      return { ...state, characters: action.data, focusCharacter: action.data[0] };
    case SET_FOCUS_CHARACTER:
      return { ...state, focusCharacter: action.character };
    case ADD_POINT_SUCCESS: {
      const nextState = { ...state };
      nextState.focusCharacter[action.data.type] = action.data[action.data.type];
      nextState.focusCharacter.LevelUpPoint = action.data.LevelUpPoint;
      if (action.data.isUseBank == 'true') {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      } else {
        nextState.focusCharacter.Money = action.data.Money;
      }
      nextState.characters = nextState.characters.map(character => {
        if (character.Name == state.focusCharacter.Name) {
          character[action.data.type] = action.data[action.data.type];
          character.LevelUpPoint = action.data.LevelUpPoint;
        }
        if (!action.data.isUseBank) {
          character.Money = action.data.Money;
        }
        return character;
      });
      return {
        ...nextState,
        user: { ...nextState.user, Banking: { ...nextState.user.Banking } },
        focusCharacter: { ...nextState.focusCharacter },
        characters: nextState.characters.slice(0),
        error: { ...state.error, AddPoint: null }
      };
    }
    case RESET_SUCCESS: {
      const nextState = { ...state };
      const changedCharacter = { ...state.focusCharacter };
      if (action.data.isUseBank == 'true') {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      } else {
        changedCharacter.Money = action.data.Money;
      }
      nextState.user.MembCredits.credits = action.data.credits;
      if (action.data.Strength) changedCharacter.Strength = action.data.Strength;
      if (action.data.Dexterity) changedCharacter.Dexterity = action.data.Dexterity;
      if (action.data.Vitality) changedCharacter.Vitality = action.data.Vitality;
      if (action.data.Energy) changedCharacter.Energy = action.data.Energy;
      if (action.data.LevelUpPoint) changedCharacter.LevelUpPoint = action.data.LevelUpPoint;
      changedCharacter.Resets = action.data.Resets;
      changedCharacter.cLevel = action.data.cLevel;
      nextState.characters = nextState.characters.map(character => {
        if (character.Name == state.focusCharacter.Name) {
          return { ...changedCharacter };
        }
        return character;
      });
      return {
        ...nextState,
        user: {
          ...nextState.user,
          Banking: { ...nextState.user.Banking },
          MembCredits: { ...nextState.user.MembCredits }
        },
        focusCharacter: { ...changedCharacter },
        characters: nextState.characters.slice(0),
        error: { ...state.error, Reset: null }
      };
    }
    case GRAND_RESET_SUCCESS: {
      const nextState = { ...state };
      const changedCharacter = { ...state.focusCharacter };
      if (action.data.isUseBank == 'true') {
        nextState.user.Banking.zen_balance = action.data.zen_balance;
      } else {
        changedCharacter.Money = action.data.Money;
      }
      nextState.user.MembCredits.credits = action.data.credits;
      if (action.data.Strength) changedCharacter.Strength = action.data.Strength;
      if (action.data.Dexterity) changedCharacter.Dexterity = action.data.Dexterity;
      if (action.data.Vitality) changedCharacter.Vitality = action.data.Vitality;
      if (action.data.Energy) changedCharacter.Energy = action.data.Energy;
      if (action.data.LevelUpPoint) changedCharacter.LevelUpPoint = action.data.LevelUpPoint;
      changedCharacter.GrandResets = action.data.GrandResets;
      changedCharacter.cLevel = action.data.cLevel;
      nextState.characters = nextState.characters.map(character => {
        if (character.Name == state.focusCharacter.Name) {
          return { ...changedCharacter };
        }
        return character;
      });
      return {
        ...nextState,
        user: {
          ...nextState.user,
          Banking: { ...nextState.user.Banking },
          MembCredits: { ...nextState.user.MembCredits }
        },
        focusCharacter: { ...changedCharacter },
        characters: nextState.characters.slice(0),
        error: { ...state.error, Reset: null }
      };
    }
    case RESET_FAIL:
      return { ...state, error: { ...state.error, Reset: action.error } };
    case GRAND_RESET_FAIL:
      return { ...state, error: { ...state.error, GrandReset: action.error } };
    case RESET_QUEST_FAIL:
      return { ...state, error: { ...state.error, ResetQuest: action.error } };
    case ADD_POINT_FAIL:
      return { ...state, error: { ...state.error, AddPoint: action.error } };
    case CLEAR_ADD_POINT_ERROR:
      return { ...state, error: { ...state.error, AddPoint: null } };
    case CLEAR_RESET_ERROR:
      return { ...state, error: { ...state.error, Reset: null } };
    case CLEAR_BANKING_ERROR:
      return { ...state, error: { ...state.error, Banking: null } };
    case CLEAR_GRAND_RESET_ERROR:
      return { ...state, error: { ...state.error, GrandReset: null } };
    case CLEAR_RESET_QUEST_ERROR:
      return { ...state, error: { ...state.error, ResetQuest: null } };

    case DEPOSIT_SUCCESS: {
      const nextState = { ...state };
      nextState.user.Banking.zen_balance = action.data.zen_balance;
      nextState.user.Banking.loan_money = action.data.loan_money;
      const changedCharacter = { ...state.focusCharacter, Money: action.data.Money };
      nextState.characters = state.characters.map(character => {
        if (character.Name == changedCharacter.Name) {
          return changedCharacter;
        }
        return character;
      });
      return {
        ...nextState,
        characters: nextState.characters.slice(0),
        user: { ...nextState.user, Banking: { ...nextState.user.Banking } }
      };
    }
    case WITHDRAW_SUCCESS: {
      const nextState = { ...state };
      nextState.user.Banking.zen_balance = action.data.zen_balance;
      const changedCharacter = { ...state.focusCharacter, Money: action.data.Money };
      nextState.characters = state.characters.map(character => {
        if (character.Name == changedCharacter.Name) {
          return changedCharacter;
        }
        return character;
      });
      return {
        ...nextState,
        characters: nextState.characters.slice(0),
        user: { ...nextState.user, Banking: { ...nextState.user.Banking } }
      };
    }
    case LOAN_SUCCESS: {
      const nextState = { ...state };
      nextState.user.Banking.zen_balance = action.data.zen_balance;
      const changedCharacter = { ...state.focusCharacter, Money: action.data.Money };
      nextState.characters = state.characters.map(character => {
        if (character.Name == changedCharacter.Name) {
          return changedCharacter;
        }
        return character;
      });
      return {
        ...nextState,
        characters: nextState.characters.slice(0),
        user: { ...nextState.user, Banking: { ...nextState.user.Banking } }
      };
    }
    case TRANSFER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, Banking: { ...state.user.Banking, zen_balance: action.data.zen_balance } }
      };
    case BUY_CREDIT_SUCCESS:
      return {
        ...state,
        user: { ...state.user, Credits: { ...state.user.MembCredits, credits: action.data.credits } }
      };
    case DEPOSIT_FAIL:
      return { ...state, error: { ...state.error, Banking: action.error } };
    case WITHDRAW_FAIL:
      return { ...state, error: { ...state.error, Banking: action.error } };
    case TRANSFER_FAIL:
      return { ...state, error: { ...state.error, Banking: action.error } };
    case LOAN_FAIL:
      return { ...state, error: { ...state.error, Banking: action.error } };
    case BUY_CREDIT_FAIL:
      return { ...state, error: { ...state.error, Banking: action.error } };
    case LOGIN_FAIL:
      return { ...state, error: { ...state.error, Login: action.error } };
    case LOGOUT:
      return {
        ...state,
        user: null,
        characters: null,
        focusCharacter: {},
        viewControl: { ...state.viewControl, userPage: 'Introduction' },
        error: { Register: null, Login: null }
      };
    case ADMIN_GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        allAccounts: action.data,
        adminFocusAccount: action.data[0]
      };
    case ADMIN_SET_ACTIVE_ACCOUNT:
      return {
        ...state,
        adminFocusAccount: action.account
      };
    default:
      return state;
  }
};