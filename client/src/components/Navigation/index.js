import React from 'react';
import _ from 'underscore';

import FlashGame from 'containers/FlashGame';
import MangasReading from 'containers/MangasReading';
import YugiohPoc from 'containers/YugiohPoc';
import Music from 'containers/Music';

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
    case 'Music':
      Navigation = Music;
      break;
    default:
      break;
  }
  return <Navigation />;
};
