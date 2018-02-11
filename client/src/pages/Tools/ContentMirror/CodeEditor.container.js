import { connect } from 'react-redux';
import CodeEditor from './CodeEditor.component';

import { changeCode } from './ContentMirror.module';

export default connect(
  ({ contentMirror, cssCode, htmlCode }) => ({
    currentLanguage: contentMirror.currentLanguage,
    cssCode: contentMirror.cssCode,
    htmlCode: contentMirror.htmlCode,
    cssSource: contentMirror.cssSource,
    htmlSource: contentMirror.htmlSource,
    documentValue: contentMirror.documentValue,
    collectionValue: contentMirror.collectionValue
  }),
  dispatch => ({
    onChangeCode(code) {
      dispatch(changeCode(code));
    }
  })
)(CodeEditor);
