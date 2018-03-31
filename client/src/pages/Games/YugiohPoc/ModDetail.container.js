import _ from 'underscore';
import { connect } from 'react-redux';
import ModDetail from './ModDetail.component';

import { setFocusDeck, editMod, editDeck } from './YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    mod: _.findWhere(yugiohPoc.mods, { _id: yugiohPoc.focusMod }),
    decks: yugiohPoc.decks
  }),
  dispatch => ({
    onSetFocusDeck(id) {
      dispatch(setFocusDeck(id));
    },
    onEditMod(formBody) {
      dispatch(editMod(formBody));
    },
    onEditDeck(formBody) {
      dispatch(editDeck(formBody));
    }
  })
)(ModDetail);
