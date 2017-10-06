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
  addVersionFormState,
  addToolFormState
}) => {
  return (
    <div>
      <div className="mo-control-pannel">
        <RowNavigationBar
          headers={['Versions', 'Tools', 'Character']}
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
            type="Version"
            cards={versions}
            onGetCards={onGetVersions}
            onGetCardDetail={onGetVersionDetail}
            focusCard={focusVersion}
          />
        )}
        {activeView == 'Tools' && (
          <ListPannel
            type="Tool"
            cards={tools}
            onGetCards={onGetTools}
            onGetCardDetail={onGetToolDetail}
            focusCard={focusTool}
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
        <FormModal id="addMuonlineToolModal" formBody={addToolFormState} onSubmit={onAddToolSubmit} />
      )}
    </div>
  );
};
