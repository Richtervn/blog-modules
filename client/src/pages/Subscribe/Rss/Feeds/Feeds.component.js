import './Feeds.css';
import React, { Component } from 'react';

import { TabLoader } from 'common/Loaders';

import ProvidersList from './ProvidersList.component';
import FeedsList from './FeedsList.container';

export default class Feeds extends Component {
  componentWillMount() {
    this.props.onGetFeeds();
    this.props.onGetProviders();
  }

  render() {
    const { feeds, providers } = this.props;
    if (!feeds || !providers) {
      return <TabLoader />;
    }

    return (
      <div id="rss-feeds" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <ProvidersList providers={providers} />
          </div>
          <div className="col-10">
            <FeedsList feeds={feeds} />
          </div>
        </div>
      </div>
    );
  }
}
