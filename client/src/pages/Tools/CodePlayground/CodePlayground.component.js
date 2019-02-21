/* eslint-disable */
import './CodePlayground.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';

import CodeMirror from 'react-codemirror';

import moment from 'moment';
import React, { useState, useRef } from 'react';

import Terminal from 'terminal-in-react';
import ToolsBar from './ToolsBar.component';
import Preview from './Preview.component';

const modes = {
  HTML: 'jsx',
  JS: 'javascript',
  CSS: 'css'
};

export default () => {
  const [activeFile, setActiveFile] = useState('HTML');
  const [values, setValues] = useState({
    HTML: '',
    CSS: '',
    JS: ''
  });
  const [isShowConsole, setIsShowConsole] = useState(true);
  const [isCodeFullScreen, setIsCodeFullScreen] = useState(false);
  const [isPreviewFullscreen, setIsPreviewFullscreen] = useState(false);
  const [previewValues, setPreviewValues] = useState({
    HTML: '',
    CSS: ''
  });

  const editor = useRef(null);

  return (
    <div id="code-playground-page">
      <ToolsBar
        activeFile={activeFile}
        onSwitchFile={file => {
          setActiveFile(file);
          editor.current.codeMirror.setValue(values[file]);
        }}
        isShowConsole={isShowConsole}
        onPlayClick={() => {
          setPreviewValues({
            HTML: values.HTML,
            CSS: values.CSS
          });
          try {
            window.eval(values.JS);
          } catch (e) {
            console.log(e.message);
          }
        }}
        onToggleConsole={() => setIsShowConsole(!isShowConsole)}
        onToggleCode={() => setIsCodeFullScreen(!isCodeFullScreen)}
        onTogglePreview={() => setIsPreviewFullscreen(!isPreviewFullscreen)}
      />
      <div className="playground">
        <div className="editor">
          <CodeMirror
            options={{
              lineNumbers: true,
              readOnly: false,
              mode: modes[activeFile],
              theme: 'base16-dark',
              lineWrapping: true,
              indentUnit: 2,
              smartIndent: true,
              tabSize: 2,
              indentWithTabs: true
            }}
            value={values[activeFile]}
            ref={editor}
            onChange={code => setValues({ ...values, [activeFile]: code })}
          />
        </div>
        <div className="previewer">
          <Preview isShowConsole={isShowConsole} css={previewValues.CSS} html={previewValues.HTML} />
          {isShowConsole && (
            <Terminal
              watchConsoleLogging
              color="#01ca01"
              backgroundColor="black"
              barColor="black"
              style={{ fontWeight: '500', fontSize: '14px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
