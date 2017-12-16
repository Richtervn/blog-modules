import React from 'react';
import _ from 'underscore';

import Home from 'components/Home';
import FlashGame from 'containers/FlashGame';

import YugiohPoc from 'containers/Games/YugiohPoc';
import Starcraft from 'containers/Games/Starcraft';
import MuOnline from 'containers/Games/MuOnline';
import DiabloII from 'containers/Games/DiabloII';

import MangasReading from 'containers/Collections/MangasReading';
import GamingHistory from 'containers/Collections/GamingHistory';
import Music from 'containers/Collections/Music';

import ContentMirror from 'containers/Tools/ContentMirror';

import FreyaPortable from 'containers/LineageII/FreyaPortable';

import Darksteam97d99i from 'containers/MuOnline/Darksteam97d99i';

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
    case 'Mu Online':
      Navigation = MuOnline;
      break;
    case 'Darksteam 97d99i':
      Navigation = Darksteam97d99i;
      break;
    case 'Freya Portable':
      Navigation = FreyaPortable;
      break;
    case 'Diablo II':
      Navigation = DiabloII;
      break;
    case 'Content Mirror':
      Navigation = ContentMirror
      break;
    default:
      break;
  }
  return <Navigation />;
};
