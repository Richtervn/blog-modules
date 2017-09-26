import React from 'react';

import RowNavigationBar from './RowNavigationBar';
import ListPannel from './ListPannel';
import FormModal from 'components/FormModal';

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
  onDeleteVersion,
  addVersionFormState,
  addToolFormState,
  editVersionFormState,
  editToolFormState
}) => {
  return (
    <div>
      <div className="mo-control-pannel">
        <RowNavigationBar
          headers={['Versions', 'Tools']}
          activeView={activeView}
          onSwitchView={onSwitchView}
        />
        <div
          className="text-center mo-add-button"
          data-toggle="modal"
          data-target={activeView == 'Versions' ? '#addMuonlineVersionModal' : '#addMuonlineToolModal'}>
          <i className="fa fa-plus-circle" />
        </div>
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
            onEditCardSubmit={onEditToolSubmit}
            onDeleteCard={onDeleteTool}
          />
        )}
      </div>
      {activeView == 'Versions' && (
        <FormModal
          id="addMuonlineVersionModal"
          formBody={addVersionFormState}
          onSubmit={onAddVersionSubmit}
        />
      )}
      {activeView == 'Tools' && (
        <FormModal
          id="addMuonlineToolModal"
          formBody={addToolFormState}
          onSubmit={onAddToolSubmit}
        />
      )}
    </div>
  );
};
