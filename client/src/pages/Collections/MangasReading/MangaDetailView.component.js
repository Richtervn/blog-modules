import './MangaDetailView.css';
import React from 'react';
import StarRating from 'react-star-rating-component';

const makeGoogleQuery = manga => {
  let query = manga.Name.split(' ').join('+');
  if (manga.Chapter) {
    query += '+chap+';
    let chapter = manga.Chapter;
    if (isNaN(parseInt(chapter, 10))) {
      if (chapter.indexOf('0') === 0) {
        if (chapter.indexOf('0') === -1) {
          chapter = chapter.slice(chapter.indexOf('0') + 2, chapter.length);
        } else {
          chapter = chapter.slice(chapter.indexOf('0') + 1, chapter.length);
        }
      }
    } else {
      query += parseInt(chapter, 10).toString();
    }
  }
  return `https://www.google.com/search?q=${query}`;
};

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
        <h4>
          <a
            href={makeGoogleQuery(manga)}
            rel="noreferrer noopener"
            target="_blank"
            title={`Search ${manga.Name} by google`}>
            {manga.Name}
          </a>
        </h4>
        <img src={manga.CoverUri ? manga.CoverUri : null} alt={`${manga.Name} cover`} />
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
          <a href={manga.ReadingUrl} target="_blank" rel="noopener noreferrer">
            Continue reading
          </a>
        </p>
      )}
      <p>
        <strong>Authors : </strong>
        {manga.Authors.map((author, i) => (
          <span
            key={i}
            className="badge badge-success mgr-genre-tag"
            onClick={e => {
              e.stopPropagation();
              if (activeTool !== 'Search') onChangeActiveTool('Search');
              if (search.option !== 'Authors') onChangeSearchOption('Authors');
              onChangeSearchValue(author);
              onSearchManga({ Authors: author });
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
            className="badge badge-info mgr-genre-tag"
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
