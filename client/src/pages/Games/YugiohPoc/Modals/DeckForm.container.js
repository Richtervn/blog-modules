import _ from 'underscore';
import { connect } from 'react-redux';
import DeckForm from './DeckForm.component';

import { addDeck, editDeck } from '../YugiohPoc.module';

export default connect(
  ({ yugiohPoc }) => ({
    modId: yugiohPoc.focusMod,
    deck: _.findWhere(yugiohPoc.decks, { _id: yugiohPoc.focusDeck })
  }),
  dispatch => ({
    onAddDeck(formBody) {
      dispatch(addDeck(formBody));
    },
    onEditDeck(formBody) {
      dispatch(editDeck(formBody));
    }
  })
)(DeckForm);
