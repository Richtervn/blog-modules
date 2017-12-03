import React from 'react';
import LoadingScreen from 'components/LoadingScreen';

import SongListPannel from './SongListPannel';
import PlayerPannel from './PlayerPannel';

export default ({
  songsList,
  addSongForm,
  playList,
  currentSong,
  isStartPlay,
  isLoopTrack,
  sort,
  onGetSongsList,
  onAddSongSubmit,
  onPlaySong,
  onNextTrack,
  onLoopTrack,
  onPreviousTrack,
  onLoopList,
  isLoopList,
  onShuffleList,
  onRemoveSong,
  onAddPlaylist,
  onNewPlaylist,
  onSortSongList,
  onSearchInput
}) => {
  if (!songsList) {
    onGetSongsList();
    return <LoadingScreen/>;
  }

  return (
    <div className="music-main-screen static-position">
      <div className="row no-row-margin static-position">
        <div className="col-8 no-col-margin static-position music-song-list-pannel">
          <SongListPannel
            songsList={songsList}
            addSongForm={addSongForm}
            onAddSongSubmit={onAddSongSubmit}
            onAddPlaylist={onAddPlaylist}
            sort={sort}
            onSortSongList={onSortSongList}
            onSearchInput={onSearchInput}
          />
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
            onNewPlaylist={onNewPlaylist}
          />
        </div>
      </div>
    </div>
  );
};
