import './EndedManga.css';
import React, { Component } from 'react';

import StarRating from 'react-star-rating-component';
import { LeftImageCard } from 'components/Cards';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

class EndedManga extends Component {
  componentWillMount() {
    this.props.onGetMangas();
  }

  render() {
    const { mangas } = this.props;

    if (!mangas) {
      return <PageLoader />;
    }
    return (
      <PageContainer backgroundUrl="/images/backgrounds/dark_art.jpg">
        <div className="row ended-mangas-row">
          {mangas.length < 1 && <div className="mangas-list-start-view">Start by adding some reading mangas</div>}
          {mangas.map((manga, i) => (
            <LeftImageCard key={i} col={3} imgUrl={manga.CoverUri.replace('./public', window.appConfig.API_HOST)} nohover>
              <div className="text-center">
                <strong>{manga.Name}</strong>
                <br />
                <StarRating name={`mgr-${i}`} value={parseInt(manga.Rating, 10)} editing={false} />
                <br />
                {manga.Genre.map((genre, i) => (
                  <span className="badge badge-info mr-genre-tag no-hover" key={i}>
                    {genre}
                  </span>
                ))}
                <div className="manga-chaper-text">
                  <strong>CHAPTER : {manga.Chapter}</strong>
                </div>
              </div>
            </LeftImageCard>
          ))}
        </div>
      </PageContainer>
    );
  }
}

export default EndedManga;