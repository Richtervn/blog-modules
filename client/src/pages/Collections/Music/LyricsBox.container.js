import { connect } from 'react-redux';
import LyricsBox from './LyricsBox.component';

import { editSong, toggleLyricsBox } from './Music.module';

export default connect(
  ({ music, appControl }) => ({
    isShow: music.isShowLyricsBox,
    lyrics: music.lyrics,
    song: music.playList ? music.playList[music.currentSongIndex] : {},
    currentSongIndex: music.currentSongIndex
  }),
  dispatch => ({
    onSave(formBody) {
      dispatch(editSong(formBody));
    },
    onClose() {
      dispatch(toggleLyricsBox());
    }
  })
)(LyricsBox);
