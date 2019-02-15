import './ContentMirror.css';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';

import ToolsBar from './ToolsBar.container';
import CodeEditor from './CodeEditor.container';
import ContentViewer from './ContentViewer.container';

export default ({ match: { params }, tables, onGetTables, isShareView }) => {
  useEffect(() => {
    if (!tables) onGetTables();
  }, []);
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
};
