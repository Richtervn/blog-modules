import React from 'react';
import ControlBar from './ControlBar';
import ToolInfo from './ToolInfo';

export default ({
  versions,
  tools,
  onGetTools,
  onGetToolDetail,
  focusTool,
  onAddTool,
  onEditTool,
  onDeleteTool,
  addFormState,
  editFormState
}) => {
  if (!tools) {
    onGetTools();
    return null;
  }

  return (
    <div className="row no-row-margin">
      <div className="col-3 no-col-margin">
        <ControlBar
          tools={tools}
          focusTool={focusTool}
          onAddTool={onAddTool}
          onGetToolDetail={onGetToolDetail}
          addFormState={addFormState}
        />
      </div>
      <div className="col-9 no-col-margin">
        <ToolInfo tool={focusTool} editFormState={editFormState} onEditTool={onEditTool} onDeleteTool={onDeleteTool} />
      </div>
    </div>
  );
};
