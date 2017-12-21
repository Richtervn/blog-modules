import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';

import React from 'react';
import CodeMirror from 'react-codemirror';
import ContentSelector from './ContentSelector';

const options = {
  lineNumbers: true,
  readOnly: false,
  mode: 'jsx',
  theme: 'base16-dark'
};

export default ({
  selectedTable,
  onChangeTable,
  records,
  onChangeRecord,
  selectedRecord,
  codeValue,
  onChangeCodeValue,
  onSaveCode,
  onRefreshCode
}) => (
  <div className="home-main-screen">
    <ContentSelector
      selectedTable={selectedTable}
      selectedRecord={selectedRecord}
      records={records}
      onChangeTable={onChangeTable}
      onChangeRecord={onChangeRecord}
    />
    <div className="row no-row-margin">
      <div className="col no-col-margin">
        <CodeMirror options={options} value={codeValue} />
      </div>
      <div className="col no-col-margin">.</div>
    </div>
  </div>
);
