import React from 'react';
import MusicPlayer from './MusicPlayer';
import PlayList from './PlayList';

export default ({
  playList,
  currentSong,
  isStartPlay,
  onPlaySong,
  onNextTrack,
  isLoopTrack,
  onLoopTrack,
  onPreviousTrack,
  onLoopList,
  isLoopList,
  onShuffleList,
  onRemoveSong,
  onNewPlaylist
}) => (
  <div>
    <MusicPlayer
      currentSong={currentSong}
      isStartPlay={isStartPlay}
      onNextTrack={onNextTrack}
      isLoopTrack={isLoopTrack}
    />
    <PlayList
      list={playList}
      currentSong={currentSong}
      onPlaySong={onPlaySong}
      onLoopTrack={onLoopTrack}
      isLoopTrack={isLoopTrack}
      onNextTrack={onNextTrack}
      onPreviousTrack={onPreviousTrack}
      isLoopList={isLoopList}
      onLoopList={onLoopList}
      onShuffleList={onShuffleList}
      onRemoveSong={onRemoveSong}
      onNewPlaylist={onNewPlaylist}
    />
  </div>
);
