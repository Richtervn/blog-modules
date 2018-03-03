import './SideNavBar.css';
import React from 'react';

import { BasicSideBar } from 'components/SideBars';
import { SmallIconCard } from 'components/Cards';

export default ({ focusMod, mods, onGetDecks, onSetFocusMod }) => (
  <div className="col-3">
    <div className="row">
      <BasicSideBar sortOptions={['Name', 'Rating']} customClass="ygo-side-bar">
        {mods.map(mod => (
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
          />
        ))}
      </BasicSideBar>
    </div>
  </div>
);
