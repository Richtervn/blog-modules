import { tools } from 'services';
import { toast } from 'react-toastify';

export default (state = {
  content: '',
  selectedTable: 'default',
  selectedRecord: 'default',
  records: []
}, action) => {
  switch(action.type){
    default:
      return state;
  }
}

  // selectedTable,
  // onChangeTable,
  // records,
  // onChangeRecord,
  // selectedRecord,
  // codeValue,
  // onChangeCodeValue,
  // onSaveCode,
  // onRefreshCode