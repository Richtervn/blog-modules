import React from 'react';

import CharacterCard from '../CharacterManager/CharacterCard';
import VipCard from './VipCard';

export default ({ user, characters, onGetCharacters, focusCharacter, onSetFocusCharacter, vipSystems, onGetVipSystems }) => {
  if (!characters) {
    onGetCharacters(user.memb___id);
    return null;
  }

  if(!vipSystems) {
    onGetVipSystems();
    return null;
  }

  return (
    <div className="row no-row-margin">
      <div className="col-4 no-col-margin">
        {characters.map((character, i) => (
          <CharacterCard
            key={i}
            character={character}
            onSelect={onSetFocusCharacter}
            isFocus={focusCharacter.Name == character.Name}
          />
        ))}
      </div>
      <div className="col-4 no-col-margin">
        <div className="ds9799-vip-shop">
          <div className="ds9799-vip-shop-header text-center">Buy Character VIP</div>
          {vipSystems
            .filter(item => item.type == 'Character')
            .map((item, i) => <VipCard key={i} item={item} />)}
        </div>
      </div>
      <div className="col-4 no-col-margin">
        <div className="ds9799-vip-shop">
          <div className="ds9799-vip-shop-header text-center">Buy Account VIP</div>
          {vipSystems
            .filter(item => item.type == 'Account')
            .map((item, i) => <VipCard key={i} item={item} />)}
        </div>
      </div>
    </div>
  );
};
