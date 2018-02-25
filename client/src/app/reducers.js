import { combineReducers } from 'redux';

import { reducer as appControl } from 'pages/appControl';
import { reducer as appDiary } from 'pages/Home/AppDiary';
import { reducer as contentMirror } from 'pages/Tools/ContentMirror';
import { reducer as flashGames } from 'pages/FlashGames';
import { reducer as gamingHistory } from 'pages/Collections/GamingHistory';
import { reducer as mangasReading } from 'pages/Collections/MangasReading';
import { reducer as music } from 'pages/Collections/Music';
import { reducer as projects } from 'pages/Home/Projects';
import { reducer as starcraft } from 'pages/Games/Starcraft';
import { reducer as diabloII } from 'pages/Games/DiabloII';
import { reducer as endedManga } from 'pages/Archived/EndedManga';
import { ds9799_appControl, ds9799_user } from 'pages/MuOnline/Darksteam97d99i';

export default combineReducers({
  appControl,
  appDiary,
  contentMirror,
  diabloII,
  ds9799_appControl,
  ds9799_user,
  endedManga,
  flashGames,
  gamingHistory,
  mangasReading,
  music,
  projects,
  starcraft
});
