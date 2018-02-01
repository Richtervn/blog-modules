import { actionCreator } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './Music.services';

const GET_SONGS = 'music/GET_SONGS';
const ADD_SONG = 'music/ADD_SONG';
const SEARCH_SONG = 'music/SEARCH_SONG';

const TOGGLE_PLAY = 'music/TOGGLE_PLAY';

const SET_PLAYED_TIME = 'music/SET_PLAYED_TIME';
const SET_DURATION = 'music/SET_DURATION';
const NEXT_SONG = 'music/NEXT_SONG';
const PREVIOUS_SONG = 'music/PREVIOUS_SONG';

export const getSongs = actionCreator(GET_SONGS, services.getSongs);
export const addSong = formBody => actionCreator(ADD_SONG, services.addSong, formBody)();
export const searchSong = query => actionCreator(SEARCH_SONG, services.searchSong, query)();

export const togglePlay = () => ({ type: TOGGLE_PLAY });
export const setPlayedTime = playedTime => ({ type: SET_PLAYED_TIME, playedTime });
export const setDuration = duration => ({ type: SET_DURATION, duration });
export const nextSong = () => ({ type: NEXT_SONG });
export const previousSong = () => ({ type: PREVIOUS_SONG });

const initialState = {
  songs: null,
  currentSongIndex: 0,
  isPlaying: false,
  isLoading: false,
  isLoopTrack: false,
  isLoopList: false,
  duration: null,
  playedTime: null,
  canNextSong: false,
  canPreviousSong: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SONGS}_START`:
      return { ...state, isLoading: true };
    case `${GET_SONGS}_SUCCESS`:
      return { ...state, songs: action.data, isLoading: false, canNextSong: action.data.length > 1 };

    case NEXT_SONG: {
      const stateWillChange = {};
      if (state.currentSongIndex + 1 >= state.songs.length) {
        stateWillChange.canNextSong = false;
      }
      stateWillChange.currentSongIndex = state.currentSongIndex + 1;
      stateWillChange.canPreviousSong = true;
      return { ...state, ...stateWillChange };
    }

    case PREVIOUS_SONG: {
      const stateWillChange = {};
      if (state.currentSongIndex - 1 <= 0) {
        stateWillChange.canPreviousSong = false;
      }
      stateWillChange.currentSongIndex = state.currentSongIndex - 1;
      return { ...state, ...stateWillChange };
    }

    case TOGGLE_PLAY:
      return { ...state, isPlaying: !state.isPlaying };
    case SET_PLAYED_TIME:
      return { ...state, playedTime: action.playedTime };
    case SET_DURATION:
      return { ...state, duration: action.duration };

    case `${GET_SONGS}_FAIL`:
    case `${ADD_SONG}_FAIL`:
    case `${SEARCH_SONG}_FAIL`:
      toastError(action.error);
      return state;

    default:
      return state;
  }
};

// import { music } from 'services';
// import _ from 'underscore';
// import actionCreator from 'factories/actionCreator';
// import { toast } from 'react-toastify';

// const shuffle = a => {
//   for (let i = a.length; i; i--) {
//     let j = Math.floor(Math.random() * i);
//     [a[i - 1], a[j]] = [a[j], a[i - 1]];
//   }
//   return a;
// };

// const SUBMIT_ADD_MUSIC_FORM_START = 'forms/SUBMIT_ADD_MUSIC_FORM_START';
// export const SUBMIT_ADD_MUSIC_FORM_SUCESS = 'forms/SUBMIT_ADD_MUSIC_FORM_SUCESS';
// const SUBMIT_ADD_MUSIC_FORM_FAIL = 'forms/SUBMIT_ADD_MUSIC_FORM_FAIL';

// const GET_ALL_SONGS_START = 'music/GET_ALL_SONGS_START';
// const GET_ALL_SONGS_SUCCESS = 'music/GET_ALL_SONGS_SUCCESS';
// const GET_ALL_SONGS_FAIL = 'music/GET_ALL_SONGS_FAIL';

// const SEARCH_SONG_START = 'music/SEARCH_SONG_START';
// const SEARCH_SONG_SUCCESS = 'music/SEARCH_SONG_SUCCESS';
// const SEARCH_SONG_FAIL = 'music/SEARCH_SONG_FAIL';

// const SET_CURRENT_SONG = 'music/SET_CURRENT_SONG';
// const SET_LOOP_TRACK = 'music/SET_LOOP_TRACK';
// const SET_LOOP_LIST = 'music/SET_LOOP_LIST';
// const NEXT_TRACK = 'music/NEXT_TRACK';
// const PREVIOUS_TRACK = 'music/PREVIOUS_TRACK';
// const SHUFFLE_LIST = 'music/SHUFFLE_LIST';
// const REMOVE_SONG = 'music/REMOVE_SONG';
// const ADD_PLAYLIST = 'music/ADD_PLAYLIST';
// const NEW_PLAYLIST = 'music/NEW_PLAYLIST';
// const SORT_SONG_LIST = 'music/SORT_SONG_LIST';

// export const getAllSongs = actionCreator(
//   GET_ALL_SONGS_START,
//   GET_ALL_SONGS_SUCCESS,
//   GET_ALL_SONGS_FAIL,
//   music.getAll
// );

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

// export const nextTrack = () => ({ type: NEXT_TRACK });
// export const previoustTrack = () => ({ type: PREVIOUS_TRACK });
// export const setCurrentSong = song => ({ type: SET_CURRENT_SONG, song });
// export const setLoopTrack = () => ({ type: SET_LOOP_TRACK });
// export const setLoopList = () => ({ type: SET_LOOP_LIST });
// export const shuffleList = () => ({ type: SHUFFLE_LIST });
// export const removeSong = song => ({ type: REMOVE_SONG, song });
// export const addPlaylist = song => ({ type: ADD_PLAYLIST, song });
// export const newPlaylist = () => ({ type: NEW_PLAYLIST });
// export const sortSongList = name => ({ type: SORT_SONG_LIST, name });

// export default (
//   state = {
//     songsList: null,
//     playList: [],
//     currentSong: null,
//     isStartPlay: false,
//     isLoopTrack: false,
//     isLoopList: false,
//     sort: {}
//   },
//   action
// ) => {
//   let index;
//   switch (action.type) {
//     case GET_ALL_SONGS_SUCCESS:
//       return { ...state, songsList: action.data, playList: action.data };
//     case SEARCH_SONG_SUCCESS:
//       return { ...state, songsList: action.data.slice(0) };
//     case SUBMIT_ADD_MUSIC_FORM_SUCESS:
//       state.songsList.push(action.data);
//       return { ...state, songsList: state.songsList.slice(0) };
//     case SET_CURRENT_SONG:
//       return { ...state, currentSong: { ...action.song }, isStartPlay: true };
//     case NEXT_TRACK:
//       let nextSong;
//       index = state.playList.findIndex(song => song._id == state.currentSong._id);
//       nextSong = state.playList[index + 1];
//       if (state.isLoopTrack) {
//         nextSong = state.currentSong;
//       }
//       if (state.isLoopList && !nextSong) {
//         nextSong = state.playList[0];
//       }
//       return { ...state, currentSong: nextSong };
//     case PREVIOUS_TRACK:
//       index = state.playList.findIndex(song => song._id == state.currentSong._id);
//       return { ...state, currentSong: state.playList[index - 1] };
//     case REMOVE_SONG:
//       return {
//         ...state,
//         playList: state.playList.filter(song => song._id != action.song._id).slice(0)
//       };
//     case SET_LOOP_TRACK:
//       return { ...state, isLoopTrack: !state.isLoopTrack, isLoopList: false };
//     case SET_LOOP_LIST:
//       return { ...state, isLoopTrack: false, isLoopList: !state.isLoopList };
//     case SHUFFLE_LIST:
//       shuffle(state.playList);
//       return { ...state, playList: state.playList.slice(0) };
//     case NEW_PLAYLIST:
//       return { ...state, playList: [], currentSong: null };
//     case ADD_PLAYLIST:
//       if (!_.findWhere(state.playList, action.song)) {
//         state.playList.push(action.song);
//       }
//       return { ...state, playList: state.playList.slice(0) };
//     case SORT_SONG_LIST:
//       let sort = {};
//       sort[action.name] = state.sort[action.name];
//       if (sort[action.name]) {
//         sort[action.name] = sort[action.name] == 'ASC' ? 'DESC' : 'ASC';
//       } else {
//         sort[action.name] = 'ASC';
//       }
//       return {
//         ...state,
//         sort: { ...sort },
//         songsList:
//           sort[action.name] == 'ASC'
//             ? _.sortBy(state.songsList, action.name).slice(0)
//             : _.sortBy(state.songsList, action.name)
//                 .reverse()
//                 .slice(0)
//       };

//     case SEARCH_SONG_FAIL:
//     case GET_ALL_SONGS_FAIL:
//     case SUBMIT_ADD_MUSIC_FORM_FAIL:
//       toast.error(`${action.error}`, {
//         position: toast.POSITION.TOP_LEFT,
//         className: 'toast-error'
//       });
//       return state;
//     default:
//       return state;
//   }
// };
