import React from 'react';
import { RoundBorderBar } from 'components/TopBars';

const tabs = [
  { name: 'Versions', route: '/mu_online/versions' },
  { name: 'Tools', route: '/mu_online/tools' },
  { name: 'Characters', route: '/mu_online/characters' },
  { name: 'Guides', route: '/mu_online/guides' }
];

export default ({ activeTab, onSetActiveTab }) => (
  <RoundBorderBar tabs={tabs} customClass="mu-top-nav-bar" onClick={onSetActiveTab} activeTab={activeTab} />
);
