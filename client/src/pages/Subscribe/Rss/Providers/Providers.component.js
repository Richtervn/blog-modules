import './Providers.css';
import React, { Component } from 'react';

import { TabLoader } from 'common/Loaders';
import { openModal } from 'common/Modal';
import { AddCardButton } from 'components/Buttons';

import ToolsBar from './ToolsBar.container';
import ProviderCard from './ProviderCard.container';

export default class Providers extends Component {
  componentWillMount() {
    const { onGetProviders } = this.props;
    onGetProviders();
  }

  render() {
    const { providers } = this.props;
    if (!providers) {
      return <TabLoader />;
    }
    return (
      <div id="rss-providers" className="container-fluid">
        <div className="row">
          <ToolsBar />
        </div>
        <div className="row providers">
          {providers.map(provider => <ProviderCard key={provider._id} provider={provider} />)}
          <AddCardButton
            customClass="add-provider-btn"
            col={3}
            minHeight="117px"
            onClick={() => openModal('AddRssProvider')}
          />
        </div>
      </div>
    );
  }
}
