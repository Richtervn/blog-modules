import ContentMirror from 'components/Tools/ContentMirror';
import { connect } from 'react-redux';

import { saveCode, getRecords, getRecordContent, changeTable, changeRecord } from 'modules/Tools/contentMirror';

export default connect(
  ({ contentMirror }) => ({
    content: contentMirror.content,
    selectedTable: contentMirror.selectedTable,
    selectedRecord: contentMirror.selectedRecord,
    records: contentMirror.records
  }),
  dispatch => ({
    onSaveCode(body) {
      dispatch(saveCode(body));
    },
    onGetRecords(tableName) {
      dispatch(getRecords(tableName));
    },
    onGetRecordContent(tableName, id) {
      dispatch(getRecordContent(tableName, id));
    },
    onChangeTable(table) {
      dispatch(changeTable(table));
    },
    onChangeRecord(record) {
      dispatch(changeRecord(record));
    }
  })
)(ContentMirror);
