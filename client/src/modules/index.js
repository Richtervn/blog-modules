import { combineReducers } from 'redux';

import page from 'modules/page';
import forms from 'modules/forms';
import flashGame from 'modules/flashGame';
import profile from 'modules/profile';
import mangasReading from 'modules/Collections/mangasReading';
import gamingHistory from 'modules/Collections/gamingHistory';
import music from 'modules/Collections/music';
import starcraft from 'modules/Games/starcraft';
import yugiohPoc from 'modules/Games/yugiohPoc';
import muonline from 'modules/Games/muonline';

export default combineReducers({
  page,
  forms,
  flashGame,
  profile,
  mangasReading,
  music,
  gamingHistory,
  yugiohPoc,
  starcraft,
  muonline
});

