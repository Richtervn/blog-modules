import MangasReading from "components/MangasReading";
import { connect } from "react-redux";

import {
  changeChannel,
  changeActiveTool,
  submitAddManga,
  getAllMangas,
  setFocusManga,
  quickUpdate,
  submitEditManga,
  submitDeleteManga,
  searchManga,
  sortManga
} from "modules/mangasReading";

const mapStateToProps = ({ mangasReading }) => ({
  viewChannel: mangasReading.viewControl.viewChannel,
  activeTool: mangasReading.viewControl.activeTool,
  mangas: mangasReading.mangas,
  focusManga: mangasReading.focusManga
});

const mapDispatchTopProps = dispatch => ({
  onChangeChannel(channel) {
    dispatch(changeChannel(channel));
  },
  onChangeActiveTool(tool) {
    dispatch(changeActiveTool(tool));
  },
  onAddSubmit(form) {
    dispatch(submitAddManga(form));
  },
  onGetAllMangas() {
    dispatch(getAllMangas());
  },
  onSelectManga(manga){
    dispatch(setFocusManga(manga));
  },
  onQuickUpdate(url){
    dispatch(quickUpdate(url));
  },
  onEditSubmit(form){
    dispatch(submitEditManga(form));
  },
  onDeleteSubmit(id){
    dispatch(submitDeleteManga(id));
  },
  onSearchInput(query){
    dispatch(searchManga(query));
  },
  onSortSelect(query){
    dispatch(sortManga(query));
  }
});

export default connect(mapStateToProps, mapDispatchTopProps)(MangasReading);
