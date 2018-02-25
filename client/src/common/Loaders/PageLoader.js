import './PageLoader.css';

import React from 'react';
import PageContainer from 'common/PageContainer';

export default ({ opacity = 8 }) => (
  <PageContainer opacity={opacity} center>
    <div>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </PageContainer>
);
