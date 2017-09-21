import React from 'react';
import _ from 'underscore';

import FlashGame from 'containers/FlashGame';
import YugiohPoc from 'containers/Games/YugiohPoc';
import Starcraft from 'containers/Games/Starcraft';
import MangasReading from 'containers/Collections/MangasReading';
import Music from 'containers/Collections/Music';
import GamingHistory from 'containers/Collections/GamingHistory';

import Home from 'components/Home';

export default ({ activeGroup, activeItem, menuTree }) => {
  let Navigation = Home;
  if (menuTree && _.contains(menuTree['Flash Games'], activeItem)) Navigation = FlashGame;
  switch (activeItem) {
    case 'Mangas Reading':
      Navigation = MangasReading;
      break;
    case 'YugiOh! PoC':
      Navigation = YugiohPoc;
      break;
    case 'Starcraft Broodwar':
      Navigation = Starcraft;
      break;
    case 'Music':
      Navigation = Music;
      break;
    case 'Gaming History':
      Navigation = GamingHistory;
      break;
    default:
      break;
  }
  return <Navigation />;
};
