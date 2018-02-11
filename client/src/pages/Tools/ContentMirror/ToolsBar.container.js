import { connect } from 'react-redux';
import ToolsBar from './ToolsBar.component';

import {
  changeBackground,
  changeLanguage,
  changeOpacity,
  newCode,
  refreshCode,
  saveCode,
  toggleShareView
} from './ContentMirror.module';

const mapStateToProps = ({ contentMirror }) => ({
  currentLanguage: contentMirror.currentLanguage,
  isShareView: contentMirror.isShareView,
  opacity: contentMirror.opacity,
  background: contentMirror.background,
  htmlCode: contentMirror.htmlCode,
  cssCode: contentMirror.cssCode,
  collectionValue: contentMirror.collectionValue,
  documentValue: contentMirror.documentValue,
  tables: contentMirror.tables
});

const mapDispatchToProps = dispatch => ({
  onChangeLanguage(language) {
    dispatch(changeLanguage(language));
  },
  onToggleShareView() {
    dispatch(toggleShareView());
  },
  onNewCode() {
    dispatch(newCode());
  },
  onRefreshCode() {
    dispatch(refreshCode());
  },
  onChangeBackground(background) {
    dispatch(changeBackground(background));
  },
  onChangeOpacity(opacity) {
    dispatch(changeOpacity(opacity));
  },
  onSaveCode(formBody) {
    dispatch(saveCode(formBody));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolsBar);
