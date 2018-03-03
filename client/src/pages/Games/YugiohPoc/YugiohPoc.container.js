import { connect } from 'react-redux';
import YugiohPoc from './YugiohPoc.component';

import { getMods, getDecks } from './YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    mods: yugiohPoc.mods,
    decks: yugiohPoc.decks
  }),
  dispatch => ({
    onGetMods() {
      dispatch(getMods());
    },
    onGetDecks(modId) {
      dispatch(getDecks(modId));
    }
  })
)(YugiohPoc);
