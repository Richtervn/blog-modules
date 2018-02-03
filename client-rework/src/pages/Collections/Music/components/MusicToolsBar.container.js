import { connect } from 'react-redux';
import MusicToolsBar from './MusicToolsBar.component';

import { searchSong } from '../Music.module';

export default connect(null, dispatch => ({
  onSearchSong(query) {
    dispatch(searchSong(query));
  }
}))(MusicToolsBar);
