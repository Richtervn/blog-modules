import './MangasReading.theme.css';
import React, { useEffect } from 'react';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import ControlBar from './ControlBar.container';
import MangasList from './MangasList.container';

export default ({ onGetMangas, mangas }) => {
  useEffect(() => {
    onGetMangas();
  }, []);

  if (!mangas) {
    return <PageLoader />;
  }

  return (
    <PageContainer backgroundUrl="/images/backgrounds/dark_art.jpg">
      <div className="row">
        <div className="col-3">
          <ControlBar />
        </div>
        <div className="col-9">
          <MangasList />
        </div>
      </div>
    </PageContainer>
  );
};
