import './FlashGames.css';
import React, { Component } from 'react';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';
import { openModal } from 'common/Modal';

const decodeGameName = encodeName => {
  let frags = encodeName.split('_');
  frags = frags.map(frag => frag.charAt(0).toUpperCase() + frag.slice(1, frag.length));
  return frags.join(' ');
};

class FlashGames extends Component {
  constructor(props) {
    super(props);
    const name = decodeGameName(this.props.match.params.name);
    this.state = { name };
    this.props.onGetGame(name);
  }

  componentWillReceiveProps(nextProps) {
    const name = decodeGameName(nextProps.match.params.name);
    if (name !== this.state.name) {
      this.props.onGetGame(name);
      this.setState({ name });
    }
  }

  render() {
    const { currentGame } = this.props;

    if (!currentGame) {
      return <PageLoader />;
    }
    const flashUri = currentGame.Uri;

    return (
      <PageContainer backgroundColor="#324851">
        <div className="flash-games-container">
          <embed
            src={flashUri}
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
  }
}

export default FlashGames;
