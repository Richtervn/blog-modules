import React from 'react';

import ControlPannel from './ControlPannel';
import InformationScreen from './InformationScreen';

export default ({
  tools,
  versions,
  focusTool,
  focusVersion,
  activeView,
  onSwitchView,
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
}) => (
  <div className="mo-main-screen">
    <div className="mo-main-screen-background">
      <div className="row no-row-margin">
        <div className="col-3 no-col-margin mo-full-screen">
          <ControlPannel
            activeView={activeView}
            onSwitchView={onSwitchView}
            tools={tools}
            versions={versions}
            focusVersion={focusVersion}
            focusTool={focusTool}
            onGetTools={onGetTools}
            onGetVersions={onGetVersions}
            onGetToolDetail={onGetToolDetail}
            onGetVersionDetail={onGetVersionDetail}
            onAddToolSubmit={onAddToolSubmit}
            onAddVersionSubmit={onAddVersionSubmit}
            onEditToolSubmit={onEditToolSubmit}
            onEditVersionSubmit={onEditVersionSubmit}
            onDeleteTool={onDeleteTool}
            onDeleteVersion={onDeleteVersion}
            addVersionFormState={addVersionFormState}
            addToolFormState={addToolFormState}
            editVersionFormState={editVersionFormState}
            editToolFormState={editToolFormState}
          />
        </div>
        <div className="col-9 no-col-margin mo-full-screen">
          <InformationScreen focusTool={focusTool} focusVersion={focusVersion} activeView={activeView} />
        </div>
      </div>
    </div>
  </div>
);
