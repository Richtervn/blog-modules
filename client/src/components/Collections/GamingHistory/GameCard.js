import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ game, isFocus, onSelectGame }) => (
  <div
    className={isFocus ? 'card manga-card manga-card-active' : 'card manga-card '}
    onClick={() => onSelectGame(game)}>
    <div className="row no-row-margin static-position">
      <div className="col-4 no-col-margin static-position">
        <img
          className="manga-card-image"
          src={game.CoverUri ? game.CoverUri.replace('./public', 'http://localhost:3000') : null}
        />
      </div>
      <div className="col text-center static-position manga-card-content">
        <strong>{game.Name}</strong>
        <br />
        <StarRating name={game.Name} value={parseInt(game.Rating)} editing={false} />
        <br />
        <strong>Publisher : {game.Publisher}</strong>
        <br />
        {game.Periods.map((period, i) => (
          <span className="badge badge-info mr-genre-tag" key={i}>
            {period}
          </span>
        ))}
      </div>
    </div>
  </div>
);
