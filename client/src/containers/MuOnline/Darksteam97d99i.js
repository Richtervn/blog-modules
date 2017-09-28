import Darksteam97d99i from 'components/MuOnline/Darksteam97d99i';
import { connect } from 'react-redux';

import { changeActiveChannel, changeActiveSideForm, register, login, logout } from 'modules/MuOnline/darksteam97d99i';

export default connect(
  ({ darksteam97d99i }) => ({
    user: darksteam97d99i.user,
    activeChannel: darksteam97d99i.viewControl.activeChannel,
    activeSideForm: darksteam97d99i.viewControl.activeSideForm,
    errorRegister: darksteam97d99i.error.Register,
    errorLogin: darksteam97d99i.error.Login,
    userPage: darksteam97d99i.viewControl.userPage
  }),
  dispatch => ({
    onChangeActiveChannel(channel) {
      dispatch(changeActiveChannel(channel));
    },
    onChangeActiveSideForm(form){
      dispatch(changeActiveSideForm(form));
    },
    onRegister(formBody){
      dispatch(register(formBody));
    },
    onLogin(formBody){
      dispatch(login(formBody));
    },
    onLogout(){
      dispatch(logout());
    }
  })
)(Darksteam97d99i);
