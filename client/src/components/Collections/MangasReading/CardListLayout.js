import React, { Component } from 'react';
import MangaCard from './MangaCard';

import arraySplitter from 'factories/arraySplitter';

class CardListLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    let willScroll = false;
    if (prevProps.mangas.length < this.props.mangas.length) willScroll = true;
    for (let i = 0; i < prevProps.mangas.length; i++) {
      if (prevProps.mangas[i].Chapter != this.props.mangas[i].Chapter) {
        willScroll = true;
        break;
      }
    }
    if (willScroll) {
      const focusManga = document.getElementsByClassName('manga-card-active')[0];
      focusManga.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  render() {
    const { mangas, focusMangaId, onSelectManga } = this.props;
    if (mangas.length == 0) return null;
    const originalMangas = mangas.slice(0);
    const mangasChunks = arraySplitter(originalMangas, 3);

    return (
      <div>
        {mangasChunks.map((mangaChunk, row) => (
          <div key={row}>
            <div className="row no-row-margin static-position">
              {mangaChunk.map((manga, i) => {
                if (!manga.Name) {
                  return <div className="col no-col-margin static-position" key={i} />;
                }
                return (
                  <div className="col no-col-margin static-position" key={i}>
                    <MangaCard
                      manga={manga}
                      onSelectManga={onSelectManga}
                      isFocus={focusMangaId == manga._id}
                    />
                  </div>
                );
              })}
            </div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default CardListLayout;
