import './GamingHistory.css';
import _ from 'underscore';
import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';
import { Redirect } from 'react-router-dom';

import PageContainer from 'common/PageContainer';
import { PageLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';

import { AddCardButton } from 'components/Buttons';
import { LeftImageCard } from 'components/Cards';
import GamePage from './GamePage.container';

class GamingHistory extends Component {
  componentWillMount() {
    const { list, onGetList } = this.props;
    if (!list) onGetList();
  }

  render() {
    const { list, match, onSetFocusGame } = this.props;
    const { game, tab, subPage } = match.params;

    if (!list) {
      return <PageLoader />;
    }

    if (game) {
      const gameInfo = list.find(gameInList => gameInList.Name.toLowerCase().replace(/ /g, '_') === game);
      if (!gameInfo) {
        return <Redirect to="/404" />;
      }
      if (!tab) {
        return <Redirect to={`/gaming_history/${game}/about`} />;
      }
      if (tab) {
        const availableTabs = ['about', 'guides', 'overview'];
        if (!_.contains(availableTabs, tab)) {
          return <Redirect to="/404" />;
        }
      }
      return <GamePage gameInfo={gameInfo} params={{ game, tab, subPage }} />;
    }

    return (
      <PageContainer backgroundUrl="/images/backgrounds/blades_of_time.jpg" opacity={5}>
        <div className="container-fluid">
          <div className="row game-list-row">
            {list.map(game => (
              <LeftImageCard
                key={game._id}
                imgUrl={game.CoverUri}
                col={3}
                route={`/gaming_history/${game.Name.toLowerCase().replace(/ /g, '_')}`}
                admin
                onClickEdit={() => {
                  onSetFocusGame(game);
                  openModal('EditGamingHistory');
                }}
                onClickDelete={() => {
                  onSetFocusGame(game);
                  openModal('DeleteGamingHistory');
                }}>
                <div className="gaming-history-card-content">
                  <div className="game-title">{game.Name}</div>
                  <div className="game-genre">
                    {game.Genres.map((genre, i) => (
                      <span key={i} className="badge badge-warning">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="game-publishers">
                    <i>{game.Publishers.join(', ')}</i>
                  </div>
                  <div className="game-rating">
                    <StarRating name={`ghr-${game._id}`} value={game.Rating} />
                  </div>
                  <div className="game-period">
                    {game.Periods.map((period, i) => (
                      <span key={i} className="badge badge-info">
                        {period}
                      </span>
                    ))}
                  </div>
                </div>
              </LeftImageCard>
            ))}
            <AddCardButton col={3} minHeight="182px" onClick={() => openModal('AddGamingHistory')} />
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default GamingHistory;
