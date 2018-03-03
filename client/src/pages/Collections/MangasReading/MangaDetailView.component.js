import './MangaDetailView.css';
import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({
  manga,
  onEditManga,
  onSearchManga,
  onChangeSearchOption,
  onChangeSearchValue,
  onChangeActiveTool,
  search,
  activeTool
}) => {
  if (!manga) {
    return (
      <div className="card-content manga-detail-view">
        <i>No manga selected</i>
      </div>
    );
  }
  return (
    <div className="card-content manga-detail-view">
      <div className="text-center">
        <h4>{manga.Name}</h4>
        <img
          src={manga.CoverUri ? manga.CoverUri : null}
          alt={`${manga.Name} cover`}
        />
        <br />
        <StarRating
          className="larger-star-rating"
          name="manga-rating-view"
          value={parseInt(manga.Rating, 10)}
          onStarClick={value => onEditManga({ _id: manga._id, Rating: value })}
        />
      </div>
      <p>
        <strong>Reading Chapter : {manga.Chapter}</strong>
      </p>
      {manga.ReadingUrl && (
        <p>
          <a href={manga.ReadingUrl} target="_blank">
            Continue reading
          </a>
        </p>
      )}
      <p>
        <strong>Authors : </strong>
        {manga.Authors.map((author, i) => (
          <span
            key={i}
            className="badge badge-success mr-genre-tag"
            onClick={e => {
              e.stopPropagation();
              if (activeTool !== 'Search') onChangeActiveTool('Search');
              if (search.option !== 'Author') onChangeSearchOption('Author');
              onChangeSearchValue(author);
              onSearchManga({ Author: author });
            }}>
            {author}
          </span>
        ))}
      </p>
      <p>
        <strong>Genres : </strong>
        {manga.Genre.map((genre, i) => (
          <span
            key={i}
            className="badge badge-info mr-genre-tag"
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
      </p>
      <p style={{ wordWrap: 'break-word' }}>
        <strong>Introduce : </strong>
        {manga.Introduce}
      </p>
      <p>
        <strong>Aka : </strong>
        {manga.Aka.map((aka, i) => (
          <span key={i} className="badge badge-warning mr-aka-tag">
            {aka}
          </span>
        ))}
      </p>
    </div>
  );
};
