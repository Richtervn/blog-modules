import './GameAbout.css';
import React, { Component } from 'react';
import { IntroductionCard, ArticleView, ContentCard } from 'components/AboutBuilder';
import { TabLoader } from 'common/Loaders';

class GameAbout extends Component {
  componentWillMount() {
    if (!this.props.aboutContent) {
      this.props.onGetAboutContent(this.props.gameInfo._id);
    }
  }

  render() {
    const { gameInfo, aboutContent, onEditAboutContent } = this.props;
    if (!aboutContent) {
      return <TabLoader />;
    }

    return (
      <div className="game-about">
        <div className="intro-col">
          <IntroductionCard
            info={aboutContent.Info}
            imgUrl={gameInfo.CoverUri.replace('./public', window.appConfig.API_HOST)}
            onSave={info => onEditAboutContent({ GameId: gameInfo._id, Info: info })}
          />
        </div>
        <div className="article-col">
          <ArticleView
            data={aboutContent.Sections}
            onSave={sections => onEditAboutContent({ GameId: gameInfo._id, Sections: sections })}
          />
        </div>
        <div className="contents-col">
          <ContentCard data={aboutContent.Sections} />
        </div>
      </div>
    );
  }
}

export default GameAbout;
