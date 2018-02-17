import './Starcraft.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';
import { getSimpleName } from 'helpers';

import TopNavBar from './TopNavBar.container';
import { Maps } from './Maps';

class Starcraft extends Component {
  componentWillMount() {
    const { match, onSetActiveTab } = this.props;
    if (!match.params.tab) {
      onSetActiveTab('Maps');
    } else {
      onSetActiveTab(getSimpleName(match.params.tab));
    }
  }

  render() {
    const { match, activeTab } = this.props;

    if (!match.params.tab) {
      return <Redirect to="/starcraft_broodwar/maps" />;
    }

    return (
      <PageContainer backgroundUrl="/images/backgrounds/scbw-terran.jpg">
        <div className="sc-page">
          <TopNavBar />
          {activeTab === 'Maps' && <Maps />}
        </div>
      </PageContainer>
    );
  }
}

export default Starcraft;
