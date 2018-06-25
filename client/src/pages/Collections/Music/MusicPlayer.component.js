import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class MusicPlayer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying && !this.props.playList) {
      this.props.onGetSongs();
    }
    if (nextProps.seek !== this.props.seek) {
      this.player.seekTo(nextProps.seek);
    }
  }

  render() {
    const { playList, currentSongIndex, isPlaying, onSetPlayedTime, onSetDuration, onPlayEnd, isLoopSong } = this.props;

    if (!playList || playList.length < 1) {
      return null;
    }

    return (
      <ReactPlayer
        ref={node => (this.player = node)}
        url={playList[currentSongIndex].Url}
        playing={isPlaying}
        onProgress={obj => onSetPlayedTime(obj.playedSeconds)}
        onEnded={() => onPlayEnd()}
        onDuration={duration => onSetDuration(duration)}
        loop={isLoopSong}
      />
    );
  }
}

export default MusicPlayer;
