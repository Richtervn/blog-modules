import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying && !this.props.songs) {
      this.props.onGetSongs();
    }
  }

  render() {
    const {
      onGetSongs,
      songs,
      currentSongIndex,
      isPlaying,
      onSetPlayedTime,
      onSetDuration,
      isLoopList,
      isLoopTrack
    } = this.props;

    if (!songs) {
      return null;
    }
    const url = songs[currentSongIndex].Url.replace('./public', window.appConfig.API_HOST);
    return (
      <ReactPlayer
        url={url}
        playing={isPlaying}
        onProgress={obj => onSetPlayedTime(obj.playedSeconds)}
        onDuration={duration => onSetDuration(duration)}
      />
    );
  }
}

export default MusicPlayer;

// <ReactPlayer
//   url={currentSong ? currentSong.Url.replace('./public', ) : ''}
//   playing={isStartPlay}
//   controls={true}
//   loop={isLoopTrack}
//   width={'415px'}
//   height={'32px'}
//   onEnded={() => {
//     if (!isLoopTrack) {
//       onNextTrack();
//     }
//   }}
// />
