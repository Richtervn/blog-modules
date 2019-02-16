import { combineReducers } from 'redux';

import { reducer as appControl } from 'pages/appControl';
import { reducer as flashGames } from 'pages/FlashGames';

import { reducer as gamingHistory } from 'pages/Collections/GamingHistory';
import { reducer as mangasReading } from 'pages/Collections/MangasReading';
import { reducer as music } from 'pages/Collections/Music';
import { reducer as gallery } from 'pages/Collections/Gallery';

import { reducer as appDiary } from 'pages/Home/AppDiary';
import { reducer as projects } from 'pages/Home/Projects';
import { reducer as schelude } from 'pages/Home/Schelude';

import { reducer as starcraft } from 'pages/Games/Starcraft';
import { reducer as diabloII } from 'pages/Games/DiabloII';
import { reducer as yugiohPoc } from 'pages/Games/YugiohPoc';
import { reducer as muOnline } from 'pages/Games/MuOnline';

import { reducer as contentMirror } from 'pages/Tools/ContentMirror';

import { reducer as endedManga } from 'pages/Archived/EndedManga';
import { reducer as accounts } from 'pages/Archived/Accounts';

import { reducer as mangaNews } from 'pages/Subscribe/MangaNews';
import { reducer as rss } from 'pages/Subscribe/Rss';
import { reducer as weather } from 'pages/Subscribe/Weather';

import { reducer as dayEvents } from 'pages/Setting/DayEvents';

import {
  ds9799_admin,
  ds9799_appControl,
  ds9799_banking,
  ds9799_blacksmith,
  ds9799_character,
  ds9799_credit,
  ds9799_user,
  ds9799_introduction,
  ds9799_luxuryShop,
  ds9799_server,
  ds9799_upgradeItems,
  ds9799_webQuest,
  ds9799_webShop
} from 'pages/MuOnline/Darksteam97d99i';

export default combineReducers({
  accounts,
  appControl,
  appDiary,
  contentMirror,
  dayEvents,
  diabloII,
  ds9799_admin,
  ds9799_appControl,
  ds9799_banking,
  ds9799_blacksmith,
  ds9799_character,
  ds9799_credit,
  ds9799_user,
  ds9799_introduction,
  ds9799_luxuryShop,
  ds9799_server,
  ds9799_upgradeItems,
  ds9799_webQuest,
  ds9799_webShop,
  endedManga,
  flashGames,
  gallery,
  gamingHistory,
  mangasReading,
  mangaNews,
  muOnline,
  music,
  projects,
  rss,
  schelude,
  starcraft,
  weather,
  yugiohPoc
});
