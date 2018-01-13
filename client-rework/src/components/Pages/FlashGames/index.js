import './FlashGames.css';
import React, { Component } from 'react';

import Page from 'containers/Layout/Page';
import { PageLoader } from 'components/Loaders';

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
    if (!this.props.uri) {
      return <PageLoader />;
    }
    const flashUri = this.props.uri.replace('./public', window.appConfig.API_HOST);
    return (
      <Page>
        <div className="flash-games-container">
          <embed src={flashUri} type="application/x-shockwave-flash" width="800" height="600" />
        </div>
      </Page>
    );
  }
}

export default FlashGames;
