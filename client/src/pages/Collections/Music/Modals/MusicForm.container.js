import { connect } from 'react-redux';
import MusicForm from './MusicForm.component';

import { addSongs } from '../Music.module';

const mapDispatchToProps = dispatch => ({
  onAddSongs(formBody) {
    dispatch(addSongs(formBody));
  }
});

export default connect(null, mapDispatchToProps)(MusicForm);
