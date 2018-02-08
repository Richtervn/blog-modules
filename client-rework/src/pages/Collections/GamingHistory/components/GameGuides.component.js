import './GameGuides.css';
import React, { Component } from 'react';

import { TabLoader } from 'common/Loaders';
import AddCardButton from 'components/AddCardButton';

import GameGuideDetail from './GameGuideDetail.container';

class GameGuides extends Component {
  componentWillMount() {
    const { guides, onGetGuides, subPage } = this.props;
    if (!subPage && !guides) {
      onGetGuides();
    }
  }

  render() {
    const { subPage, guides } = this.props;
    if (subPage) {
      return <GameGuideDetail subPage={subPage} />;
    }
    if (!guides) {
      return <TabLoader />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <AddCardButton col={3} />
        </div>
      </div>
    );
  }
}

export default GameGuides;
