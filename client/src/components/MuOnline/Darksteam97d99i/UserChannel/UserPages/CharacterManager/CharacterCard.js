import React from 'react';

export default ({ character, isFocus, onSelect }) => (
  <div className={isFocus ? 'ds9799-character-card ds9799-character-card-active' : 'ds9799-character-card'} onClick={() => onSelect(character)}>
    <div className="row no-row-margin">
      <div className="col-4 no-col-margin">
        <img src={`/app_modules/images/muonline/character/${character.Class}.png`} className="ds9799-character-card-icon"/>
      </div>
      <div className="col-8 no-col-margin text-center">
        <h5>{character.Name}</h5>
        <div><strong>Level : </strong>{character.cLevel}</div>
        <div><strong>Zen : </strong>{character.Money}</div>
        <div><strong>Resets : </strong>{character.Resets}</div>
      </div>
    </div>
  </div>
);
