import { connect } from 'react-redux';
import MusicForm from './MusicForm.component';

import { addSong } from '../Music.module';

const mapDispatchToProps = dispatch => ({
  onAddSong(formBody) {
    dispatch(addSong(formBody));
  }
});

export default connect(null, mapDispatchToProps)(MusicForm);
