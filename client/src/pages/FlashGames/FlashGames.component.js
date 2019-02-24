import './FlashGames.css';
import React, { useEffect } from 'react';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';
import { openModal } from 'common/Modal';
import { getFullName } from 'helpers';

export default ({ match, currentGame, onGetGame }) => {
  useEffect(() => {
    const gameName = getFullName(match.params.name);
    if (!currentGame || currentGame.Name !== gameName) onGetGame(gameName);
  }, [match.params.name]);

  if (!currentGame || currentGame.Name !== getFullName(match.params.name)) {
    return <PageLoader />;
  }

  return (
    <PageContainer backgroundColor="#324851">
      <div className="flash-games-container">
        <embed
          src={currentGame.Uri}
          type="application/x-shockwave-flash"
          width={currentGame.Width || 800}
          height={currentGame.Height || 600}
        />
        <div className="flash-games-addon">
          <button
            className="btn btn-secondary"
            style={{ marginRight: '2px' }}
            onClick={() => openModal('EditFlashGame')}>
            <i className="fa fa-gear fa-fw" />
          </button>
          <button className="btn btn-secondary" onClick={() => openModal('FlashGameGuide')}>
            <i className="fa fa-question-circle-o fa-fw" />
          </button>
        </div>
      </div>
    </PageContainer>
  );
};
