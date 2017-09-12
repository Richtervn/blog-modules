import AddFlashGame from 'components/Forms/AddFlashGame';
import { connect } from 'react-redux';

import { changeAddFlashForm } from 'modules/forms';

export default connect(
  null,
  dispatch => ({
    onChange(event) {
      dispatch(changeAddFlashForm(event));
    }
  })
)(AddFlashGame);
