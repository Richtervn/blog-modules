import MangasReading from './MangasReading.component';
import { connect } from 'react-redux';

import {
  getMangas,
  setFocusManga,
  addManga,
  editManga,
  deleteManga,
  quickUpdate,
  searchManga,
  sortManga,
  setActiveView
} from './MangasReading.module';

const mapStateToProps = ({ mangasReading }) => ({
  mangas: mangasReading.mangas,
  focusManga: mangasReading.focusManga,
  activeView: mangasReading.activeView
});

const mapDispatchToProps = dispatch => ({
  onGetMangas() {
    dispatch(getMangas());
  },
  onSetActiveView(name){
    dispatch(setActiveView(name));
  },
  onSetFocusManga(id) {
    dispatch(setFocusManga(id));
  },
  onAddManga(body) {
    dispatch(addManga(body));
  },
  onEditManga(body) {
    dispatch(editManga(body));
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MangasReading);
