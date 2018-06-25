import './MiniMusicPlayer.css';
import React from 'react';
import StarRating from 'react-star-rating-component';
import { openModal } from 'common/Modal';
import classnames from 'classnames';

const getProgress = (duration, played) => {
  if (!duration || !played) {
    return 0;
  }
  return played / duration * 100;
};

export default ({
  currentSong,
  isPlaying,
  isLoading,
  isHaveList,
  isLoopSong,
  isLoopList,
  isShowLyricsBox,
  onToggleLoopSong,
  onToggleLoopList,
  onTogglePlay,
  onShuffleList,
  onToggleLyricsBox,
  canNextSong,
  canPreviousSong,
  onNextSong,
  onPreviousSong,
  onEditSong,
  onSeek,
  duration,
  playedTime
}) => {
  const getPlayButtonClass = () => {
    if (isLoading) {
      return 'fa-spinner fa-pulse';
    }
    if (!currentSong) {
      return 'fa-play';
    }
    if (isPlaying) {
      return 'fa-pause';
    } else {
      return 'fa-play';
    }
  };
  const progress = getProgress(duration, playedTime);

  return (
    <div className="mini-music-player">
      <div className="control-wrapper">
        <div className="song-info">
          <div className="song-title">{currentSong ? currentSong.Name : 'Music can be played anywhere'}</div>
          <div className="song-artist">{currentSong ? currentSong.Artist : 'Life will be more beautiful'}</div>
          {currentSong && (
            <StarRating
              name="mini-music-player"
              value={currentSong.Rating}
              onStarClick={value => onEditSong({ _id: currentSong._id, Rating: value })}
            />
          )}
        </div>
        <div className="song-control">
          <button className="btn" disabled={!canPreviousSong} onClick={() => onPreviousSong()}>
            <i className="fa fa-step-backward" />
          </button>
          <button className="btn btn-large" onClick={() => onTogglePlay()} disabled={isPlaying && !currentSong}>
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
        <input
          className="progress-input"
          type="range"
          min={0}
          max={duration || 100}
          value={playedTime || 0}
          onChange={e => onSeek(e.target.value)}
        />
      </div>
      <div className="player-features">
        <button className="btn" onClick={() => openModal('AddSong')}>
          <i className="fa fa-plus" />
        </button>
        <button
          className={classnames('btn', { active: isLoopSong })}
          onClick={() => onToggleLoopSong()}
          disabled={!currentSong}>
          <i className="fa fa-refresh" />
        </button>
        <button
          className={classnames('btn', { active: isLoopList })}
          onClick={() => onToggleLoopList()}
          disabled={!isPlaying || !isHaveList}>
          <i className="fa fa-retweet" />
        </button>
        <button className="btn" onClick={() => onShuffleList()} disabled={!isHaveList}>
          <i className="fa fa-random" />
        </button>
        <button
          disabled={!isHaveList}
          className={classnames('btn', { active: isShowLyricsBox })}
          onClick={() => onToggleLyricsBox()}>
          <i className="fa fa-music" />
        </button>
      </div>
    </div>
  );
};
