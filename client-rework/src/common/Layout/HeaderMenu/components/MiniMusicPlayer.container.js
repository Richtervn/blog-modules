import { connect } from 'react-redux';
import MiniMusicPlayer from './MiniMusicPlayer.component';

import {
  togglePlay,
  nextSong,
  previousSong,
  toggleLoopSong,
  toggleLoopList,
  shuffleList
} from 'pages/Collections/Music/Music.module';

const mapStateToProps = ({ music, appControl }) => ({
  isHaveList: music.playList && music.playList.length > 0,
  currentSong: music.playList ? music.playList[music.currentSongIndex] : null,
  isLoading: music.isLoading,
  isPlaying: music.isPlaying,
  progress:
    (appControl.isShowHeaderMenu &&
      music.duration &&
      music.playedTime &&
      Math.floor(music.playedTime / music.duration * 100)) ||
    0,
  canNextSong: music.canNextSong,
  canPreviousSong: music.canPreviousSong,
  isLoopSong: music.isLoopSong,
  isLoopList: music.isLoopList
});

const mapDispatchToProps = dispatch => ({
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
  onShuffleList(){
    dispatch(shuffleList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniMusicPlayer);
