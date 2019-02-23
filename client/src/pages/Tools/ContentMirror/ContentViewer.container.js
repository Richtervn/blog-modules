import { connect } from 'react-redux';
import ContentViewer from './ContentViewer.component';

export default connect(({ contentMirror }) => ({
  cssCode: contentMirror.cssCode,
  htmlCode: contentMirror.htmlCode,
  background: contentMirror.background,
  opacity: contentMirror.opacity,
  collection: contentMirror.collectionValue,
  isFullscreen: !contentMirror.isShareView
}))(ContentViewer);
