import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import ContentSelector from './ContentSelector';

const options = {
  lineNumbers: true,
  readOnly: false,
  mode: 'jsx',
  theme: 'base16-dark',
  lineWrapping: true
};

class ContentMirror extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
    this.handleChangeRecord = this.handleChangeRecord.bind(this);
    this.handleResetCode = this.handleResetCode.bind(this);
    this.handleClearCode = this.handleClearCode.bind(this);
    this.handleSaveCode = this.handleSaveCode.bind(this);
  }

  handleChangeCode(code) {
    this.setState({ content: code });
  }

  handleChangeTable(e) {
    const { onChangeTable, onGetRecords } = this.props;
    onChangeTable(e.target.value);
    onGetRecords(e.target.value);
  }

  handleChangeRecord(e) {
    const { onChangeRecord, onGetRecordContent, selectedTable } = this.props;
    onChangeRecord(e.target.value);
    onGetRecordContent(selectedTable, e.target.value);
  }

  handleResetCode() {
    const { content } = this.props;
    this.setState({ content: content });
    this.editor.codeMirror.setValue(this.props.content);
  }

  handleClearCode() {
    this.setState({ content: '' });
    this.editor.codeMirror.setValue('');
  }

  handleSaveCode() {
    const { onSaveCode, selectedTable, selectedRecord } = this.props;
    onSaveCode({ content: this.state.content, id: selectedRecord, tableName: selectedTable });
  }

  componentWillReceiveProps(nextProps) {
    this.editor.codeMirror.setValue(nextProps.content);
    this.setState({ content: nextProps.content });
  }

  render() {
    const { selectedTable, selectedRecord, records, onSaveCode } = this.props;

    return (
      <div className="t-ct-main-screen">
        <ContentSelector
          selectedTable={selectedTable}
          selectedRecord={selectedRecord}
          records={records}
          onChangeTable={e => this.handleChangeTable(e)}
          onChangeRecord={e => this.handleChangeRecord(e)}
        />
        <div className="row no-row-margin">
          <div className="t-ct-editor">
            <CodeMirror
              options={options}
              value={this.state.content}
              onChange={this.handleChangeCode}
              ref={editor => (this.editor = editor)}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} className="t-ct-mirror" />
        </div>
        <div className="t-ct-feature">
          <div className="btn btn-danger t-ct-feature-btn" onClick={() => this.handleSaveCode()}>
            SAVE CODE
          </div>
          <div
            className="btn btn-primary t-ct-feature-btn"
            style={{ marginLeft: '50px' }}
            onClick={() => this.handleResetCode()}>
            RESET CODE
          </div>
          <div
            className="btn btn-warning t-ct-feature-btn"
            style={{ marginLeft: '50px' }}
            onClick={() => this.handleClearCode()}>
            CLEAR CODE
          </div>
        </div>
      </div>
    );
  }
}

export default ContentMirror;
