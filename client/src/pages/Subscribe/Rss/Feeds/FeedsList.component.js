import './FeedsList.css';
import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

import FeedItem from './FeedItem.component';

export default ({ feeds, onGetFeed, feedLoadingId }) => (
  <div id="rss-feeds-list">
    {feeds.map((provider, i) => (
      <div className="row" key={i}>
        <div className="feed-provider" id={`${provider.provider}`}>
          <div className="site-url">
            <a href={provider.site} target="_blank" rel="noopener noreferrer">
              {provider.provider}
            </a>
            <button onClick={() => onGetFeed(provider._id)}>
              <i className={classnames('fa fa-refresh fa-fw', { 'fa-spin': provider._id === feedLoadingId })} />
            </button>
          </div>
          {provider.feeds.map((feed, j) => (
            <div className="feed" key={j} id={`${provider.provider}_${feed.category}`}>
              <div className="header">
                <div>
                  {feed.data.image && (
                    <a href={feed.data.image.link}>
                      <img src={feed.data.image.url} alt={feed.data.image.title} />
                    </a>
                  )}
                  <div className="title">{feed.data.title}</div>
                </div>
                <div className="pub-date">{moment(feed.data.isoDate).format('DD/MM/YYYY HH:mm:ss')}</div>
              </div>
              <div className="items">{feed.data.items.map((item, k) => <FeedItem item={item} key={k} />)}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
