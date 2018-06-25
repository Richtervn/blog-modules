import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer.component';

import { getSongs, setDuration, setPlayedTime, playEnd } from './Music.module';

const mapStateToProps = ({ music }) => ({
  playList: music.playList,
  currentSongIndex: music.currentSongIndex,
  isPlaying: music.isPlaying,
  isLoopSong: music.isLoopSong,
  isLoopList: music.isLoopList,
  seek: music.seek
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
  },
  onPlayEnd() {
    dispatch(playEnd());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
