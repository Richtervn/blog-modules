import { combineReducers } from 'redux';

import page from 'modules/page';
import forms from 'modules/forms';
import flashGame from 'modules/flashGame';
import profile from 'modules/profile';
import mangasReading from 'modules/mangasReading';
import yugiohPoc from 'modules/yugiohPoc';
import music from 'modules/music';

export default combineReducers({
  page,
  forms,
  flashGame,
  profile,
  mangasReading,
  yugiohPoc,
  music
});

