import './ProviderCard.css';
import React from 'react';

import { openModal } from 'common/Modal';
import { AdminButtons } from 'components/Buttons';

export default ({ provider, onSetFocusProvider, onClickEdit, onClickDelete }) => (
  <div className="col-3">
    <div className="row">
      <div className="rss-provider-card">
        <div className="header">
          <AdminButtons
            onClickEdit={() => {
              onSetFocusProvider(provider._id);
              openModal('EditRssProvider');
            }}
            onClickDelete={() => {
              onSetFocusProvider(provider._id);
              openModal('DeleteRssProvider');
            }}
            customClass="rss-provider-card-feature"
          />
          <div className="favicon-container">
            <img className="site-favicon" src={`${provider.Site}/favicon.ico`} alt={provider.Provider} />
          </div>
          <div className="site-name">{provider.Provider}</div>
        </div>
        <div className="content">
          <div className="info-row">
            <div className="label">Provider:</div>
            <div className="info">{provider.Provider}</div>
          </div>
          <div className="info-row">
            <div className="label">Site:</div>
            <div className="info">{provider.Site}</div>
          </div>
          <div className="info-row">
            <div className="label">Subscribe:</div>
            <div className="info">{provider.RssUrl.length} RSS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
