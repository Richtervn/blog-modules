import React from 'react';
import ReactPlayer from 'react-player';
import StarRating from 'react-star-rating-component';

export default ({ currentSong, isStartPlay, onNextTrack, isLoopTrack }) => (
  <div className="music-player-container">
    <div className="row no-row-margin">
      <div className="music-player-icon-box">
        <img src="/app_modules/images/icons/drumset.png" className="music-player-icon" />
      </div>
      {!currentSong && (
        <div className="text-center music-player-info-box">
          <h4>...........</h4>
          <h5>...</h5>
        </div>
      )}
      {currentSong && (
        <div className="text-center music-player-info-box">
          <h4>
            <span>
              <i className="fa fa-music" />
            </span>&nbsp;{currentSong.Name}
          </h4>
          <h5>
            <i>{currentSong.Artist}</i>
          </h5>
          <div className="larger-star-rating">
            <StarRating name={currentSong.Name} value={parseInt(currentSong.Rating)} />
          </div>
        </div>
      )}
      <div className="music-player">
        <ReactPlayer
          url={currentSong ? currentSong.Url.replace('./public', 'http://localhost:3000') : ''}
          playing={isStartPlay}
          controls={true}
          loop={isLoopTrack}
          width={'415px'}
          height={'32px'}
          onEnded={() => {
            if (!isLoopTrack) {
              onNextTrack();
            }
          }}
        />
      </div>
    </div>
  </div>
);
