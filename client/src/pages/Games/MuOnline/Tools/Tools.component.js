import './Tools.css';
import React, { useEffect, useState } from 'react';
import { sortList } from 'helpers';

import { PageLoader, ColLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { BasicSideBar } from 'components/SideBars';
import { SmallIconCard } from 'components/Cards';

import ToolDetail from './ToolDetail.container';

export default ({ tools, onGetTools, toolDetail, sortKey, sortOption, onSortTool, onSearchTool, onGetToolDetail }) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    onGetTools();
  }, []);
  useEffect(() => {
    if (!tools) return;
    if (tools.length > 0) {
      setLoading(true);
      onGetToolDetail(tools[0]._id);
    }
  }, [tools]);
  useEffect(() => {
    setLoading(false);
  }, [toolDetail]);

  if (!tools) {
    return (
      <div className="row">
        <PageLoader />
      </div>
    );
  }

  let sortedTools = sortList(tools, sortKey, sortOption);
  return (
    <div className="row">
      <div className="col-3">
        <div className="row">
          <BasicSideBar
            onSort={onSortTool}
            onSearch={text => onSearchTool({ Name: text })}
            customClass="mu-side-bar"
            sortOptions={['Name', 'Rating']}
            onClickAdd={() => openModal('AddMuOnlineTool')}>
            {sortedTools.map(tool => (
              <SmallIconCard
                key={tool._id}
                label={tool.Name}
                icon={tool.IconUrl}
                rating={tool.Rating}
                isActive={tool._id === toolDetail._id}
                customClass="mu-tool-card"
                downloadUrl={tool.ArchiveUri}
                onClick={() => {
                  setLoading(true);
                  onGetToolDetail(tool._id);
                }}
              />
            ))}
            {sortedTools.length === 0 && (
              <div className="no-content-wrapper">
                <i className="fa fa-long-arrow-up fa-2x" />
                <div className="notice">Start by adding a tool</div>
              </div>
            )}
          </BasicSideBar>
        </div>
      </div>
      <div className="col-9">{isLoading ? <ColLoader /> : <ToolDetail />}</div>
    </div>
  );
};
