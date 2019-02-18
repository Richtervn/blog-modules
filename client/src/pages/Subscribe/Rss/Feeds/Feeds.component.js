import './Feeds.css';
import React, { useEffect } from 'react';

import { TabLoader } from 'common/Loaders';

import ProvidersList from './ProvidersList.component';
import FeedsList from './FeedsList.container';

export default ({ feeds, providers, onGetFeeds, onGetProviders }) => {
  useEffect(() => {
    onGetProviders();
    onGetFeeds();
  }, []);

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
};
