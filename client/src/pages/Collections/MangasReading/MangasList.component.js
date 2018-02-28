import './MangasList.css';
import React, { Component } from 'react';

import StarRating from 'react-star-rating-component';
import { LeftImageCard } from 'components/Cards';

class MangasList extends Component {

  componentDidUpdate(prevProps, prevState) {
    let willScroll = false;
    if (prevProps.mangas.length < this.props.mangas.length && !this.props.noSearchResult) willScroll = true;
    for (let i = 0; i < prevProps.mangas.length; i++) {
      if (prevProps.mangas[i] && this.props.mangas[i] && prevProps.mangas[i].Chapter !== this.props.mangas[i].Chapter) {
        willScroll = true;
        break;
      }
    }
    if (willScroll) {
      const focusManga = document.getElementsByClassName('left-image-card active')[0];
      focusManga.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  render() {
    const {
      activeTool,
      mangas,
      focusManga,
      search,
      noSearchResult,
      onSetFocusManga,
      onChangeActiveTool,
      onChangeSearchOption,
      onChangeSearchValue,
      onSearchManga,
      onEditManga
    } = this.props;

    if (noSearchResult) {
      return (
        <div className="row mangas-list flex-center">
          <h2 className="notice-text">No result</h2>
        </div>
      );
    }

    return (
      <div className="row mangas-list">
        <div className="container-fluid">
          <div className="row">
            {mangas.length < 1 && <div className="mangas-list-start-view">Start by adding some reading mangas</div>}
            {mangas.map((manga, i) => (
              <LeftImageCard
                key={i}
                col={4}
                imgUrl={manga.CoverUri.replace('./public', window.appConfig.API_HOST)}
                onClick={() => onSetFocusManga(manga._id)}
                isActive={manga._id === focusManga}>
                <div className="text-center">
                  <strong>{manga.Name}</strong>
                  <br />
                  <StarRating
                    name={`mgr-${i}`}
                    value={parseInt(manga.Rating, 10)}
                    onStarClick={value => onEditManga({ _id: manga._id, Rating: value })}
                  />
                  <br />
                  {manga.Genre.map((genre, i) => (
                    <span
                      className="badge badge-info mr-genre-tag"
                      key={i}
                      onClick={e => {
                        e.stopPropagation();
                        if (activeTool !== 'Search') onChangeActiveTool('Search');
                        if (search.option !== 'Genre') onChangeSearchOption('Genre');
                        onChangeSearchValue(genre);
                        onSearchManga({ Genre: genre });
                      }}>
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
        </div>
      </div>
    );
  }
}

export default MangasList;