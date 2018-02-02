import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying && !this.props.playList) {
      this.props.onGetSongs();
    }
  }

  render() {
    const {
      playList,
      currentSongIndex,
      isPlaying,
      onSetPlayedTime,
      onSetDuration,
      onPlayEnd,
      isLoopTrack
    } = this.props;

    if (!playList || playList.length < 1) {
      return null;
    }
    const url = playList[currentSongIndex].Url.replace('./public', window.appConfig.API_HOST);
    return (
      <ReactPlayer
        url={url}
        playing={isPlaying}
        onProgress={obj => onSetPlayedTime(obj.playedSeconds)}
        onDuration={duration => onSetDuration(duration)}
        loop={isLoopTrack}
        onEnded={() => onPlayEnd()}
      />
    );
  }
}

export default MusicPlayer;
