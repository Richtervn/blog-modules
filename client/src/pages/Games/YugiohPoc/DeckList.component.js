import './DeckList.css';
import React from 'react';

import { openModal } from 'common/Modal';

export default ({ decks }) => {
  if (!decks) {
    return (
      <div className="col-3">
        <div className="row">
          <div className="ygo-deck-list no-content">Available after have a mod</div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-3">
      <div className="row">
        <div className="ygo-deck-list">
          <div className="label">Decks collection</div>
          <div className="content">
            <ul>
              {decks.map(deck => (
                <li key={deck._id}>
                  <a className="deck-index" href={`#deck_${deck._id}`}>
                    {deck.Name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn" onClick={() => openModal('AddYugiohPocDeck')}>
              Insert deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
