import React from 'react';

import SongListPannel from './SongListPannel';
import PlayerPannel from './PlayerPannel';
// import ReactPlayer from 'react-player';

export default ({
  songsList,
  addSongForm,
  playList,
  currentSong,
  isStartPlay,
  isLoopTrack,
  onGetSongsList,
  onAddSongSubmit,
  onPlaySong,
  onNextTrack,
  onLoopTrack,
  onPreviousTrack,
  onLoopList,
  isLoopList,
  onShuffleList,
  onRemoveSong
}) => {
  if (!songsList) {
    onGetSongsList();
    return null;
  }

  return (
    <div className="music-main-screen static-position">
      <div className="row no-row-margin static-position">
        <div className="col-8 no-col-margin static-position music-song-list-pannel">
          <SongListPannel songsList={songsList} addSongForm={addSongForm} onAddSongSubmit={onAddSongSubmit} />
        </div>
        <div className="col-4 no-col-margin static-position music-player-pannel">
          <PlayerPannel
            playList={playList}
            currentSong={currentSong}
            isStartPlay={isStartPlay}
            isLoopTrack={isLoopTrack}
            onLoopTrack={onLoopTrack}
            onPlaySong={onPlaySong}
            onNextTrack={onNextTrack}
            onPreviousTrack={onPreviousTrack}
            onLoopList={onLoopList}
            isLoopList={isLoopList}
            onShuffleList={onShuffleList}
            onRemoveSong={onRemoveSong}
          />
        </div>
      </div>
    </div>
  );
};
