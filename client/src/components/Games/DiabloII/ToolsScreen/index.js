import React from 'react';

export default ({
  versions,
  tools,
  onGetTools,
  focusTool,
  onSetFocusTool,
  onAddTool,
  onEditTool,
  onDeleteTool,
  addFormState,
  editFormState
}) => {
  if (!tools) onGetTools();
  return null;
};
