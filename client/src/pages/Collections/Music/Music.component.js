import './Music.theme.css';
import React, { useEffect } from 'react';
import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import MusicToolsBar from './MusicToolsBar.container';
import MusicTableList from './MusicTableList.container';
import MusicControl from './MusicControl.container';

export default ({ isLoadedSongs, onGetSongs }) => {
  useEffect(() => {
    onGetSongs();
  }, []);

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
};
