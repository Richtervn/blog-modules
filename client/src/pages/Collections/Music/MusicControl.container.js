import MusicControl from './MusicControl.component';
import { connect } from 'react-redux';

import {
  togglePlay,
  nextSong,
  previousSong,
  toggleLoopSong,
  toggleLoopList,
  shuffleList,
  newPlaylist,
  editSong,
  removeFormList,
  playSong
} from './Music.module';

const mapStateToProps = ({ music }) => ({
  currentSong: music.playList ? music.playList[music.currentSongIndex] : null,
  playList: music.playList,
  duration: music.duration,
  playedTime: music.playedTime,
  isPlaying: music.isPlaying,
  canNextSong: music.canNextSong,
  canPreviousSong: music.canPreviousSong,
  isLoopSong: music.isLoopSong,
  isLoopList: music.isLoopList
});

const mapDispatchToProps = dispatch => ({
  onNewList() {
    dispatch(newPlaylist());
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
  onEditSong(formBody) {
    dispatch(editSong(formBody));
  },
  onRemoveFromList(songId) {
    dispatch(removeFormList(songId));
  },
  onPlaySong(index){
    dispatch(playSong(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicControl);
