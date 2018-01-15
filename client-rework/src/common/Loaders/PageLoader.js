import './PageLoader.css';

import React from 'react';
import { PageContainer } from 'components/common';

export default () => (
  <PageContainer opacity={8} center>
    <div>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </PageContainer>
);
