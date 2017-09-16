import FormModal from 'components/FormModal';
import { connect } from 'react-redux';

import { submitAddFlashForm } from 'modules/flashGame';

export default connect(
  ({ page, forms }) => {
    let formBody;
    switch (page.addModalId) {
      case 'addFlashGameModal':
        formBody = forms.AddFlashGame;
        break;
      default:
        break;
    }
    return {
      id: page.addModalId,
      formBody: formBody
    };
  },
  dispatch => {
    return {
      onSubmit(id, formBody) {
        switch (id) {
          case 'addFlashGameModal':
            return dispatch(submitAddFlashForm(formBody));
          default:
            return;
        }
      }
    };
  }
)(FormModal);
