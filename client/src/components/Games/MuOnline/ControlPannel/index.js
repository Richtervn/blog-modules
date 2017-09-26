import React from 'react';

import RowNavigationBar from './RowNavigationBar';
import ListPannel from './ListPannel';

export default ({
  activeView,
  onSwitchView,
  tools,
  versions,
  focusVersion,
  focusTool,
  onGetTools,
  onGetVersions,
  onGetToolDetail,
  onGetVersionDetail,
  onAddToolSubmit,
  onAddVersionSubmit,
  onEditToolSubmit,
  onEditVersionSubmit,
  onDeleteTool,
  onDeleteVersion
}) => {
  return (
    <div className="mo-control-pannel">
      <RowNavigationBar
        headers={['Versions', 'Tools']}
        activeView={activeView}
        onSwitchView={onSwitchView}
      />
      {activeView == 'Versions' && (
        <ListPannel
          cards={versions}
          onGetCards={onGetVersions}
          onGetCardDetail={onGetVersionDetail}
          focusCard={focusVersion}
          onAddCardSubmit={onAddVersionSubmit}
          onEditCardSubmit={onEditVersionSubmit}
          onDeleteCard={onDeleteVersion}
        />
      )}
      {activeView == 'Tools' && (
        <ListPannel
          cards={tools}
          onGetCards={onGetTools}
          onGetCardDetail={onGetToolDetail}
          focusCard={focusTool}
          onAddCardSubmit={onAddToolSubmit}
          onEditCardSubmit={onEditToolSubmit}
          onDeleteCard={onDeleteTool}
        />
      )}
    </div>
  );
};
