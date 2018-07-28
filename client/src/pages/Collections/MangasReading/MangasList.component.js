import './MangasList.css';
import React, { Component } from 'react';

import StarRating from 'react-star-rating-component';
import { LeftImageCard } from 'components/Cards';

class MangasList extends Component {
  componentDidUpdate(prevProps, prevState) {
    let willScroll = false;
    for (let i = 0; i < prevProps.mangas.length; i++) {
      if (prevProps.mangas[i] && this.props.mangas[i] && prevProps.mangas[i].Chapter !== this.props.mangas[i].Chapter) {
        willScroll = true;
        break;
      }
    }
    if (willScroll) {
      const focusManga = document.getElementsByClassName('left-image-card active')[0];
      if (focusManga) {
        focusManga.scrollIntoView({
          behavior: 'smooth'
        });
      }
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
        <div className="row flex-center" id="mgr-mangas-list">
          <h2 className="notice-text">No result</h2>
        </div>
      );
    }

    return (
      <div className="row" id="mgr-mangas-list">
        <div className="container-fluid">
          <div className="row">
            {mangas.length < 1 && (
              <div id="mgr-mangas-list-start" className="flex-center">
                Start by adding some reading mangas
              </div>
            )}
            {mangas.map((manga, i) => {
              let customClass;
              if (manga.Status === 'HasNew') {
                customClass = 'hightlight-card';
              }
              if (manga.Status === 'Stone') {
                customClass = 'gray-card';
              }
              return (
                <LeftImageCard
                  customClass={customClass}
                  key={i}
                  col={4}
                  imgUrl={manga.CoverUri}
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
                        className="badge badge-info mgr-genre-tag"
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
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MangasList;
