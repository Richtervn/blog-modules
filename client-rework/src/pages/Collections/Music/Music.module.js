import _ from 'underscore';
import { actionCreator, shuffleList as shuffle } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './Music.services';

const GET_SONGS = 'music/GET_SONGS';
const ADD_SONG = 'music/ADD_SONG';
const SEARCH_SONG = 'music/SEARCH_SONG';

const TOGGLE_PLAY = 'music/TOGGLE_PLAY';
const TOGGLE_LOOP_SONG = 'music/TOGGLE_LOOP_SONG';
const TOGGLE_LOOP_LIST = 'music/TOGGLE_LOOP_LIST';
const SHUFFLE_LIST = 'music/SHUFFLE_LIST';

const PLAY_END = 'music/PLAY_END';
const SORT_PLAY_LIST = 'music/SORT_PLAY_LIST';

const SET_PLAYED_TIME = 'music/SET_PLAYED_TIME';
const SET_DURATION = 'music/SET_DURATION';
const NEXT_SONG = 'music/NEXT_SONG';
const PREVIOUS_SONG = 'music/PREVIOUS_SONG';

export const getSongs = actionCreator(GET_SONGS, services.getSongs);
export const addSong = formBody => actionCreator(ADD_SONG, services.addSong, formBody)();
export const searchSong = query => actionCreator(SEARCH_SONG, services.searchSong, query)();

export const togglePlay = () => ({ type: TOGGLE_PLAY });
export const toggleLoopSong = () => ({ type: TOGGLE_LOOP_SONG });
export const toggleLoopList = () => ({ type: TOGGLE_LOOP_LIST });
export const setPlayedTime = playedTime => ({ type: SET_PLAYED_TIME, playedTime });
export const setDuration = duration => ({ type: SET_DURATION, duration });
export const nextSong = () => ({ type: NEXT_SONG });
export const previousSong = () => ({ type: PREVIOUS_SONG });
export const playEnd = () => ({ type: PLAY_END });
export const shuffleList = () => ({ type: SHUFFLE_LIST });
export const sortPlayList = name => ({ type: SORT_PLAY_LIST, name });

const initialState = {
  songs: null,
  playList: null,
  currentSongIndex: 0,
  isPlaying: false,
  isLoading: false,
  isLoopSong: false,
  isLoopList: false,
  duration: null,
  playedTime: null,
  canNextSong: false,
  canPreviousSong: false,
  sort: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SONGS}_START`:
      return { ...state, isLoading: true };
    case `${GET_SONGS}_SUCCESS`:
      return {
        ...state,
        songs: action.data,
        playList: action.data,
        isLoading: false,
        canNextSong: action.data.length > 1
      };

    case NEXT_SONG: {
      const stateWillChange = {};
      if (!state.isLoopList && state.currentSongIndex + 1 >= state.playList.length) {
        stateWillChange.canNextSong = false;
      }
      if (!state.isLoopList) {
        stateWillChange.currentSongIndex = state.currentSongIndex + 1;
      } else {
        if (state.currentSongIndex + 1 >= state.playList.length) {
          stateWillChange.currentSongIndex = 0;
        }
      }
      stateWillChange.canPreviousSong = true;
      return { ...state, ...stateWillChange };
    }

    case PREVIOUS_SONG: {
      const stateWillChange = {};
      if (!state.isLoopList && state.currentSongIndex - 1 <= 0) {
        stateWillChange.canPreviousSong = false;
      }
      if (!state.isLoopList) {
        stateWillChange.currentSongIndex = state.currentSongIndex - 1;
      } else {
        stateWillChange.currentSongIndex = state.playList.length;
      }
      return { ...state, ...stateWillChange };
    }

    case TOGGLE_PLAY:
      return { ...state, isPlaying: !state.isPlaying };
    case TOGGLE_LOOP_LIST:
      return { ...state, isLoopList: !state.isLoopList };
    case TOGGLE_LOOP_SONG: {
      const stateWillChange = {};
      if (!state.isLoopSong === true) {
        stateWillChange.isLoopSong = true;
        stateWillChange.canNextSong = false;
        stateWillChange.canPreviousSong = false;
      } else {
        stateWillChange.isLoopSong = false;
        if (!state.isLoopList) {
          stateWillChange.canNextSong = state.currentSongIndex + 1 >= state.playList.length;
          stateWillChange.canPreviousSong = state.currentSongIndex - 1 <= 0;
        } else {
          stateWillChange.canNextSong = true;
          stateWillChange.canPreviousSong = true;
        }
      }
      return { ...state, ...stateWillChange };
    }
    case SET_PLAYED_TIME:
      return { ...state, playedTime: action.playedTime };
    case SET_DURATION:
      return { ...state, duration: action.duration };

    case SHUFFLE_LIST:
      shuffle(state.playList);
      toastSuccess('Playlist has been rearranged');
      return { ...state, playList: state.playList.slice(0), currentSongIndex: 0 };

    case PLAY_END: {
      const stateWillChange = {};
      if (state.isLoopSong) {
      }
      return { ...state };
    }

    case `${GET_SONGS}_FAIL`:
    case `${ADD_SONG}_FAIL`:
    case `${SEARCH_SONG}_FAIL`:
      toastError(action.error);
      return state;

    case SORT_PLAY_LIST:
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
        songsList:
          sort[action.name] === 'ASC'
            ? _.sortBy(state.playList, action.name).slice(0)
            : _.sortBy(state.playList, action.name)
                .reverse()
                .slice(0)
      };

    default:
      return state;
  }
};

// import { music } from 'services';

// import actionCreator from 'factories/actionCreator';
// import { toast } from 'react-toastify';

// const SUBMIT_ADD_MUSIC_FORM_START = 'forms/SUBMIT_ADD_MUSIC_FORM_START';
// export const SUBMIT_ADD_MUSIC_FORM_SUCESS = 'forms/SUBMIT_ADD_MUSIC_FORM_SUCESS';
// const SUBMIT_ADD_MUSIC_FORM_FAIL = 'forms/SUBMIT_ADD_MUSIC_FORM_FAIL';

// const SEARCH_SONG_START = 'music/SEARCH_SONG_START';
// const SEARCH_SONG_SUCCESS = 'music/SEARCH_SONG_SUCCESS';
// const SEARCH_SONG_FAIL = 'music/SEARCH_SONG_FAIL';

// const REMOVE_SONG = 'music/REMOVE_SONG';
// const ADD_PLAYLIST = 'music/ADD_PLAYLIST';
// const NEW_PLAYLIST = 'music/NEW_PLAYLIST';
// const SORT_SONG_LIST = 'music/SORT_SONG_LIST';

// export const submitAddMusicForm = formBody =>
//   actionCreator(
//     SUBMIT_ADD_MUSIC_FORM_START,
//     SUBMIT_ADD_MUSIC_FORM_SUCESS,
//     SUBMIT_ADD_MUSIC_FORM_FAIL,
//     music.add,
//     formBody
//   )();

// export const searchSong = option =>
//   actionCreator(SEARCH_SONG_START, SEARCH_SONG_SUCCESS, SEARCH_SONG_FAIL, music.search, option)();

// export const removeSong = song => ({ type: REMOVE_SONG, song });
// export const addPlaylist = song => ({ type: ADD_PLAYLIST, song });
// export const newPlaylist = () => ({ type: NEW_PLAYLIST });

// export default (
//   state = {
//     songsList: null,
//     playList: [],
//     currentSong: null,
//     isStartPlay: false,
//     isLoopTrack: false,
//     isLoopList: false,
//
//   },
//   action
// ) => {
//   let index;
//   switch (action.type) {

//     case SEARCH_SONG_SUCCESS:
//       return { ...state, songsList: action.data.slice(0) };
//     case SUBMIT_ADD_MUSIC_FORM_SUCESS:
//       state.songsList.push(action.data);
//       return { ...state, songsList: state.songsList.slice(0) };
//     case SET_CURRENT_SONG:
//       return { ...state, currentSong: { ...action.song }, isStartPlay: true };

//     case REMOVE_SONG:
//       return {
//         ...state,
//         playList: state.playList.filter(song => song._id != action.song._id).slice(0)
//       };

//     case NEW_PLAYLIST:
//       return { ...state, playList: [], currentSong: null };
//     case ADD_PLAYLIST:
//       if (!_.findWhere(state.playList, action.song)) {
//         state.playList.push(action.song);
//       }
//       return { ...state, playList: state.playList.slice(0) };
