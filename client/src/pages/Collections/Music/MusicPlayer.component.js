import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { TitleScroller } from 'utils';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.titleScroller = new TitleScroller(1000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying && !this.props.playList) {
      this.props.onGetSongs();
      return;
    }
    if (nextProps.seek !== this.props.seek) {
      this.player.seekTo(nextProps.seek);
      return;
    }
    if (!nextProps.isPlaying && this.props.isPlaying) {
      this.titleScroller.stop();
      return;
    }
    if (!this.props.isPlaying && nextProps.isPlaying) {
      const isTitleScrolling = this.titleScroller.getStatus();
      if (!isTitleScrolling) {
        this.titleScroller.start();
      }
    }
  }

  onScrollTitle(text) {
    const { playList, currentSongIndex, isPlaying } = this.props;
    this.titleScroller.setText(`${playList[currentSongIndex].Artist} - ${playList[currentSongIndex].Name}`);
    if (isPlaying) {
      this.titleScroller.start();
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
      onGetLyrics
    } = this.props;

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
        onDuration={duration => {
          onSetDuration(duration);
          onGetLyrics();
          this.onScrollTitle();
        }}
        loop={isLoopSong}
      />
    );
  }
}

export default MusicPlayer;
