import _ from 'underscore';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Ds9799Page } from '../components';

import { BagItemsEditor } from './BagItemsEditor';
import { ServerInfo } from './ServerInfo';
import { GameSetting } from './GameSetting';
import { MonstersList } from './MonstersList';
import { ItemsList } from './ItemsList';
import { BankingLogs } from './BankingLogs';
import { QuestsEditor } from './QuestsEditor';
import { ShopsEditor } from './ShopsEditor';
import { WebQuestsEditor } from './WebQuestsEditor';
import { MonstersSetBase } from './MonstersSetBase';
import { UtilTools } from './UtilTools';

import { serverPages } from './Server.module';
const availableServerPages = _.pluck(serverPages, 'route');

class Server extends Component {
  componentWillMount() {
    const { pageParam, onSetPage } = this.props;
    if (!pageParam) {
      onSetPage('bag_items_editor');
    } else {
      if (_.contains(availableServerPages, pageParam)) {
        onSetPage(pageParam);
      }
    }
  }

  render() {
    const { pageParam } = this.props;
    if (!pageParam) return <Redirect to="/darksteam_97d99i/server/bag_items_editor" />;
    return (
      <Ds9799Page>
        {pageParam === 'bag_items_editor' && <BagItemsEditor />}
        {pageParam === 'server_info' && <ServerInfo />}
        {pageParam === 'game_setting' && <GameSetting />}
        {pageParam === 'banking_logs' && <BankingLogs />}
        {pageParam === 'quests_editor' && <QuestsEditor />}
        {pageParam === 'shops_editor' && <ShopsEditor />}
        {pageParam === 'web_quests_editor' && <WebQuestsEditor />}
        {pageParam === 'monsters_set_base' && <MonstersSetBase />}
        {pageParam === 'monsters_list' && <MonstersList />}
        {pageParam === 'items_list' && <ItemsList />}
        {pageParam === 'util_tools' && <UtilTools />}
      </Ds9799Page>
    );
  }
}

export default Server;
