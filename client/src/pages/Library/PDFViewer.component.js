import './PDFViewer.css';
import React from 'react';

import appConfig from 'app/config';

export default ({ book }) => {
  if (!book || !book.FileUrl) {
    return <div className="library-pdf-viewer initial-message">
      <h1>There's nothing here yet!</h1>
    </div>;
  }
  return (
    <div className="library-pdf-viewer">
      <iframe
        title="PDF Viewer"
        id="pdf-viewer-iframe"
        src={book.FileUrl.replace('./public', appConfig.API_HOST)}
        width="100%"
        height="100%"
      />
    </div>
  );
};
