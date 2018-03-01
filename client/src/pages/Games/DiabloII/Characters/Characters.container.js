import { connect } from 'react-redux';
import Characters from './Characters.component';

import { getCharacters } from '../DiabloII.module';

export default connect(
  ({ diabloII }) => ({
    characters: diabloII.characters
  }),
  dispatch => ({
    onGetCharacters() {
      dispatch(getCharacters());
    }
  })
)(Characters);
