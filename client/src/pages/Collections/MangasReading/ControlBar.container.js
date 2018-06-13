import _ from 'underscore';
import { connect } from 'react-redux';
import ControlBar from './ControlBar.component';

import {
  changeActiveTool,
  setActiveView,
  addManga,
  editManga,
  deleteManga,
  quickUpdate,
  searchManga,
  sortManga,
  changeSearchOption,
  changeSearchValue,
  crawlManga
} from './MangasReading.module';

export default connect(
  ({ mangasReading }) => ({
    activeTool: mangasReading.activeTool,
    activeView: mangasReading.activeView,
    manga: _.findWhere(mangasReading.mangas, { _id: mangasReading.focusManga }),
    search: mangasReading.search
  }),
  dispatch => ({
    onChangeActiveTool(tool) {
      dispatch(changeActiveTool(tool));
    },
    onSetActiveView(name) {
      dispatch(setActiveView(name));
    },
    onAddManga(formBody) {
      dispatch(addManga(formBody));
    },
    onEditManga(formBody) {
      dispatch(editManga(formBody));
    },
    onDeleteManga(id) {
      dispatch(deleteManga(id));
    },
    onQuickUpdate(url) {
      dispatch(quickUpdate(url));
    },
    onSearchManga(query) {
      dispatch(searchManga(query));
    },
    onSortManga(query) {
      dispatch(sortManga(query));
    },
    onChangeSearchOption(option) {
      dispatch(changeSearchOption(option));
    },
    onChangeSearchValue(value) {
      dispatch(changeSearchValue(value));
    },
    onCrawl(formBody) {
      dispatch(crawlManga(formBody));
    }
  })
)(ControlBar);
