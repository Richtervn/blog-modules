import React from 'react';
import _ from 'underscore';

import FlashGame from 'containers/FlashGame';
import MangasReading from 'containers/MangasReading';

import Home from 'components/Home';

export default ({ activeGroup, activeItem, menuTree }) => {
  let Navigation = Home;
  if(menuTree && _.contains(menuTree['Flash Games'], activeItem)) Navigation = FlashGame;
  switch(activeItem){
    case 'Mangas Reading':
      Navigation = MangasReading;
      break;
    default:
      break;
  }
  return (<Navigation/>);
};
