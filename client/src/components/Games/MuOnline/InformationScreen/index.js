import React from 'react';

import FormModal from 'components/FormModal';
import ToolDetail from './ToolDetail';
import VersionDetail from './VersionDetail';
import DeleteModal from 'components/DeleteModal';

export default ({
  focusTool,
  focusVersion,
  activeView,
  onEditToolSubmit,
  onEditVersionSubmit,
  onDeleteTool,
  onDeleteVersion,
  editVersionFormState,
  editToolFormState
}) => (
  <div className="mo-info-screen">
    <div className="mo-info-feature">
      <button
        className="mo-info-feature-btn"
        data-toggle="modal"
        data-target={activeView == 'Versions' ? '#editMuonlineVersionModal' : '#editMuonlineToolModal'}>
        <i className="fa fa-pencil" />
      </button>
      <button
        className="mo-info-feature-btn"
        data-toggle="modal"
        data-target={activeView == 'Versions' ? '#deleteMuonlineVersionModal' : '#deleteMuonlineToolModal'}>
        <i className="fa fa-times" />
      </button>
    </div>
    {activeView == 'Tools' && <ToolDetail tool={focusTool} />}
    {activeView == 'Versions' && <VersionDetail version={focusVersion} />}
    {activeView == 'Tools' &&
    focusTool && (
      <FormModal id="editMuonlineToolModal" formBody={editToolFormState} onSubmit={onEditToolSubmit} />
    )}
    {activeView == 'Versions' &&
    focusVersion && (
      <FormModal
        id="editMuonlineVersionModal"
        formBody={editVersionFormState}
        onSubmit={onEditVersionSubmit}
      />
    )}
    {activeView == 'Tools' &&
    focusTool && (
      <DeleteModal
        id="deleteMuonlineToolModal"
        text={`Hey man, make sure you want to delete ${focusTool.Name}. The action can't be backed up`}
        onSubmit={() => onDeleteTool(focusTool._id)}
      />
    )}
    {activeView == 'Versions' &&
    focusVersion && (
      <DeleteModal
        id="deleteMuonlineVersionModal"
        text={`Hey man, make sure you want to delete ${focusVersion.Name}. The action can't be backed up`}
        onSubmit={() => onDeleteTool(focusVersion._id)}
      />
    )}
  </div>
);
