import YugiohPoc from 'components/Games/YugiohPoc';
import { connect } from 'react-redux';

import { submitYugiohModForm } from 'modules/forms';
import { getModList, setFocusMod } from 'modules/yugiohPoc';

export default connect(
  ({ forms, yugiohPoc }) => ({
    addModFormState: forms.AddYugiohMod,
    modList: yugiohPoc.modList,
    modFocus: yugiohPoc.modFocus
  }),
  dispatch => ({
    onModSubmit(id, formBody) {
      dispatch(submitYugiohModForm(formBody));
    },
    onGetModList() {
      dispatch(getModList());
    },
    onSelectMod(mod){
      dispatch(setFocusMod(mod));
    }
  })
)(YugiohPoc);
