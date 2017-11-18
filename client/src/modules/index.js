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

import darksteam97d99i from './MuOnline/darksteam97d99i';

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
  muonline,
  ds9799_navigator: darksteam97d99i.navigator,
  ds9799_user: darksteam97d99i.user,
  ds9799_info: darksteam97d99i.info,
  ds9799_character: darksteam97d99i.character,
  ds9799_data: darksteam97d99i.data,
  ds9799_admin: darksteam97d99i.admin,
  ds9799_webQuest: darksteam97d99i.webQuest,
  ds9799_webShop: darksteam97d99i.webShop
});

