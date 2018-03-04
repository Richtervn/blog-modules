import React, { Component } from 'react';

// import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import TopNavBar from './TopNavBar.container';

class MuOnline extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <PageContainer backgroundUrl="/images/backgrounds/mg_mu.jpg" opacity={6}>
        <TopNavBar />
      </PageContainer>
    );
  }
}

export default MuOnline;
