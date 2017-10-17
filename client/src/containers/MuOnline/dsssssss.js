import Darksteam97d99i from 'components/MuOnline/Darksteam97d99i';
import { connect } from 'react-redux';

import {
  changeActiveChannel,
  changeActiveSideForm,
  register,
  login,
  logout,
  editProfile,
  changeUserPage,
  changeAdminPage,
  changeServerPage,
  getCharacters,
  setFocusCharacter,
  addPoint,
  reset,
  grandReset,
  resetQuest,
  clearAddPointError,
  clearResetError,
  clearBankingError,
  clearGrandResetError,
  clearResetQuestError,
  getGameSetting,
  getServerInfo,
  deposit,
  loan,
  withdraw,
  transfer,
  buyCredit,
  adminGetAccounts,
  getData,
  adminSetActiveAccount
} from 'modules/MuOnline/darksteam97d99i';

export default connect(
  ({ darksteam97d99i }) => ({
    user: darksteam97d99i.user,
    characters: darksteam97d99i.characters,
    gameSetting: darksteam97d99i.gameSetting,
    serverInfo: darksteam97d99i.serverInfo,
    focusCharacter: darksteam97d99i.focusCharacter,
    activeChannel: darksteam97d99i.viewControl.activeChannel,
    activeSideForm: darksteam97d99i.viewControl.activeSideForm,
    errorRegister: darksteam97d99i.error.Register,
    errorLogin: darksteam97d99i.error.Login,
    errorAddPoint: darksteam97d99i.error.AddPoint,
    errorReset: darksteam97d99i.error.Reset,
    errorBanking: darksteam97d99i.error.Banking,
    errorGrandReset: darksteam97d99i.error.GrandReset,
    errorResetQuest: darksteam97d99i.error.ResetQuest,
    userPage: darksteam97d99i.viewControl.userPage,
    serverPage: darksteam97d99i.viewControl.serverPage,
    adminPage: darksteam97d99i.viewControl.adminPage,
    adminAccounts: darksteam97d99i.allAccounts,
    data: darksteam97d99i.data,
    adminActiveAccount: darksteam97d99i.adminFocusAccount
  }),
  dispatch => ({
    onChangeActiveChannel(channel) {
      dispatch(changeActiveChannel(channel));
    },
    onChangeActiveSideForm(form) {
      dispatch(changeActiveSideForm(form));
    },
    onRegister(formBody) {
      dispatch(register(formBody));
    },
    onLogin(formBody) {
      dispatch(login(formBody));
    },
    onLogout() {
      dispatch(logout());
    },
    onEditProfile(formBody) {
      dispatch(editProfile(formBody));
    },
    onChangeUserPage(page) {
      dispatch(changeUserPage(page));
    },
    onChangeServerPage(page) {
      dispatch(changeServerPage(page));
    },
    onChangeAdminPage(page) {
      dispatch(changeAdminPage(page));
    },
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onSetFocusCharacter(character) {
      dispatch(setFocusCharacter(character));
    },
    onAddPoint(query) {
      dispatch(addPoint(query));
    },
    onClearAddPointError() {
      dispatch(clearAddPointError());
    },
    onReset(query) {
      dispatch(reset(query));
    },
    onClearResetError() {
      dispatch(clearResetError());
    },
    onGetGameSetting() {
      dispatch(getGameSetting());
    },
    onGetServerInfo() {
      dispatch(getServerInfo());
    },
    onClearBankingError() {
      dispatch(clearBankingError());
    },
    onClearGrandResetError() {
      dispatch(clearGrandResetError());
    },
    onClearResetQuestError() {
      dispatch(clearResetQuestError());
    },
    onDeposit(query) {
      dispatch(deposit(query));
    },
    onWithdraw(query) {
      dispatch(withdraw(query));
    },
    onLoan(query) {
      dispatch(loan(query));
    },
    onTransfer(query) {
      dispatch(transfer(query));
    },
    onBuyCredit(query) {
      dispatch(buyCredit(query));
    },
    onAdminGetAccounts(query) {
      dispatch(adminGetAccounts(query));
    },
    onGetData(file) {
      dispatch(getData(file));
    },
    onGrandReset(query) {
      dispatch(grandReset(query));
    },
    onResetQuest(query) {
      dispatch(resetQuest(query));
    },
    onAdminSetActiveAccount(account) {
      dispatch(adminSetActiveAccount(account));
    }
  })
)(Darksteam97d99i);
