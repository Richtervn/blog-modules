import _ from 'underscore';
import { connect } from 'react-redux';
import CharacterDetail from './CharacterDetail.component';

import { addPoint, reset, grandReset, resetQuest } from './Character.module';

export default connect(
  ({ ds9799_character }) => ({
    character: _.findWhere(ds9799_character.characters, { Name: ds9799_character.focusCharacter })
  }),
  dispatch => ({
    onAddPoint(query) {
      dispatch(addPoint(query));
    },
    onReset(query) {
      dispatch(reset(query));
    },
    onGrandReset(query) {
      dispatch(grandReset(query));
    },
    onResetQuest(query) {
      dispatch(resetQuest(query));
    }
  })
)(CharacterDetail);
