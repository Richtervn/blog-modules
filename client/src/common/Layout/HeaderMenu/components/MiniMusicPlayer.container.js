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
  seek,
  toggleLyricsBox
} from 'pages/Collections/Music/Music.module';

const mapStateToProps = ({ music }) => ({
  isHaveList: music.playList && music.playList.length > 0,
  currentSong: music.playList ? music.playList[music.currentSongIndex] : null,
  isLoading: music.isLoading,
  isPlaying: music.isPlaying,
  canNextSong: music.canNextSong,
  canPreviousSong: music.canPreviousSong,
  isLoopSong: music.isLoopSong,
  isLoopList: music.isLoopList,
  duration: music.duration,
  playedTime: music.playedTime,
  isShowLyricsBox: music.isShowLyricsBox
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
  },
  onToggleLyricsBox() {
    dispatch(toggleLyricsBox());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniMusicPlayer);
