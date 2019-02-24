import './PDFViewer.css';
import React from 'react';

import appConfig from 'app/config';

export default ({ book }) => {
  if (!book.FileUrl) {
    return null;
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
