import './CodeEditor.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import classNames from 'classnames';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        cssCode: '',
        jsxCode: this.props.jsxSource || ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(code) {
    const { language } = this.props;
    if (language === 'CSS') {
      this.setState({ value: { ...this.state.value, cssCode: code } });
    }
    if (language === 'JSX') {
      this.setState({ value: { ...this.state.value, jsxCode: code } });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.jsxSource !== this.props.jsxSource) {
      if (this.editor) {
        this.editor.codeMirror.setValue(nextProps.jsxSource);
      }
      return this.setState({
        value: {
          cssCode: '',
          jsxCode: nextProps.jsxSource
        }
      });
    }
    if (nextProps.language !== this.props.language) {
      if (nextProps.language === 'CSS') {
        this.editor.codeMirror.setValue(this.state.value.cssCode);
      }
      if (nextProps.language === 'JSX') {
        this.editor.codeMirror.setValue(this.state.value.jsxCode);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isSharing === false && this.props.isSharing === true) {
      if (this.props.language === 'CSS') {
        this.editor.codeMirror.setValue(this.state.value.cssCode);
      }
      if (this.props.language === 'JSX') {
        this.editor.codeMirror.setValue(this.state.value.jsxCode);
      }
    }
  }

  render() {
    const { language, onChangeLanguage, onToggleShare, onParserCode, isSharing } = this.props;

    if (!isSharing) {
      return (
        <div id="cv-code-editor-close">
          <div className="header">
            <button className="btn" onClick={() => onToggleShare()}>
              <i className="fa fa-sort fa-rotate-90" />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="col">
        <div className="row">
          <div id="cv-code-editor">
            <div className="header-bar">
              <div className="button-wrappers">
                <button
                  className={classNames('btn', { active: language === 'JSX' })}
                  onClick={() => onChangeLanguage('JSX')}>
                  <img className="icon" src="/images/icons/JSX.png" alt="JSX" />
                </button>
                <button
                  className={classNames('btn', { active: language === 'CSS' })}
                  onClick={() => onChangeLanguage('CSS')}>
                  <img className="icon" src="/images/icons/CSS.png" alt="CSS" />
                </button>
              </div>
              <div className="button-wrappers">
                <button className="btn" onClick={() => onParserCode(this.state.value)}>
                  <i className="fa fa-share" />
                </button>
                <button className={classNames('btn', { active: isSharing })} onClick={() => onToggleShare()}>
                  <i className="fa fa-sort fa-rotate-90" />
                </button>
              </div>
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
                value={language === 'JSX' ? this.state.jsxCode : this.state.cssCode}
                ref={editor => (this.editor = editor)}
                onChange={code => this.handleChange(code)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeEditor;
