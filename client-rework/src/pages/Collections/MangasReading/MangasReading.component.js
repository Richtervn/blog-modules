import _ from 'underscore';
import React, { Component } from 'react';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import ControlBar from './ControlBar';
import MangasList from './MangasList';

class MangasReading extends Component {
  componentWillMount() {
    this.props.onGetMangas();
  }

  render() {
    const {
      activeView,
      mangas,
      focusManga,
      onSetFocusManga,
      onSetActiveView,
      onAddManga,
      onEditManga,
      onDeleteManga,
      onQuickUpdate,
      onSearchManga,
      onSortManga
    } = this.props;
    if (!mangas) {
      return <PageLoader />;
    }
    return (
      <PageContainer backgroundUrl="/images/backgrounds/dark_art.jpg">
        <div className="row">
          <div className="col-3">
            <ControlBar
              manga={_.findWhere(mangas, { _id: focusManga })}
              activeView={activeView}
              onSetActiveView={onSetActiveView}
              onAddManga={onAddManga}
              onEditManga={onEditManga}
              onDeleteManga={onDeleteManga}
              onQuickUpdate={onQuickUpdate}
              onSearchManga={onSearchManga}
              onSortManga={onSortManga}
            />
          </div>
          <div className="col-9">
            <MangasList mangas={mangas} focusManga={focusManga} onSetFocusManga={onSetFocusManga} />
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default MangasReading;