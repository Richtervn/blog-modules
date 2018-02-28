import React, { Component } from 'react';
import { sortList } from 'helpers';
import { PageLoader, ContainerLoader } from 'common/Loaders';

import { SideNav, FeatureCard } from '../components';
import ToolDetail from './ToolDetail.container';

import { openModal } from 'common/Modal';

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailLoading: false,
      didLoaded: false
    };
  }

  componentWillMount() {
    const { tools, onGetTools } = this.props;
    if (!tools) {
      onGetTools();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toolDetail._id !== this.props.toolDetail._id) {
      this.setState({ isDetailLoading: false });
    }
    if (!this.state.didLoaded && !this.props.tools && nextProps.tools.length > 0) {
      this.props.onGetToolDetail(nextProps.tools[0]._id);
      this.setState({ didLoaded: true, isDetailLoading: true });
    }
  }

  render() {
    const { tools, toolDetail, onGetToolDetail, onSort, sortKey, sortOption, onSearch } = this.props;
    if (!tools) {
      return (
        <div className="row">
          <PageLoader opacity={2} />
        </div>
      );
    }

    let sortedTools = sortList(tools, sortKey, sortOption);

    return (
      <div className="row">
        <div className="col-3">
          <div className="row">
            <SideNav
              sortOptions={['Name', 'Rating']}
              onSort={onSort}
              onSearch={text => onSearch({ Name: text })}
              onClickAdd={() => openModal('AddDiabloIITool')}>
              {sortedTools.map(tool => (
                <FeatureCard
                  isActive={toolDetail._id === tool._id}
                  key={tool._id}
                  name={tool.Name}
                  iconUrl={tool.IconUrl.replace('./public', window.appConfig.API_HOST)}
                  rating={tool.Rating}
                  archiveUrl={tool.ArchiveUrl.replace('./public', window.appConfig.API_HOST)}
                  onClick={() => {
                    this.setState({ isDetailLoading: true });
                    onGetToolDetail(tool._id);
                  }}
                />
              ))}
            </SideNav>
          </div>
        </div>
        <div className="col-9">
          {this.state.isDetailLoading && <ContainerLoader />}
          {!this.state.isDetailLoading &&
            !toolDetail.Name && (
              <div className="flex-center d2-zero-notice">
                <div className="notice">No tool selected</div>
              </div>
            )}
          {!this.state.isDetailLoading && toolDetail.Name && <ToolDetail />}
        </div>
      </div>
    );
  }
}

export default Tools;
