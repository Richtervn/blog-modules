import './CodeEditor.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { firstLoad: false };
  }

  componentWillReceiveProps(nextProps) {
    //On Loaded Code
    if (!this.state.firstLoad) {
      const { currentLanguage } = this.props;
      if (currentLanguage === 'HTML') {
        if (this.props.htmlSource === '' && nextProps.htmlSource !== '') {
          this.editor.codeMirror.setValue(nextProps.htmlSource);
          this.setState({ firstLoad: true });
        }
      } else {
        if (this.props.cssSource === '' && nextProps.cssSource !== '') {
          this.editor.codeMirror.setValue(nextProps.cssSource);
          this.setState({ firstLoad: true });
        }
      }
    }

    //Change Language
    if (nextProps.currentLanguage !== this.props.currentLanguage) {
      const content = nextProps.currentLanguage === 'HTML' ? nextProps.htmlCode : nextProps.cssCode;
      this.editor.codeMirror.setValue(content);
    }
    //Clear Code
    if (
      (this.props.currentLanguage === nextProps.currentLanguage) === 'CSS' &&
      this.props.cssCode &&
      nextProps.cssCode === ''
    ) {
      this.editor.codeMirror.setValue('');
    }
    if (
      (this.props.currentLanguage === nextProps.currentLanguage) === 'HTML' &&
      this.props.htmlCode &&
      nextProps.htmlCode === ''
    ) {
      this.editor.codeMirror.setValue('');
    }
    //Reset Code
    if (
      (this.props.currentLanguage === nextProps.currentLanguage) === 'CSS' &&
      nextProps.cssCode === nextProps.cssSource
    ) {
      this.editor.codeMirror.setValue(nextProps.cssSource);
    }
    if (
      (this.props.currentLanguage === nextProps.currentLanguage) === 'HTML' &&
      nextProps.htmlCode === nextProps.htmlSource
    ) {
      this.editor.codeMirror.setValue(nextProps.htmlSource);
    }
  }

  render() {
    const { onChangeCode, currentLanguage, cssCode, htmlCode } = this.props;
    return (
      <div className="cm-code-editor">
        <CodeMirror
          options={{
            lineNumbers: true,
            readOnly: false,
            mode: currentLanguage === 'HTML' ? 'jsx' : 'css',
            theme: 'base16-dark',
            lineWrapping: true,
            indentUnit: 2,
            smartIndent: true,
            tabSize: 2,
            indentWithTabs: true
          }}
          value={currentLanguage === 'HTML' ? htmlCode : cssCode}
          ref={editor => (this.editor = editor)}
          onChange={code => onChangeCode(code)}
        />
      </div>
    );
  }
}

export default CodeEditor;
