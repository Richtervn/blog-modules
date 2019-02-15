import './SideNavBar.css';
import React from 'react';

import { BasicSideBar } from 'components/SideBars';
import { SmallIconCard } from 'components/Cards';

import { openModal } from 'common/Modal';
import { sortList } from 'helpers';

export default ({ focusMod, mods, onGetDecks, onSetFocusMod, onSort, sortKey, sortOption, onSearch, onEditMod }) => {
  const sortedMods = sortList(mods, sortKey, sortOption);
  return (
    <div className="col-3">
      <div className="row">
        <BasicSideBar
          sortOptions={['Name', 'Rating']}
          customClass="ygo-side-bar"
          onClickAdd={() => openModal('AddYugiohPocMod')}
          onSort={onSort}
          onSearch={text => onSearch({ Name: text })}>
          {sortedMods.map(mod => (
            <SmallIconCard
              key={mod._id}
              label={mod.Name}
              icon={mod.Icon}
              rating={mod.Rating}
              isActive={mod._id === focusMod}
              customClass="ygo-mod-card"
              onClick={() => {
                if (focusMod !== mod._id) {
                  onGetDecks(mod._id);
                  onSetFocusMod(mod._id);
                }
              }}
              onRating={value => onEditMod({ _id: mod._id, Rating: value })}
            />
          ))}
          {sortedMods.length === 0 && (
            <div className="no-content-wrapper">
              <i className="fa fa-long-arrow-up fa-2x" />
              <div className="notice">Start by adding a mod</div>
            </div>
          )}
        </BasicSideBar>
      </div>
    </div>
  );
};
