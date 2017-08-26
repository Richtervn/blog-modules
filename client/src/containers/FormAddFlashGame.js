import React from 'react';
import { connect } from 'react-redux';

import { changeAddFlashForm } from 'modules/forms';
import AddFlashGame from 'components/Forms/AddFlashGame';

export default connect(
  null,
  dispatch => ({
    onChange(event) {
      dispatch(changeAddFlashForm(event));
    }
  })
)(AddFlashGame);
