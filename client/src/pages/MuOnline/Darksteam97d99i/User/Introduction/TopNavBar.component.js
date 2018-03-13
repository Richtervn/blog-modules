import React from 'react';
import { FlatBar } from 'components/TopBars';

const tabs = ['Home', 'Hall of Fame', 'Guides'];

export default ({ activeTab, onSetActiveTab }) => (
  <FlatBar activeTab={activeTab} onClickTab={onSetActiveTab} tabs={tabs} />
);
