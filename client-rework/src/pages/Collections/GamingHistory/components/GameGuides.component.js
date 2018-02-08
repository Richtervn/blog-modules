import './GameGuides.css';
import React, { Component } from 'react';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';
import AddCardButton from 'components/AddCardButton';
import { TextPriorityCard } from 'components/Cards';

import GameGuideDetail from './GameGuideDetail.container';

class GameGuides extends Component {
  componentWillMount() {
    const { guides, onGetGuides, params } = this.props;
    if (!params.subPage && !guides) {
      onGetGuides();
    }
  }

  render() {
    const { params, guides, onSetFocusGuide } = this.props;
    if (params.subPage) {
      return <GameGuideDetail subPage={params.subPage} />;
    }
    if (!guides) {
      return <TabLoader />;
    }
    return (
      <div className="container-fluid">
        <div className="row game-guides-list">
          {guides.map(guide => (
            <TextPriorityCard
              col={3}
              key={guide._id}
              priority={guide.Priority}
              route={`/gaming_history/${params.game}/guides/${guide._id}`}
              onClickEdit={() => {
                onSetFocusGuide(guide);
                openModal('EditGamingHistoryGuide');
              }}>
              <div className="game-guide-card">
                <div className="title">{guide.Title}</div>
                <div className="author">by : {guide.Author}</div>
                <div className="source-wrapper">
                  <div className="source">- from : {guide.Source} -</div>
                </div>
              </div>
            </TextPriorityCard>
          ))}

          <AddCardButton col={3} onClick={() => openModal('AddGamingHistoryGuide')} minHeight="137.5px" />
        </div>
      </div>
    );
  }
}

export default GameGuides;
