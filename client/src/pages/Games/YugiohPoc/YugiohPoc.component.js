import './YugiohPoc.css';
import React, { useEffect } from 'react';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import SideNavBar from './SideNavBar.container';
import DeckList from './DeckList.container';
import ModDetail from './ModDetail.container';

export default ({ mods, decks, onGetMods, onGetDecks }) => {
  useEffect(() => {
    onGetMods();
  }, []);

  useEffect(() => {
    if (mods && mods.length > 0) {
      onGetDecks(mods[0]._id);
    }
  }, [mods]);

  if (!mods || (mods && mods.length > 0 && !decks)) {
    return <PageLoader />;
  }

  return (
    <PageContainer backgroundUrl="/images/backgrounds/yugioh-cards.jpg" opacity={7}>
      <div className="container-fluid">
        <div className="row">
          <SideNavBar />
          <div className="col-9">
            <div className="row">
              <ModDetail />
              <DeckList />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
