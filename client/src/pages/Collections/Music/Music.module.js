import _ from 'underscore';
import React from 'react';
import { actionCreator, shuffleList as shuffle } from 'helpers';
import { toastError, toastSuccess } from 'common/Toast';

import services from './Music.services';

const ADD_SONGS = 'music/ADD_SONGS';
const EDIT_SONG = 'music/EDIT_SONG';
const GET_SONGS = 'music/GET_SONGS';
const SEARCH_SONG = 'music/SEARCH_SONG';
const DELETE_SONGS = 'muisc/DELETE_SONGS';

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

export const addSongs = formBody => actionCreator(ADD_SONGS, services.addSongs, formBody)();
export const editSong = formBody => actionCreator(EDIT_SONG, services.editSong, formBody)();
export const getSongs = actionCreator(GET_SONGS, services.getSongs);
export const searchSong = query => actionCreator(SEARCH_SONG, services.searchSong, query)();
export const deleteSongs = ids => actionCreator(DELETE_SONGS, services.deleteSongs, ids)();

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
    case `${ADD_SONGS}_SUCCESS`:
      toastSuccess('Added Songs Successfull');
      return { ...state, songs: _.union(state.songs, action.data) };

    case `${GET_SONGS}_START`:
      return { ...state, isLoading: true };
    case `${GET_SONGS}_SUCCESS`:
      return {
        ...state,
        songs: [...action.data],
        playList: [...action.data],
        isLoading: false,
        canNextSong: action.data.length > 1
      };
    case `${EDIT_SONG}_SUCCESS`:
      state.songs = state.songs.map(song => {
        if (song._id === action.data._id) {
          return action.data;
        }
        return song;
      });
      state.playList = state.playList.map(song => {
        if (song._id === action.data._id) {
          return action.data;
        }
        return song;
      });
      return { ...state, playList: state.playList.slice(0), songs: state.songs.slice(0) };
    case `${SEARCH_SONG}_SUCCESS`:
      return { ...state, songs: action.data.slice(0) };

    case NEXT_SONG: {
      const stateWillChange = {};

      if (!state.isLoopList) {
        if (state.currentSongIndex + 1 >= state.playList.length) {
          stateWillChange.canNextSong = false;
        } else {
          stateWillChange.currentSongIndex = state.currentSongIndex + 1;
        }
      } else {
        if (state.currentSongIndex + 1 >= state.playList.length) {
          stateWillChange.currentSongIndex = 0;
        } else {
          stateWillChange.currentSongIndex = state.currentSongIndex + 1;
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
        stateWillChange.currentSongIndex = state.playList.length - 1;
      }
      return { ...state, ...stateWillChange };
    }

    case TOGGLE_PLAY:
      return { ...state, isPlaying: !state.isPlaying };
    case TOGGLE_LOOP_LIST: {
      const stateWillChange = {};
      if (!state.isLoopList === true) {
        stateWillChange.isLoopList = true;
        stateWillChange.canNextSong = true;
        stateWillChange.canPreviousSong = true;
      } else {
        stateWillChange.isLoopList = false;
        stateWillChange.canNextSong = state.currentSongIndex + 1 <= state.playList.length - 1;
        stateWillChange.canPreviousSong = state.currentSongIndex - 1 >= 0;
      }
      return { ...state, ...stateWillChange };
    }
    case TOGGLE_LOOP_SONG: {
      const stateWillChange = {};
      if (!state.isLoopSong === true) {
        stateWillChange.isLoopSong = true;
        stateWillChange.canNextSong = false;
        stateWillChange.canPreviousSong = false;
      } else {
        stateWillChange.isLoopSong = false;
        if (!state.isLoopList) {
          stateWillChange.canNextSong = state.currentSongIndex + 1 <= state.playList.length - 1;
          stateWillChange.canPreviousSong = state.currentSongIndex - 1 >= 0;
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
    case NEW_PLAYLIST:
      return { ...state, currentSongIndex: 0, playList: [], canNextSong: false, canPreviousSong: false, duration: 0 };
    case PLAY_SONG:
      return { ...state, currentSongIndex: action.index };

    case SHUFFLE_LIST:
      shuffle(state.playList);
      toastSuccess('Playlist has been rearranged');
      return { ...state, playList: state.playList.slice(0), currentSongIndex: 0 };

    case PLAY_END: {
      const stateWillChange = {};
      if (state.isLoopSong) {
        stateWillChange.currentSongIndex = state.currentSongIndex;
      } else {
        if (!state.isLoopList) {
          if (state.currentSongIndex + 1 >= state.playList.length) {
            stateWillChange.canNextSong = false;
            stateWillChange.isPlaying = false;
          } else {
            stateWillChange.currentSongIndex = state.currentSongIndex + 1;
          }
        } else {
          if (state.currentSongIndex + 1 >= state.playList.length) {
            stateWillChange.currentSongIndex = 0;
          } else {
            stateWillChange.currentSongIndex = state.currentSongIndex + 1;
          }
        }
      }
      return { ...state, ...stateWillChange };
    }

    case REMOVE_FROM_LIST: {
      const stateWillChange = {};
      state.playList = state.playList.filter(song => song._id !== action.songId);
      if (!state.isLoopList) {
        stateWillChange.canNextSong = state.currentSongIndex + 1 <= state.playList.length;
        stateWillChange.canPreviousSong = state.currentSongIndex - 1 >= 0;
      } else {
        stateWillChange.canNextSong = true;
        stateWillChange.canPreviousSong = true;
      }
      return { ...state, ...stateWillChange };
    }

    case ADD_TO_LIST: {
      const stateWillChange = {};
      const songList = _.pluck(state.playList, '_id');
      action.songs.forEach(song => {
        if (!_.contains(songList, song._id)) {
          state.playList.push(song);
        }
      });
      if (!state.isLoopList) {
        stateWillChange.canNextSong = state.currentSongIndex + 1 <= state.playList.length;
        stateWillChange.canPreviousSong = state.currentSongIndex - 1 >= 0;
      } else {
        stateWillChange.canNextSong = true;
        stateWillChange.canPreviousSong = true;
      }
      stateWillChange.playList = state.playList.slice(0);
      return { ...state, ...stateWillChange };
    }

    case `${DELETE_SONGS}_SUCCESS`: {
      const stateWillChange = {};
      stateWillChange.playList = state.playList.filter(song => !_.contains(action.data.ids, song._id));
      stateWillChange.songs = state.songs.filter(song => !_.contains(action.data.ids, song._id));
      if (!state.isLoopList) {
        stateWillChange.canNextSong = state.currentSongIndex + 1 <= stateWillChange.playList.length;
        stateWillChange.canPreviousSong = state.currentSongIndex - 1 >= 0;
      } else {
        stateWillChange.canNextSong = stateWillChange.playList.length > 0;
        stateWillChange.canPreviousSong = stateWillChange.playList.length > 0;
      }
      return {
        ...state,
        ...stateWillChange,
        playList: stateWillChange.playList.slice(0),
        songs: stateWillChange.songs.slice(0)
      };
    }

    case PLAY_SONGS: {
      const stateWillChange = {};
      const willPlaySongIds = _.pluck(action.songs, '_id');
      stateWillChange.playList = state.playList.filter(song => !_.contains(willPlaySongIds, song._id));
      const songIndex = stateWillChange.playList.length;
      stateWillChange.playList = stateWillChange.playList.concat(action.songs);
      if (!state.isLoopList) {
        stateWillChange.canNextSong = state.currentSongIndex + 1 <= stateWillChange.playList.length;
        stateWillChange.canPreviousSong = state.currentSongIndex - 1 >= 0;
      } else {
        stateWillChange.canNextSong = stateWillChange.playList.length > 0;
        stateWillChange.canPreviousSong = stateWillChange.playList.length > 0;
      }
      return {
        ...state,
        ...stateWillChange,
        currentSongIndex: songIndex,
        playList: stateWillChange.playList.slice(0),
        isPlaying: true
      };
    }

    case `${DELETE_SONGS}_FAIL`:
    case `${GET_SONGS}_FAIL`:
    case `${ADD_SONGS}_FAIL`:
    case `${EDIT_SONG}_FAIL`:
    case `${SEARCH_SONG}_FAIL`:
      toastError(action.error);
      return state;

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

    default:
      return state;
  }
};
