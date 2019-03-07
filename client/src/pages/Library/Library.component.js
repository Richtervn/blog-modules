import React, { useEffect } from 'react';

import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';

import SideBar from './SideBar.container';
import PDFViewer from './PDFViewer.container';

export default ({ bookshelf, onGetBookshelf, bookshelfName }) => {
  useEffect(() => {
    if (!bookshelfName) return;
    onGetBookshelf(encodeURIComponent(bookshelfName));
  }, [bookshelfName]);

  if (bookshelfName !== bookshelf.Title) {
    return <PageLoader />;
  }

  return (
    <PageContainer backgroundColor="#525659">
      <div className="row">
        <PDFViewer />
        <SideBar />
      </div>
    </PageContainer>
  );
};
