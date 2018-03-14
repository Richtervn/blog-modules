import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Ds9799Page } from '../components';

import { BagItemsEditor } from './BagItemsEditor';
import { ServerInfo } from './ServerInfo';
import { GameSetting } from './GameSetting';

class Admin extends Component {
  componentWillMount() {
    const { page, onSetPage } = this.props;
    if (!page) {
      onSetPage('bag_items_editor');
    }
  }

  render() {
    const { page } = this.props;
    if (!page) return <Redirect to="/darksteam_97d99i/server/bag_items_editor" />;
    return (
      <Ds9799Page>
        {page === 'bag_items_editor' && <BagItemsEditor />}
        {page === 'server_info' && <ServerInfo />}
        {page === 'game_setting' && <GameSetting />}
      </Ds9799Page>
    );
  }
}

export default Admin;
