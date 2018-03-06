import './GameOverviewDetail.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { TabLoader } from 'common/Loaders';
import { ArticleView, ContentCard } from 'components/AboutBuilder';

class GameOverviewDetail extends Component {
  componentWillMount() {
    const { subPage, overview, onGetOverview } = this.props;
    if (!overview || overview._id !== parseInt(subPage, 10)) {
      onGetOverview(subPage);
    }
  }

  render() {
    const { subPage, overview, onEditOverviewDetail, match, history } = this.props;
    if (!overview || overview._id !== parseInt(subPage, 10)) {
      return <TabLoader />;
    }

    return (
      <div className="game-overview-detail">
        <div className="feature">
          <div className="title">{overview.Title}</div>
          <button
            className="btn"
            onClick={() => history.push(`/gaming_history/${match.params.game}/${match.params.tab}`)}>
            <i className="fa fa-long-arrow-left" />
          </button>
        </div>
        <div className="article-col">
          <ArticleView
            data={overview.Sections}
            onSave={sections => onEditOverviewDetail({ _id: overview._id, Sections: sections })}
          />
        </div>
        <div className="contents-col">
          <ContentCard data={overview.Sections} />
        </div>
      </div>
    );
  }
}

export default withRouter(GameOverviewDetail);
