import React from 'react';
import FormModal from 'components/FormModal';
import ToolCard from './ToolCard';

export default ({ tools, focusTool, onAddTool, onGetToolDetail, addFormState }) => (
  <div className="d2-mod-control-bar">
    {tools.map(tool => (
      <ToolCard key={tool._id} tool={tool} isFocus={focusTool._id == tool._id} onSelect={() => onGetToolDetail(tool._id)} />
    ))}
    <div className="d2-add-card-btn" data-toggle="modal" data-target="#addD2ToolModal">
      <i className="fa fa-plus-circle" />
    </div>
    <FormModal id="addD2ToolModal" formBody={addFormState} onSubmit={(id, body) => onAddTool(body)} />
  </div>
);
