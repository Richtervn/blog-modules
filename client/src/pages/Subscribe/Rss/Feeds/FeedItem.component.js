import './FeedItem.css';
import React from 'react';
import moment from 'moment';

export default ({ item }) => (
  <div className="rss-feed-item">
    <div className="item-title">
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="title">
        {item.title}
      </a>
    </div>
    <div className="item-content">
      <div className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
      <div className="corner">
        <div className="item-pub-date">{moment(item.isoDate).format('DD/MM/YYYY HH:mm:ss')}</div>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="title">
          Read more
        </a>
      </div>
    </div>
  </div>
);
