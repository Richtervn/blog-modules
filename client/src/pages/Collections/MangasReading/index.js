import reducer, { quickUpdate, GET_MANGAS, getMangas, crawlManga, manualSaveNewChapter } from './MangasReading.module';
import MangasReading from './MangasReading.container';
import ControlBar from './ControlBar.component';
import MangasList from './MangasList.component';

export {
  reducer,
  MangasReading,
  ControlBar,
  MangasList,
  GET_MANGAS,
  quickUpdate,
  getMangas,
  crawlManga,
  manualSaveNewChapter
};
