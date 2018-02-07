import './CodeEditor.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

class CodeEditor extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentLanguage !== this.props.currentLanguage) {
      const content = nextProps.currentLanguage === 'HTML' ? nextProps.htmlCode : nextProps.cssCode;
      this.editor.codeMirror.setValue(content);
    }
    if (this.props.currentLanguage === 'CSS' && this.props.cssCode && nextProps.cssCode === '') {
      this.editor.codeMirror.setValue('');
    }
    if (this.props.currentLanguage === 'HTML' && this.props.htmlCode && nextProps.htmlCode === '') {
      console.log(nextProps);
      console.log(this.props);
      console.log('here2');
      this.editor.codeMirror.setValue('');
    }
    if (this.props.currentLanguage === 'CSS' && nextProps.cssCode === nextProps.cssSource) {
      this.editor.codeMirror.setValue(this.props.cssSource);
    }
    if (this.props.currentLanguage === 'HTML' && nextProps.htmlCode === nextProps.htmlSource) {
      console.log(nextProps);
      console.log(this.props);
      console.log('here4');
      this.editor.codeMirror.setValue(this.props.htmlSource);
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
