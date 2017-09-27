import Darksteam97d99i from 'components/MuOnline/Darksteam97d99i';
import { connect } from 'react-redux';

import { changeActiveChannel, changeActiveSideForm, register } from 'modules/MuOnline/darksteam97d99i';

export default connect(
  ({ darksteam97d99i }) => ({
    activeChannel: darksteam97d99i.viewControl.activeChannel,
    activeSideForm: darksteam97d99i.viewControl.activeSideForm
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
    }
  })
)(Darksteam97d99i);
