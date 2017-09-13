import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ deck }) => {
  if (!deck) {
    return (
      <div className="alert alert-success" role="alert">
        <strong>Hey yo!</strong> You can start play this mod and add your decks here.
      </div>
    );
  }
  return (
    <div className="text-center static-position ygo-tab-view">
      <h4>
        <strong>{deck.Name.toUpperCase()}</strong>
      </h4>
      <StarRating
        className="larger-star-rating"
        name={`${deck}-rating`}
        value={parseInt(deck.Rating)}
        editing={false}
      />
      <br />
      <img src={deck.Image.replace('./public', 'http://localhost:3000')} />
      <br />
      <br />
      <div className="ygo-tab-view-deck">
        <p>
          <strong>Description : </strong>
          {deck.Description}
        </p>
      </div>
      <div className="row no-row-margin ygo-deck-compare-container">
        <div className="ygo-deck-pros-box">
          <fieldset className="ygo-deck-compare-box">
            <legend className="ygo-deck-box-legend">
              <div className="text-center">Pros</div>
            </legend>
            {deck.Pros.map((pro, i) => <p key={i} className="alert alert-success">{pro}</p>)}
          </fieldset>
        </div>
        <div className="ygo-deck-cons-box">
          <fieldset className="ygo-deck-compare-box">
            <legend className="ygo-deck-box-legend">
              <div className="text-center">Cons</div>
            </legend>
            {deck.Cons.map((con, i) => <p key={i} className="alert alert-danger">{con}</p>)}
          </fieldset>
        </div>
      </div>
    </div>
  );
};
