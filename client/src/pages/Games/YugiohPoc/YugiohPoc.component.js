import './YugiohPoc.css';
import React, { Component } from 'react';

import { PageLoader } from 'common/Loaders';
import PageContainer from 'common/PageContainer';

import SideNavBar from './SideNavBar.container';
import DeckList from './DeckList.container';
import ModDetail from './ModDetail.container';

class YugiohPoc extends Component {
  constructor(props) {
    super(props);
    this.state = { didLoaded: false };
  }

  componentWillMount() {
    const { mods, onGetMods } = this.props;
    if (!mods) {
      onGetMods();
    }
  }

  componentWillReceiveProps(nextProps) {
    let didLoaded = false;
    if (!this.props.mods && nextProps.mods) {
      didLoaded = true;
    }
    if (didLoaded) {
      this.props.onGetDecks(nextProps.mods[0]._id);
      this.setState({ didLoaded });
    }
  }

  render() {
    const { mods, decks } = this.props;
    if (!mods || !decks) {
      return <PageLoader />;
    }
    return (
      <PageContainer backgroundUrl="/images/backgrounds/yugioh-cards.jpg" opacity={7}>
        <div className="container-fluid">
          <div className="row">
            <SideNavBar />
            <div className="col-9">
              <div className="row">
                <ModDetail/>
                <DeckList />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default YugiohPoc;
