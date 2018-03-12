import React from 'react';
import { FlatBar } from 'components/TopBars';

const tabs = ['Home', 'Ranking', 'Guides'];

export default ({ activeTab, onSetActiveTab }) => (
  <FlatBar activeTab={activeTab} onClickTab={onSetActiveTab} tabs={tabs} />
);
