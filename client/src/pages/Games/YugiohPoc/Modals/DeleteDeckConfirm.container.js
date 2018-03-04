import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteDeckConfirm from './DeleteDeckConfirm.component';

import { deleteDeck } from '../YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    deck: _.findWhere(yugiohPoc.decks, { _id: yugiohPoc.focusDeck })
  }),
  dispatch => ({
    onDeleteDeck(id) {
      dispatch(deleteDeck(id));
    }
  })
)(DeleteDeckConfirm);
