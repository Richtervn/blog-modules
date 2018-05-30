import './CharacterCard.css';
import React from 'react';
import classNames from 'classnames';
import { formatNumber } from 'helpers';

export default ({ character, isActive, onClick, children, nameOnly }) => {
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
        {!nameOnly && (
          <div className="level">
            <strong>Level : </strong>
            {character.cLevel}
          </div>
        )}
        {!nameOnly && (
          <div className="zen">
            <strong>Zen : </strong>
            {formatNumber(character.Money)}
          </div>
        )}
        {!nameOnly && (
          <div className="resets">
            <strong>Resets : </strong>
            {character.Resets}
          </div>
        )}
        {!nameOnly && (
          <div className="grand-resets">
            <strong>Grand Resets : </strong>
            {character.GrandResets}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
