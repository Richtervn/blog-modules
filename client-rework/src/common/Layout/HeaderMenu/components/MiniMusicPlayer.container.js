import { connect } from 'react-redux';
import MiniMusicPlayer from './MiniMusicPlayer.component';

import { togglePlay, nextSong, previousSong } from 'pages/Collections/Music/Music.module';

const mapStateToProps = ({ music, appControl }) => ({
  isLoadedSong: music.songs && music.songs.length > 0,
  currentSong: music.songs ? music.songs[music.currentSongIndex] : null,
  isLoading: music.isLoading,
  isPlaying: music.isPlaying,
  progress:
    (appControl.isShowHeaderMenu &&
      music.duration &&
      music.playedTime &&
      Math.floor(music.playedTime / music.duration * 100)) ||
    0,
  canNextSong: music.canNextSong,
  canPreviousSong: music.canPreviousSong
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniMusicPlayer);
