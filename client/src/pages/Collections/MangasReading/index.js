import reducer, {
  quickUpdate,
  GET_MANGAS,
  QUICK_UPDATE,
  getMangas,
  crawlManga,
  manualSaveNewChapter,
  startWorkerListener
} from './MangasReading.module';
import { UnsavedMangas } from './Modals';
import MangasReading from './MangasReading.container';
import ControlBar from './ControlBar.component';
import MangasList from './MangasList.component';

export {
  reducer,
  MangasReading,
  ControlBar,
  MangasList,
  GET_MANGAS,
  QUICK_UPDATE,
  quickUpdate,
  getMangas,
  crawlManga,
  manualSaveNewChapter,
  startWorkerListener,
  UnsavedMangas
};
