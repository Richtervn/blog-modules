import { connect } from 'react-redux';
import MangasList from './MangasList.component';

import {
  setFocusManga,
  changeSearchOption,
  changeSearchValue,
  searchManga,
  editManga,
  changeActiveTool
} from './MangasReading.module';

export default connect(
  ({ mangasReading }) => ({
    mangas: mangasReading.mangas,
    focusManga: mangasReading.focusManga,
    search: mangasReading.search,
    activeTool: mangasReading.activeTool,
    noSearchResult: mangasReading.noSearchResult
  }),
  dispatch => ({
    onSetFocusManga(id) {
      dispatch(setFocusManga(id));
    },
    onChangeSearchOption(option) {
      dispatch(changeSearchOption(option));
    },
    onChangeSearchValue(value) {
      dispatch(changeSearchValue(value));
    },
    onSearchManga(query) {
      dispatch(searchManga(query));
    },
    onEditManga(formBody) {
      dispatch(editManga(formBody));
    },
    onChangeActiveTool(tool) {
      dispatch(changeActiveTool(tool));
    }
  })
)(MangasList);
