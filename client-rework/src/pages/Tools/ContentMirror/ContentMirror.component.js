import './ContentMirror.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';

import ToolsBar from './components/ToolsBar.container';
import CodeEditor from './components/CodeEditor.container';
import ContentViewer from './components/ContentViewer.container';

class ContentMirror extends Component {
  componentWillMount() {
    const { tables, onGetTables } = this.props;
    if (!tables) {
      onGetTables();
    }
  }

  render() {
    const { isShareView, tables, match: { params } } = this.props;
    if (!tables) {
      return <PageLoader />;
    }
    if (tables && params.table) {
      if (!tables[params.table]) {
        return <Redirect to="/404" />;
      }
    }
    return (
      <PageContainer>
        <div className="row">
          <ToolsBar params={params} />
        </div>
        <div className="row">
          {isShareView && (
            <div className="col">
              <div className="row">
                <CodeEditor />
              </div>
            </div>
          )}
          <div className="col">
            <div className="row">
              <ContentViewer />
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default ContentMirror;
