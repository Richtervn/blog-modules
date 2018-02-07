import { connect } from 'react-redux';
import ContentMirror from './ContentMirror.component';

export default connect(({ contentMirror }) => ({
  isShareView: contentMirror.isShareView
}))(ContentMirror);
