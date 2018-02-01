import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer.component';

import { getSongs, setDuration, setPlayedTime } from '../Music.module';

const mapStateToProps = ({ music }) => ({
  songs: music.songs,
  currentSongIndex: music.currentSongIndex,
  isPlaying: music.isPlaying,
  isLoopSong: music.isLoopSong,
  isLoopList: music.isLoopList
});

const mapDispatchToProps = dispatch => ({
  onGetSongs() {
    dispatch(getSongs());
  },
  onSetDuration(duration) {
    dispatch(setDuration(duration));
  },
  onSetPlayedTime(playedTime) {
    dispatch(setPlayedTime(playedTime));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
