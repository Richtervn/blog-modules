import { connect } from 'react-redux';
import Login from './Login.component';

import { setCurrentUserPage } from '../../Darksteam97d99i.module';

export default connect(null, dispatch => ({
  onSetCurrentPage(page) {
    dispatch(setCurrentUserPage(page));
  }
}))(Login);
