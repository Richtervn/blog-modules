import './ModDetail.css';
import React from 'react';
import StarRating from 'react-star-rating-component';

import { openModal } from 'common/Modal';

export default ({ mod, decks, onSetFocusDeck }) => (
  <div className="col-9">
    <div className="row">
      <div id="ygo-mod-detail">
        <div className="feature">
          <button className="btn" onClick={() => openModal('EditYugiohPocMod')}>
            <i className="fa fa-pencil" />
          </button>
          <button className="btn" onClick={() => openModal('DeleteYugiohPocMod')}>
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="label">Yugioh! Power of Chaos</div>
        <div className="name">{mod.Name}</div>
        <div className="rating">
          <StarRating value={mod.Rating} name="ygo-mod-detail" />
        </div>
        <div className="image-wrapper">
          <img src={mod.Image} alt={mod.Name} />
        </div>
        <div className="introduction">
          <strong>Introduction : </strong>
          <p>{mod.Introduction}</p>
        </div>
        <div className="description">
          <strong>Description : </strong>
          <p>{mod.Description}</p>
        </div>
        {mod.Credits && (
          <div className="credits">
            <strong>Credits : </strong>
            <ul>{mod.Credits.map((text, i) => <li key={i}>{text}</li>)}</ul>
          </div>
        )}
        <div className="decks-title">
          <u>Decks Collection</u>
        </div>
        {decks.map(deck => (
          <div className="deck" id={`deck_${deck._id}`} key={deck._id}>
            <div className="label">
              {deck.Name}
              {deck.Winrate && (
                <div className="winrate">
                  &nbsp;(Win rate : <strong>{deck.Winrate}</strong>%)
                </div>
              )}
              <div className="feature">
                <button
                  className="btn"
                  onClick={() => {
                    onSetFocusDeck(deck._id);
                    openModal('EditYugiohPocDeck');
                  }}>
                  <i className="fa fa-pencil" />
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    onSetFocusDeck(deck._id);
                    openModal('DeleteYugiohPocDeck');
                  }}>
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="rating">
              <StarRating value={deck.Rating} name={`deck_${deck._id}`} />
            </div>
            <div className="image-wrapper">
              <img src={deck.Image} alt={deck.Name} />
            </div>
            <div className="description">
              <strong>Description : </strong>
              <p>{mod.Description}</p>
            </div>
            <div className="compare">
              <fieldset>
                <legend>Pros</legend>
                <ul>
                  {deck.Pros.map((pro, i) => (
                    <div key={i} className="alert alert-success">
                      <li>{pro}</li>
                    </div>
                  ))}
                </ul>
              </fieldset>
              <fieldset>
                <legend>Cons</legend>
                <ul>
                  {deck.Cons.map((con, i) => (
                    <div key={i} className="alert alert-danger">
                      <li>{con}</li>
                    </div>
                  ))}
                </ul>
              </fieldset>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
