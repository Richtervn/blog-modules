import React, { Component } from 'react';
import { sortList } from 'helpers';

import { PageLoader, ColLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { BasicSideBar } from 'components/SideBars';
import { SmallIconCard } from 'components/Cards';

import ToolDetail from './ToolDetail.container';

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = { didLoaded: false, isDetailLoading: false };
  }

  componentWillMount() {
    const { tools, onGetTools } = this.props;
    if (!tools) {
      onGetTools();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { onGetToolDetail, tools, toolDetail } = this.props;
    if (nextProps.toolDetail._id !== toolDetail._id) {
      this.setState({ isDetailLoading: false });
    }
    if (!this.state.didLoaded && !tools && nextProps.tools) {
      onGetToolDetail(nextProps.tools[0]._id);
      this.setState({ didLoaded: true });
    }
  }

  render() {
    const { tools, toolDetail, onGetToolDetail, sortKey, sortOption, onSortTool, onSearchTool } = this.props;
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
                    this.setState({ isDetailLoading: true });
                    onGetToolDetail(tool._id);
                  }}
                />
              ))}
            </BasicSideBar>
          </div>
        </div>
        <div className="col-9">
          {this.state.isDetailLoading && <ColLoader />}
          {!this.state.isDetailLoading && <ToolDetail />}
        </div>
      </div>
    );
  }
}

export default Tools;
