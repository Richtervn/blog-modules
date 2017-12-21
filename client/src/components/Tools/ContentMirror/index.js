import 'codemirror/theme/base16-dark.css';
import 'codemirror/mode/jsx/jsx';

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import ContentSelector from './ContentSelector';

const options = {
  lineNumbers: true,
  readOnly: false,
  mode: 'jsx',
  theme: 'base16-dark'
};

class ContentMirror extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleChangeCode = this.handleChangeCode.bind(this);
  }

  handleChangeCode(code){
    this.setState({content: code});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ content: nextProps.content });
  }

  render() {
    const { selectedTable, selectedRecord, records, onChangeTable, onSaveCode, onChangeRecord } = this.props;
    return (
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
            <CodeMirror options={options} value={this.state.content} onChange={this.handleChangeCode}/>
          </div>
          <div className="col no-col-margin">
            <div dangerousSetInnerHtml={{__html: this.state.content}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentMirror;
