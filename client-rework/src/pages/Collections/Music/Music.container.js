import { connect } from 'react-redux';
import Music from './Music.component';

import { getSongs } from './Music.module';

const mapStateToProps = ({ music }) => ({
  isLoadedSongs: music.songs && music.songs.length >= 0,
});

const mapDispatchToProps = dispatch => ({
  onGetSongs() {
    dispatch(getSongs());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);
