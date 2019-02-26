import React, { useEffect } from 'react';
import { getFullName } from 'helpers';

import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';

import SideBar from './SideBar.container';
import PDFViewer from './PDFViewer.container';

export default ({ match, bookshelf, onGetBookshelf }) => {
  const bookshelfTitle = getFullName(match.params.bookShelf);

  useEffect(() => {
    onGetBookshelf(bookshelfTitle);
  }, [match.params.bookShelf]);

  if (decodeURIComponent(getFullName(bookshelfTitle)) !== bookshelf.Title) {
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
