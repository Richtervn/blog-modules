import _ from 'underscore';
import { connect } from 'react-redux';
import MangaDetailView from './MangaDetailView.component';

import {
  editManga,
  searchManga,
  changeSearchOption,
  changeSearchValue,
  changeActiveTool,
  search,
  activeTool
} from './MangasReading.module';

export default connect(
  ({ mangasReading }) => ({
    manga: _.findWhere(mangasReading.mangas, { _id: mangasReading.focusManga }),
    search: mangasReading.search,
    activeTool: mangasReading.activeTool
  }),
  dispatch => ({
    onEditManga(formBody) {
      dispatch(editManga(formBody));
    },
    onSearchManga(query) {
      dispatch(searchManga(query));
    },
    onChangeSearchOption(option) {
      dispatch(changeSearchOption(option));
    },
    onChangeSearchValue(value) {
      dispatch(changeSearchValue(value));
    },
    onChangeActiveTool(tool) {
      dispatch(changeActiveTool(tool));
    }
  })
)(MangaDetailView);
