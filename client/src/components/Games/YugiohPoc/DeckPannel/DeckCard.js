import React from 'react';
import StarRating from 'react-star-rating-component';

export default ({ deck, onSelectDeck, isSelected }) => (
  <div
    className={isSelected ? 'ygo-mod-card noselect ygo-mod-card-active' : 'ygo-mod-card noselect'}
    onClick={() => onSelectDeck(deck)}>
    <div className="row no-row-margin">
      <div className="ygo-mod-card-img-col">
        <img className="ygo-mod-card-icon" src="/app_modules/images/icons/yugioh_deck.png" />
      </div>
      <div className="ygo-mod-card-content">
        <div className="ygo-mod-card-rating">
          <StarRating name={deck.Name} editing={false} value={parseInt(deck.Rating)} />
        </div>
        <div className="ygo-mod-card-name">{deck.Name}</div>
      </div>
    </div>
  </div>
);
