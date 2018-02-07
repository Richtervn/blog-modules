import { connect } from 'react-redux';
import ToolsBar from './ToolsBar.component';

import {
  changeLanguage,
  toggleShareView,
  newCode,
  refreshCode,
  changeBackground,
  changeOpacity
} from '../ContentMirror.module';

const mapStateToProps = ({ contentMirror }) => ({
  currentLanguage: contentMirror.currentLanguage,
  isShareView: contentMirror.isShareView,
  opacity: contentMirror.opacity,
  background: contentMirror.background
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolsBar);
