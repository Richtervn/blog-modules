import { connect } from 'react-redux';
import MusicTableList from './MusicTableList.component';

import { sortSongs, editSong, addToList, deleteSongs, playSongs } from '../Music.module';

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
    },
    onDeleteSongs(ids) {
      dispatch(deleteSongs(ids));
    },
    onPlaySongs(songs) {
      dispatch(playSongs(songs));
    }
  })
)(MusicTableList);
