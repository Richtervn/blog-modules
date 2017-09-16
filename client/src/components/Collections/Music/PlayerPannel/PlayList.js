import React from 'react';
import shortenText from 'factories/shortenText'

export default ({
  list,
  currentSong,
  onPlaySong,
  isLoopTrack,
  onLoopTrack,
  onNextTrack,
  onPreviousTrack,
  onLoopList,
  isLoopList,
  onShuffleList,
  onRemoveSong,
  onNewPlaylist
}) => (
  <div className="music-playlist-container">
    <div className="music-playlist-tools-bar">
      <button
        className={
          isLoopTrack ? (
            'btn btn-secondary channel-button channel-button-active'
          ) : (
            'btn btn-secondary channel-button'
          )
        }
        onClick={onLoopTrack}>
        <i className="fa fa-refresh" />
      </button>
      <button className="btn btn-secondary channel-button" onClick={onPreviousTrack}>
        <i className="fa fa-step-backward" />
      </button>
      <button className="btn btn-secondary channel-button" onClick={onNextTrack}>
        <i className="fa fa-step-forward" />
      </button>
      <button className="btn btn-secondary channel-button" onClick={onShuffleList}>
        <i className="fa fa-random" />
      </button>
      <button
        className={
          isLoopList ? (
            'btn btn-secondary channel-button channel-button-active'
          ) : (
            'btn btn-secondary channel-button'
          )
        }
        onClick={onLoopList}>
        <i className="fa fa-retweet" />
      </button>
      <button className="btn btn-secondary channel-button" onClick={onNewPlaylist}>
        <i className="fa fa-file"/>
      </button>
    </div>
    <div className="music-playlist">
      {list.map((song, i) => (
        <div key={i} className={currentSong && song._id == currentSong._id ? 'music-pl-song-active' : ''}>
          <div className="music-pl-song-row">
            <span>
              <i className="fa fa-music" />
            </span>&nbsp;&nbsp;{shortenText(`${i + 1}.  ${song.Artist} - ${song.Name}`, 45)}
            <span className="pull-right">
              <i className="fa fa-play-circle music-pl-play-btn" onClick={() => onPlaySong(song)} />
              <i className="fa fa-times music-pl-remove-btn" onClick={() => onRemoveSong(song)} />
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
