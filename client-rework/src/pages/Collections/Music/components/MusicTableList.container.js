import { connect } from 'react-redux';
import MusicTableList from './MusicTableList.component';

import { sortSongs, editSong, addToList } from '../Music.module';

export default connect(
  ({ music }) => ({ songs: music.songs, sort: music.sort }),
  dispatch => ({
    onSortSongs(name) {
      dispatch(sortSongs(name));
    },
    onEditSong(formBody) {
      dispatch(editSong(formBody));
    },
    onAddToList(songs) {
      dispatch(addToList(songs));
    }
  })
)(MusicTableList);
