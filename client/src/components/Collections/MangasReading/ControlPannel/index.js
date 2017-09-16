import React from 'react';

import BasicPannel from './BasicPannel';
import FeaturePannel from './FeaturePannel';

import SearchTools from './SearchTools';
import SortTools from './SortTools';
import QuickUpdateTools from './QuickUpdateTools';

import AddMangaForm from './AddMangaForm';
import EditMangaForm from './EditMangaForm';
import MangaDetailView from './MangaDetailView';
import MangaDeleteView from './MangaDeleteView';

export default ({
  activeTool,
  viewChannel,
  focusManga,
  onChangeChannel,
  onChangeActiveTool,
  onAddSubmit,
  onEditSubmit,
  onDeleteSubmit,
  onQuickUpdate,
  onSearchInput,
  onSortSelect
}) => (
  <div className="mr-control-panel">
    {activeTool == 'Search' && <SearchTools onSearchInput={onSearchInput}/>}
    {activeTool == 'Sort' && <SortTools onSortSelect={onSortSelect}/>}
    {activeTool == 'QuickUpdate' && <QuickUpdateTools onSubmit={onQuickUpdate} />}
    <div className="row no-row-margin">
      <div className="box-margin">
        <div className="card">
          <div className="card-header channel-bar">
            <BasicPannel viewChannel={viewChannel} onChangeChannel={onChangeChannel} />
            <FeaturePannel activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} />
          </div>
          <div className="card-content channel-bar">
            {viewChannel == 'Add' && <AddMangaForm onSubmit={onAddSubmit} />}
            {viewChannel == 'Edit' && <EditMangaForm manga={focusManga} onSubmit={onEditSubmit} />}
            {viewChannel == 'Detail' && <MangaDetailView manga={focusManga} />}
            {viewChannel == 'Delete' && <MangaDeleteView manga={focusManga} onSubmit={onDeleteSubmit}/>}
          </div>
        </div>
      </div>
    </div>
  </div>
);
