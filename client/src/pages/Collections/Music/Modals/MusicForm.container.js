import { connect } from 'react-redux';
import MusicForm from './MusicForm.component';

import { addSongs } from '../Music.module';

export default connect(
  ({ music }) => ({
    isLoading: music.isAddModalLoading
  }),
  dispatch => ({
    onAddSongs(formBody) {
      dispatch(addSongs(formBody));
    }
  })
)(MusicForm);
