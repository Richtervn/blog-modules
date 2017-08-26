import React from 'react';
import _ from 'underscore';

import FlashGame from 'containers/FlashGame';

export default ({ activeGroup, activeItem, menuTree }) => {
  let Navigation = () => null;
  if(menuTree && _.contains(menuTree['Flash Games'], activeItem)) Navigation = FlashGame
  return (<Navigation/>);
};
