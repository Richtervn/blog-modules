import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ game }) => (
  <div className="card-content channel-bar">
    <div className="text-center">
      <h4>{game.Name}</h4>
      <img src={game.CoverUri ? game.CoverUri.replace('./public', 'http://localhost:3000') : null} />
      <br />
      <StarRating
        className="larger-star-rating"
        name="manga-rating-view"
        value={parseInt(game.Rating)}
        editing={false}
      />
    </div>
    <p>
      <strong>Publisher : {game.Publisher}</strong>
    </p>
    <p>
      <strong>Periods : </strong>
      {game.Periods.map((period, i) => (
        <span key={i} className="badge badge-success mr-genre-tag">
          {period}
        </span>
      ))}
    </p>
    <p style={{ wordWrap: 'break-word' }}>
      <strong>Introduce : </strong>
      {game.Introduce}
    </p>
  </div>
);
