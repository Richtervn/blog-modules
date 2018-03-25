import './CodeEditor.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import classNames from 'classnames';

class CodeEditor extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.jsxSource !== this.props.jsxSource) {
      this.editor.codeMirror.setValue(nextProps.jsxSource);
    }
  }

  render() {
    const { language, jsxCode, cssCode, onChangeCode, onChangeLanguage } = this.props;

    return (
      <div id="cv-code-editor">
        <div className="header-bar">
          <button className={classNames('btn', { active: language === 'JSX' })} onClick={() => onChangeLanguage('JSX')}>
            <img className="icon" src="/images/icons/JSX.png" alt="JSX" />
          </button>
          <button className={classNames('btn', { active: language === 'CSS' })} onClick={() => onChangeLanguage('CSS')}>
            <img className="icon" src="/images/icons/CSS.png" alt="CSS" />
          </button>
        </div>
        <div className="editor">
          <CodeMirror
            options={{
              lineNumbers: true,
              readOnly: false,
              mode: language === 'JSX' ? 'jsx' : 'css',
              theme: 'base16-dark',
              lineWrapping: true,
              indentUnit: 2,
              smartIndent: true,
              tabSize: 2,
              indentWithTabs: true
            }}
            value={language === 'JSX' ? jsxCode : cssCode}
            ref={editor => (this.editor = editor)}
            onChange={code => onChangeCode(code)}
          />
        </div>
      </div>
    );
  }
}

export default CodeEditor;
