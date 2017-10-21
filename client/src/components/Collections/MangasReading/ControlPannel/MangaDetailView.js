import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ manga }) => (
  <div className="card-content channel-bar">
    <div className="text-center">
      <h4>{manga.Name}</h4>
      <img src={manga.CoverUri ? manga.CoverUri.replace('./public', 'http://localhost:3000') : null} />
      <br />
      <StarRating
        className="larger-star-rating"
        name="manga-rating-view"
        value={parseInt(manga.Rating)}
        editing={false}
      />
    </div>
    <p>
      <strong>Reading Chapter : {manga.Chapter}</strong>
    </p>
    {manga.ReadingUrl && <p><a href={manga.ReadingUrl} target="_blank">Continue reading</a></p>}
    <p>
      <strong>Authors : </strong>
      {manga.Authors.map((author, i) => (
        <span key={i} className="badge badge-success mr-genre-tag">
          {author}
        </span>
      ))}
    </p>
    <p>
      <strong>Genres : </strong>
      {manga.Genre.map((genre, i) => (
        <span key={i} className="badge badge-info mr-genre-tag">
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
