import './MiniMusicPlayer.css';
import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({
  isLoadedSong,
  onGetSongs,
  currentSong,
  isPlaying,
  isLoading,
  onTogglePlay,
  progress,
  canNextSong,
  canPreviousSong,
  onNextSong,
  onPreviousSong
}) => {
  const getPlayButtonClass = () => {
    if (isLoading) {
      return 'fa-spinner fa-pulse';
    }
    if (isPlaying) {
      return 'fa-pause';
    } else {
      return 'fa-play';
    }
  };

  return (
    <div className="mini-music-player">
      <div className="control-wrapper">
        <div className="song-info">
          <div className="song-title">{currentSong ? currentSong.Name : 'Music can be played anywhere'}</div>
          <div className="song-artist">{currentSong ? currentSong.Artist : 'Life will be more beautiful'}</div>
          {currentSong && <StarRating name="mini-music-player" value={currentSong.Rating} />}
        </div>
        <div className="song-control">
          <button className="btn" disabled={!canPreviousSong} onClick={() => onPreviousSong()}>
            <i className="fa fa-step-backward" />
          </button>
          <button className="btn btn-large" onClick={() => onTogglePlay()}>
            <i className={`fa ${getPlayButtonClass()}`} />
          </button>
          <button className="btn" disabled={!canNextSong} onClick={() => onNextSong()}>
            <i className="fa fa-step-forward" />
          </button>
        </div>
      </div>
      <div className="song-progress">
        <div className="song-play-progress" style={{ width: `${progress}%` }} />
        <div className="song-play-progress-thumb " style={{ marginLeft: `${progress - 2}%` }} />
      </div>
      <div className="player-features">
        <button className="btn">
          <i className="fa fa-plus" />
        </button>
        <button className="btn">
          <i className="fa fa-refresh" />
        </button>
        <button className="btn">
          <i className="fa fa-retweet" />
        </button>
        <button className="btn">
          <i className="fa fa-random" />
        </button>
      </div>
    </div>
  );
};
