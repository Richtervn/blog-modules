/* eslint-disable */
import './CodePlayground.css';
import CodeMirror from 'react-codemirror';

import moment from 'moment';
import React, { useState } from 'react';

import CodeEditor from './CodeEditor.component';
// import { LunarDate } from 'utils';

export default () => {
  return (
    <div id="code-playground-page">
      <div className="header-bar">.</div>
      <div className="playground">
        <CodeEditor />
      </div>
    </div>
  );
};
