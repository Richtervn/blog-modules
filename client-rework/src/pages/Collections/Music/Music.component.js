import './Music.css';
import React, { Component } from 'react';
import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import MusicToolsBar from './components/MusicToolsBar.container';
import MusicTableList from './components/MusicTableList.container';
import MusicControl from './components/MusicControl.container';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (!this.props.isLoadedSongs) {
      this.props.onGetSongs();
    }
  }

  render() {
    const { isLoadedSongs } = this.props;
    if (!isLoadedSongs) {
      return <PageLoader />;
    }

    return (
      <PageContainer backgroundUrl="/images/backgrounds/heavy_metal_bands.jpg" opacity={8}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <MusicToolsBar />
                <MusicTableList />
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <MusicControl />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default Music;
