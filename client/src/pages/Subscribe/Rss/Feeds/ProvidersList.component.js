import './ProvidersList.css';
import React from 'react';

export default ({ providers }) => (
  <div id="rss-providers-list">
    {providers.length < 1 && <div className="no-providers">No providers</div>}
    {providers.map(provider => (
      <div className="provider" key={provider._id}>
        <div className="title-wrap">
          <img className="favicon" src={`${provider.Site}/favicon.ico`} alt={provider.Provider} />
          <a href={`#${provider.Provider}`} className="title">
            {provider.Provider}
          </a>
        </div>
        <ul className="subscribe-list">
          {provider.RssUrl.map(rssUrl => (
            <li key={rssUrl._id} className="subscribe-item">
              <a className="category" href={`#${provider.Provider}_${rssUrl.Category}`}>
                {rssUrl.Category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
