import './Feeds.css';
import moment from 'moment';
import React, { Component } from 'react';

import { TabLoader } from 'common/Loaders';

export default class Feeds extends Component {
  componentWillMount() {
    this.props.onGetFeeds();
  }

  render() {
    const { feeds } = this.props;
    if (!feeds) {
      return <TabLoader />;
    }

    return (
      <div id="rss-feeds" className="container-fluid">
        <div className="row">
          {feeds.map((provider, i) => (
            <div key={i} className="feed-provider">
              <div className="site-url">
                <a href={provider.site} target="_blank" rel="noopener noreferrer">
                  {provider.provider}
                </a>
              </div>
              {provider.feeds.map((feed, j) => (
                <div className="feed" key={j}>
                  <div className="header">
                    <div>
                      {feed.data.image && (
                        <a href={feed.data.image.link}>
                          <img src={feed.data.image.url} alt={feed.data.image.title} />
                        </a>
                      )}
                      <a className="title">{feed.data.title}</a>
                    </div>
                    <div className="pub-date">{moment(feed.data.pubDate).format('DD/MM/YYYY HH:mm:ss')}</div>
                  </div>
                  <div className="items">
                    {feed.data.items.map((item, k) => (
                      <div className="feed-item">
                        <div className="item-title">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="title">
                            {item.title}
                          </a>
                        </div>
                        <div className="item-content">
                          <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
                          <div className="corner">
                            <div className="item-pub-date">{moment(item.pubDate).format('DD/MM/YYYY HH:mm:ss')}</div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="title">
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
