import './CharacterCard.css';
import React from 'react';
import classNames from 'classnames';
import { formatNumber } from 'helpers';

export default ({ character, isActive, onClick }) => {
  return (
    <div className={classNames('ds9799-character-card', { active: isActive })} onClick={onClick}>
      {character.IsVip === 1 && (
        <div className="vip-icon">
          <img src="/images/icons/vip.png" alt="vip" />
        </div>
      )}
      <div className="avatar">
        <img src={`/images/muonline/character/${character.Class}.png`} alt={character.Class} />
      </div>
      <div className="content">
        <div className="name">{character.Name}</div>
        <div className="level">
          <strong>Level : </strong>
          {character.cLevel}
        </div>
        <div className="zen">
          <strong>Zen : </strong>
          {formatNumber(character.Money)}
        </div>
        <div className="resets">
          <strong>Resets : </strong>
          {character.Resets}
        </div>
        <div className="grand-resets">
          <strong>Grand Resets : </strong>
          {character.GrandResets}
        </div>
      </div>
    </div>
  );
};
