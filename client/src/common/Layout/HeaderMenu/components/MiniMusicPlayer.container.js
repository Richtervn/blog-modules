import { connect } from 'react-redux';
import MiniMusicPlayer from './MiniMusicPlayer.component';

import {
  editSong,
  togglePlay,
  nextSong,
  previousSong,
  toggleLoopSong,
  toggleLoopList,
  shuffleList,
  seek
} from 'pages/Collections/Music/Music.module';

const mapStateToProps = ({ music, appControl }) => ({
  isHaveList: music.playList && music.playList.length > 0,
  currentSong: music.playList ? music.playList[music.currentSongIndex] : null,
  isLoading: music.isLoading,
  isPlaying: music.isPlaying,
  canNextSong: music.canNextSong,
  canPreviousSong: music.canPreviousSong,
  isLoopSong: music.isLoopSong,
  isLoopList: music.isLoopList,
  duration: music.duration,
  playedTime: music.playedTime
});

const mapDispatchToProps = dispatch => ({
  onEditSong(formBody) {
    dispatch(editSong(formBody));
  },
  onTogglePlay() {
    dispatch(togglePlay());
  },
  onNextSong() {
    dispatch(nextSong());
  },
  onPreviousSong() {
    dispatch(previousSong());
  },
  onToggleLoopSong() {
    dispatch(toggleLoopSong());
  },
  onToggleLoopList() {
    dispatch(toggleLoopList());
  },
  onShuffleList() {
    dispatch(shuffleList());
  },
  onSeek(time) {
    dispatch(seek(time));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniMusicPlayer);
