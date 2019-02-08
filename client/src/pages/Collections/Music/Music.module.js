import _ from 'underscore';
import { actionCreator, shuffleList as shuffle } from 'helpers';
import { toastSuccess } from 'common/Toast';

import services from './Music.services';

const ADD_SONGS = 'music/ADD_SONGS';
const EDIT_SONG = 'music/EDIT_SONG';
const GET_SONGS = 'music/GET_SONGS';
const SEARCH_SONG = 'music/SEARCH_SONG';
const DELETE_SONGS = 'muisc/DELETE_SONGS';
const GET_LYRICS = 'music/GET_LYRICS';

const ADD_TO_LIST = 'music/ADD_TO_LIST';
const NEW_PLAYLIST = 'music/NEW_PLAYLIST';
const REMOVE_FROM_LIST = 'music/REMOVE_FROM_LIST';
const SHUFFLE_LIST = 'music/SHUFFLE_LIST';
const TOGGLE_PLAY = 'music/TOGGLE_PLAY';
const TOGGLE_LOOP_SONG = 'music/TOGGLE_LOOP_SONG';
const TOGGLE_LOOP_LIST = 'music/TOGGLE_LOOP_LIST';
const PLAY_SONG = 'music/PLAY_SONG';

const PLAY_END = 'music/PLAY_END';
const SORT_SONGS = 'music/SORT_SONGS';
const PLAY_SONGS = 'music/PLAY_SONGS';

const NEXT_SONG = 'music/NEXT_SONG';
const PREVIOUS_SONG = 'music/PREVIOUS_SONG';
const SET_PLAYED_TIME = 'music/SET_PLAYED_TIME';
const SET_DURATION = 'music/SET_DURATION';
const SEEK = 'music/SEEK';
const TOGGLE_LYRICS_BOX = 'music/TOGGLE_LYRICS_BOX';

export const addSongs = formBody => actionCreator(ADD_SONGS, services.addSongs, { payload: { formBody } })();
export const editSong = formBody => actionCreator(EDIT_SONG, services.editSong, { payload: { formBody } })();
export const getSongs = () => actionCreator(GET_SONGS, services.getSongs)();
export const searchSong = query => actionCreator(SEARCH_SONG, services.searchSong, { payload: { query } })();
export const deleteSongs = ids => actionCreator(DELETE_SONGS, services.deleteSongs, { payload: { ids } })();
export const getLyrics = () =>
  actionCreator(GET_LYRICS, services.getLyrics, {
    transformPayload({ getState }) {
      const state = getState().music;
      const currentSong = state.playList[state.currentSongIndex];
      return { id: currentSong._id };
    }
  })();

export const addToList = songs => ({ type: ADD_TO_LIST, songs });
export const nextSong = () => ({ type: NEXT_SONG });
export const newPlaylist = () => ({ type: NEW_PLAYLIST });
export const playEnd = () => ({ type: PLAY_END });
export const playSong = index => ({ type: PLAY_SONG, index });
export const previousSong = () => ({ type: PREVIOUS_SONG });
export const removeFormList = songId => ({ type: REMOVE_FROM_LIST, songId });
export const setDuration = duration => ({ type: SET_DURATION, duration });
export const setPlayedTime = playedTime => ({ type: SET_PLAYED_TIME, playedTime });
export const shuffleList = () => ({ type: SHUFFLE_LIST });
export const sortSongs = name => ({ type: SORT_SONGS, name });
export const toggleLoopSong = () => ({ type: TOGGLE_LOOP_SONG });
export const toggleLoopList = () => ({ type: TOGGLE_LOOP_LIST });
export const togglePlay = () => ({ type: TOGGLE_PLAY });
export const playSongs = songs => ({ type: PLAY_SONGS, songs });
export const seek = time => ({ type: SEEK, time });
export const toggleLyricsBox = () => ({ type: TOGGLE_LYRICS_BOX });

const initialState = {
  songs: null,
  playList: null,
  seek: null,
  currentSongIndex: 0,
  isPlaying: false,
  isLoading: false,
  isLoopSong: false,
  isLoopList: false,
  duration: null,
  playedTime: null,
  canNextSong: false,
  canPreviousSong: false,
  isAddModalLoading: false,
  lyrics: '',
  isShowLyricsBox: false,
  sort: {}
};

const ensureMediaState = state => {
  if (state.isLoopSong) {
    state.canNextSong = false;
    state.canPreviousSong = false;
  } else if (state.isLoopList) {
    state.canNextSong = true;
    state.canPreviousSong = true;
  } else {
    state.canNextSong = state.currentSongIndex < state.playList.length;
    state.canPreviousSong = state.currentSongIndex > 0;
  }
  return state;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_SONGS}_START`:
      return { ...state, isAddModalLoading: true };
    case `${ADD_SONGS}_SUCCESS`:
      toastSuccess('Added Songs Successfull');
      return { ...state, songs: _.union(state.songs, action.payload), isAddModalLoading: false };

    case `${GET_SONGS}_START`:
      return { ...state, isLoading: true };
    case `${GET_SONGS}_SUCCESS`:
      return {
        ...state,
        songs: [...action.payload],
        playList: [...action.payload],
        isLoading: false,
        canNextSong: action.payload.length > 1
      };
    case `${EDIT_SONG}_SUCCESS`:
      state.songs = state.songs.map(song => {
        if (song._id === action.payload._id) {
          return action.payload;
        }
        return song;
      });
      state.playList = state.playList.map(song => {
        if (song._id === action.payload._id) {
          return action.payload;
        }
        return song;
      });
      return {
        ...state,
        playList: state.playList.slice(0),
        songs: state.songs.slice(0),
        lyrics: action.params.formBody.Lyrics ? action.params.formBody.Lyrics : state.lyrics
      };
    case `${SEARCH_SONG}_SUCCESS`:
      return { ...state, songs: action.payload.slice(0) };

    case NEXT_SONG: {
      if (state.isLoopList && state.currentSongIndex >= state.playList.length - 1) {
        state.currentSongIndex = 0;
      } else {
        state.currentSongIndex += 1;
      }
      return { ...ensureMediaState(state) };
    }

    case PREVIOUS_SONG: {
      if (state.isLoopList && state.currentSongIndex <= 0) {
        state.currentSongIndex = state.playList.length - 1;
      } else {
        state.currentSongIndex -= 1;
      }
      return { ...ensureMediaState(state) };
    }

    case TOGGLE_PLAY:
      state.isPlaying = !state.isPlaying;
      if (!state.playList) {
        return { ...state };
      }
      return { ...ensureMediaState(state) };

    case TOGGLE_LOOP_LIST: {
      state.isLoopList = !state.isLoopList;
      return { ...ensureMediaState(state) };
    }
    case TOGGLE_LOOP_SONG: {
      state.isLoopSong = !state.isLoopSong;
      return { ...ensureMediaState(state) };
    }
    case SET_PLAYED_TIME:
      return { ...state, playedTime: action.playedTime };
    case SET_DURATION:
      return { ...state, duration: action.duration };
    case NEW_PLAYLIST:
      return { ...state, currentSongIndex: 0, playList: [], canNextSong: false, canPreviousSong: false, duration: 0 };
    case PLAY_SONG:
      return { ...state, currentSongIndex: action.index };

    case SHUFFLE_LIST:
      shuffle(state.playList);
      state.currentSongIndex = 0;
      toastSuccess('Playlist has been rearranged');
      const nextState = ensureMediaState(state);
      return { ...nextState, playList: nextState.playList.slice(0) };

    case PLAY_END: {
      if (state.isLoopList && state.currentSongIndex >= state.playList.length - 1) {
        state.currentSongIndex = 0;
      } else if (state.currentSongIndex >= state.playList.length - 1) {
        state.isPlaying = false;
      } else {
        state.currentSongIndex += 1;
      }
      return { ...ensureMediaState(state) };
    }

    case REMOVE_FROM_LIST: {
      state.playList = state.playList.filter(song => song._id !== action.songId);
      return { ...ensureMediaState(state) };
    }

    case ADD_TO_LIST: {
      const songList = _.pluck(state.playList, '_id');
      action.songs.forEach(song => {
        if (!_.contains(songList, song._id)) {
          state.playList.push(song);
        }
      });
      return { ...ensureMediaState(state) };
    }

    case `${DELETE_SONGS}_SUCCESS`: {
      state.playList = state.playList.filter(song => !_.contains(action.payload.ids, song._id));
      state.songs = state.songs.filter(song => !_.contains(action.payload.ids, song._id));
      const nextState = ensureMediaState(state);
      return {
        ...nextState,
        playList: nextState.playList.slice(0),
        songs: nextState.songs.slice(0)
      };
    }

    case PLAY_SONGS: {
      const willPlaySongIds = _.pluck(action.songs, '_id');
      state.playList = state.playList.filter(song => !_.contains(willPlaySongIds, song._id));
      const songIndex = state.playList.length;
      state.playList = state.playList.concat(action.songs);
      const nextState = ensureMediaState(state);
      return {
        ...nextState,
        currentSongIndex: songIndex,
        playList: nextState.playList.slice(0),
        isPlaying: true
      };
    }

    case `${ADD_SONGS}_FAIL`:
      return { ...state, isAddModalLoading: false };

    case SORT_SONGS:
      let sort = {};
      sort[action.name] = state.sort[action.name];
      if (sort[action.name]) {
        sort[action.name] = sort[action.name] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sort[action.name] = 'ASC';
      }
      return {
        ...state,
        sort: { ...sort },
        songs:
          sort[action.name] === 'ASC'
            ? _.sortBy(state.songs, action.name).slice(0)
            : _.sortBy(state.songs, action.name)
                .reverse()
                .slice(0)
      };

    case SEEK:
      return { ...state, seek: action.time };
    case `${GET_LYRICS}_SUCCESS`:
      return { ...state, lyrics: action.payload.lyrics };
    case TOGGLE_LYRICS_BOX: {
      return { ...state, isShowLyricsBox: !state.isShowLyricsBox };
    }

    default:
      return state;
  }
};
