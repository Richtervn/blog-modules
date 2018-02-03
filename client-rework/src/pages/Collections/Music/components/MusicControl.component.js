import './MusicControl.css';
import React from 'react';
import StarRating from 'react-star-rating-component';

const secondToMinute = seconds => {
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);
  if (minute < 10) {
    minute = '0' + minute.toString();
  }
  if (second < 10) {
    second = '0' + second.toString();
  }
  return `${minute}:${second}`;
};

const getProgress = (duration, played) => {
  if (!duration || !played) {
    return 0;
  }
  return played / duration * 100;
};

export default ({
  playList,
  duration,
  playedTime,
  currentSong,
  isPlaying,
  onTogglePlay,
  onNextSong,
  onEditSong,
  onRemoveFromList,
  onPreviousSong,
  onToggleLoopSong,
  onToggleLoopList,
  onShuffleList,
  onNewList,
  canNextSong,
  canPreviousSong,
  isLoopSong,
  isLoopList
}) => {
  const progress = getProgress(duration, playedTime);
  return (
    <div className="music-control">
      <div className="music-info">
        <div className="player-avatar">
          <img src="/images/icons/drum-kit.jpg" alt="Music Avatar" />
        </div>
        <div className="playing-info">
          <div className="song-title">{currentSong ? currentSong.Name : 'Music can be played anywhere'}</div>
          <div className="song-artist">
            <i>{currentSong ? currentSong.Artist : 'Life will be more beautiful'}</i>
          </div>
          <div className="song-rating">
            <StarRating
              name="large-player-rating"
              value={currentSong ? currentSong.Rating : 0}
              onStarClick={value => {
                if (currentSong) {
                  onEditSong({ _id: currentSong._id, Rating: value });
                }
              }}
            />
          </div>
          <div>
            {secondToMinute(playedTime)} / {secondToMinute(duration)}
          </div>
        </div>
      </div>
      <div className="play-progress">
        <div className="progress">
          <div
            className={`progress-bar progress-bar-striped ${progress < 100 ? 'progress-bar-animated' : ''} bg-info`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="play-control">
        <div className="control-feature">
          <button
            className={`btn ${isLoopSong ? 'active' : ''}`}
            onClick={() => onToggleLoopSong()}
            disabled={!currentSong}>
            <i className="fa fa-refresh" />
          </button>
          <button
            className={`btn ${isLoopList ? 'active' : ''}`}
            onClick={() => onToggleLoopList()}
            disabled={playList.length < 1}>
            <i className="fa fa-retweet" />
          </button>
        </div>
        <div className="media-feature">
          <button className="btn btn-control" disabled={!canPreviousSong} onClick={() => onPreviousSong()}>
            <i className="fa fa-step-backward" />
          </button>
          <button className="btn btn-play" onClick={() => onTogglePlay()} disabled={!currentSong}>
            <i className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
          </button>
          <button className="btn btn-control" disabled={!canNextSong} onClick={() => onNextSong()}>
            <i className="fa fa-step-forward" />
          </button>
        </div>
        <div className="playlist-feature">
          <button className="btn" onClick={() => onNewList()} disabled={playList.length <= 0}>
            <i className="fa fa-file-o" />
          </button>
          <button className="btn" onClick={() => onShuffleList()} disabled={playList.length <= 1}>
            <i className="fa fa-random" />
          </button>
        </div>
      </div>
      <div className="music-play-list">
        {playList.map((song, i) => (
          <div key={i} className={`play-list-row ${song._id === currentSong._id ? 'playing' : ''}`}>
            <div className="song-icon">
              <i className="fa fa-music" />
            </div>
            <div className="song-index">{i + 1}.</div>
            <div className="song-name">
              {song.Artist} - {song.Name}
            </div>
            <div className="song-remove" onClick={() => onRemoveFromList(song._id)}>
              <i className="fa fa-times" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
