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
      isLoopSong,
      duration
    } = this.props;

    if (!playList || playList.length < 1) {
      return null;
    }

    return (
      <ReactPlayer
        url={playList[currentSongIndex].Url}
        playing={isPlaying}
        onProgress={obj => {
          if (obj.playedSeconds > 0 && obj.playedSeconds >= duration - 1) {
            onSetPlayedTime(0);
            onPlayEnd();
          } else {
            onSetPlayedTime(obj.playedSeconds);
          }
        }}
        onDuration={duration => onSetDuration(duration)}
        loop={isLoopSong}
      />
    );
  }
}

export default MusicPlayer;

// onEnded={() => onPlayEnd()}
