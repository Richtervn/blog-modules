import './GameOverviews.css';
import React, { Component } from 'react';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { AddCardButton } from 'components/Buttons';
import { TextPriorityCard } from 'components/Cards';

import GameOverviewDetail from './GameOverviewDetail.container';

class GameOverviews extends Component {
  componentWillMount() {
    const { onGetOverviews, gameInfo } = this.props;
    onGetOverviews(gameInfo._id);
  }

  render() {
    const { params, overviews, onSetFocusOverview } = this.props;
    if (params.subPage) {
      return <GameOverviewDetail subPage={params.subPage} />;
    }
    if (!overviews) {
      return <TabLoader />;
    }
    return (
      <div className="container-fluid">
        <div className="row game-overviews-list">
          {overviews.map(overview => (
            <TextPriorityCard
              col={3}
              key={overview._id}
              priority={overview.Priority}
              route={`/gaming_history/${params.game}/overview/${overview._id}`}
              onClickEdit={() => {
                onSetFocusOverview(overview);
                openModal('EditGamingHistoryOverview');
              }}
              onClickDelete={() => {
                onSetFocusOverview(overview);
                openModal('DeleteGamingHistoryOverview');
              }}>
              <div className="game-overview-card">
                <div className="title">{overview.Title}</div>
                <div className="description">{overview.Description}</div>
              </div>
            </TextPriorityCard>
          ))}

          <AddCardButton col={3} onClick={() => openModal('AddGamingHistoryOverview')} minHeight="137px" />
        </div>
      </div>
    );
  }
}

export default GameOverviews;
