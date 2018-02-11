import './NotFound.css';
import React from 'react';

import PageContainer from 'common/PageContainer';

export default () => (
  <PageContainer>
    <div className="row not-found-page">
      <div className="not-found-page-contain">
        <h1>404</h1>
        <h6>Page Not Found !</h6>
      </div>
    </div>
  </PageContainer>
);
