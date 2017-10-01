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
  getCharacters,
  setFocusCharacter,
  addPoint,
  clearAddPointError,
  reset,
  clearResetError
} from 'modules/MuOnline/darksteam97d99i';

export default connect(
  ({ darksteam97d99i }) => ({
    user: darksteam97d99i.user,
    characters: darksteam97d99i.characters,
    focusCharacter: darksteam97d99i.focusCharacter,
    activeChannel: darksteam97d99i.viewControl.activeChannel,
    activeSideForm: darksteam97d99i.viewControl.activeSideForm,
    errorRegister: darksteam97d99i.error.Register,
    errorLogin: darksteam97d99i.error.Login,
    errorAddPoint: darksteam97d99i.error.AddPoint,
    errorReset: darksteam97d99i.error.Reset,
    userPage: darksteam97d99i.viewControl.userPage
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
    }
  })
)(Darksteam97d99i);
