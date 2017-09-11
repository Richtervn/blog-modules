import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ manga, isFocus, onSelectManga }) => (
  <div
    className={isFocus ? "card manga-card manga-card-active" : "card manga-card "}
    onClick={() => onSelectManga(manga)}>
    <div className="row no-row-margin static-position">
      <div className="col-4 no-col-margin static-position">
        <img className="manga-card-image" src={manga.CoverUri ? manga.CoverUri.replace('./public', 'http://localhost:3000') : null}/>
      </div>
      <div className="col text-center static-position manga-card-content">
        <strong>{manga.Name}</strong>
        <br />
        <StarRating name={manga.Name} value={manga.Rating} editing={false} />
        <br />
        <strong>Chapter : {manga.Chapter}</strong>
        <br />
        {manga.Genre.map((genre, i) => (
          <span className="badge badge-info mr-genre-tag" key={i}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  </div>
);
