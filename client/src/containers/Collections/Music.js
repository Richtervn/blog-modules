import Music from 'components/Collections/Music';
import { connect } from 'react-redux';

import {
  getAllSongs,
  setCurrentSong,
  nextTrack,
  setLoopTrack,
  previousTrack,
  setLoopList,
  shuffleList,
  removeSong,
  addPlaylist,
  newPlaylist,
  sortSongList,
  searchSong,
  submitAddMusicForm
} from 'modules/Collections/music';

export default connect(
  ({ music, forms }) => ({
    songsList: music.songsList,
    addSongForm: forms.AddMusic,
    playList: music.playList,
    currentSong: music.currentSong,
    isStartPlay: music.isStartPlay,
    isLoopTrack: music.isLoopTrack,
    isLoopList: music.isLoopList,
    sort: music.sort
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
    },
    onAddPlaylist(song){
      dispatch(addPlaylist(song));
    },
    onNewPlaylist(){
      dispatch(newPlaylist());
    },
    onSortSongList(name){
      dispatch(sortSongList(name));
    },
    onSearchInput(option){
      dispatch(searchSong(option));
    }
  })
)(Music);
