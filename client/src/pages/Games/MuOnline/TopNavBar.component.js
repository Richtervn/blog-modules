// #1e434c
// #063852

import React from 'react';
import { RoundBorderBar } from 'components/TopBars';

const tabs = [
  { name: 'Versions', route: '/mu_online/versions' },
  { name: 'Tools', route: '/mu_online/tools' },
  { name: 'Characters', route: '/mu_online/characters' },
  { name: 'Guides', route: '/mu_online/guides' }
];

export default () => <RoundBorderBar tabs={tabs} />;
