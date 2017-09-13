import Music from 'components/Music';
import { connect } from 'react-redux';

import { submitAddMusicForm } from 'modules/forms';
import {
  getAllSongs,
  setCurrentSong,
  nextTrack,
  setLoopTrack,
  previousTrack,
  setLoopList,
  shuffleList,
  removeSong
} from 'modules/music';

export default connect(
  ({ music, forms }) => ({
    songsList: music.songsList,
    addSongForm: forms.AddMusic,
    playList: music.playList,
    currentSong: music.currentSong,
    isStartPlay: music.isStartPlay,
    isLoopTrack: music.isLoopTrack,
    isLoopList: music.isLoopList
  }),
  dispatch => ({
    onGetSongsList() {
      dispatch(getAllSongs());
    },
    onAddSongSubmit(id, formBody) {
      dispatch(submitAddMusicForm(formBody));
    },
    onPlaySong(song) {
      dispatch(setCurrentSong(song));
    },
    onNextTrack() {
      dispatch(nextTrack());
    },
    onLoopTrack() {
      dispatch(setLoopTrack());
    },
    onPreviousTrack() {
      dispatch(previousTrack());
    },
    onLoopList() {
      dispatch(setLoopList());
    },
    onShuffleList() {
      dispatch(shuffleList());
    },
    onRemoveSong(song){
      dispatch(removeSong(song));
    }
  })
)(Music);
