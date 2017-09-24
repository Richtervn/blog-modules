import React from 'react';

import BasicPannel from 'components/Collections/MangasReading/ControlPannel/BasicPannel';
import FeaturePannel from './FeaturePannel';

import SearchTools from './SearchTools';
import SortTools from './SortTools';

import AddGameForm from './AddGameForm';
import EditGameForm from './EditGameForm';
import GameDetailView from './GameDetailView';
import GameDeleteView from './GameDeleteView';

export default ({
  activeTool,
  viewChannel,
  focusGame,
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
    <div className="row no-row-margin">
      <div className="box-margin">
        <div className="card">
          <div className="card-header channel-bar">
            <BasicPannel viewChannel={viewChannel} onChangeChannel={onChangeChannel} name="GamingHistoryChannel"/>
            <FeaturePannel activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} name="GamingHistoryChannel"/>
          </div>
          <div className="card-content channel-bar">
            {viewChannel == 'Add' && <AddGameForm onSubmit={onAddSubmit} />}
            {viewChannel == 'Edit' && <EditGameForm game={focusGame} onSubmit={onEditSubmit} />}
            {viewChannel == 'Detail' && <GameDetailView game={focusGame} />}
            {viewChannel == 'Delete' && <GameDeleteView game={focusGame} onSubmit={onDeleteSubmit}/>}
          </div>
        </div>
      </div>
    </div>
  </div>
);
