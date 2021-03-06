import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu.component';

import { quickUpdate, crawlManga, manualSaveNewChapter } from 'pages/Collections/MangasReading';
import { hideHeaderMenu } from 'pages/appControl';
import { addLog } from 'pages/Home/AppDiary';

const mapStateToProps = ({ appControl }) => ({
  isShow: appControl.isShowHeaderMenu
});

const mapDispatchToProps = dispatch => ({
  onQuickUpdateManga(url) {
    dispatch(quickUpdate(url));
  },
  onSelfHide() {
    dispatch(hideHeaderMenu());
  },
  onAddAppDiary(text) {
    dispatch(addLog(text));
  },
  onSaveNewMangaChapter(url) {
    dispatch(manualSaveNewChapter(url));
  },
  onCrawlManga(url) {
    dispatch(crawlManga(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
