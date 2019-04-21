import './CodePlayground.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';

import React, { useState, useRef } from 'react';

import CodeMirror from 'react-codemirror';
import Terminal from 'terminal-in-react';
import classnames from 'classnames';
import moment from 'moment';

import ToolsBar from './ToolsBar.component';
import Preview from './Preview.component';

window.moment = moment;

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
            /* eslint-disable-next-line */
            window.eval(values.JS);
          } catch (e) {
            console.log(e.message);
          }
        }}
        isCodeFullScreen={isCodeFullScreen}
        isPreviewFullscreen={isPreviewFullscreen}
        onToggleConsole={() => setIsShowConsole(!isShowConsole)}
        onToggleCode={() => {
          setIsCodeFullScreen(!isCodeFullScreen);
          setIsPreviewFullscreen(false);
        }}
        onTogglePreview={() => {
          setIsPreviewFullscreen(!isPreviewFullscreen);
          setIsCodeFullScreen(false);
        }}
      />
      <div className="playground">
        {!isPreviewFullscreen && (
          <div className={classnames('editor', { fullscreen: isCodeFullScreen })}>
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
        )}
        {!isCodeFullScreen && (
          <div className={classnames('previewer', { fullscreen: isPreviewFullscreen })}>
            <Preview
              isShowConsole={isShowConsole}
              css={previewValues.CSS}
              html={previewValues.HTML}
              isFullscreen={isPreviewFullscreen}
            />
            {isShowConsole && !isPreviewFullscreen && (
              <Terminal
                watchConsoleLogging
                color="#01ca01"
                backgroundColor="black"
                barColor="black"
                style={{ fontWeight: '500', fontSize: '14px' }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
