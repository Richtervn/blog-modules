import { connect } from 'react-redux';
import BoardColumn from './BoardColumn.component';

import { setColumnOnAdd } from '../Projects.module';

const mapDispatchToProps = dispatch => ({
  onSetColumnOnAdd(column) {
    dispatch(setColumnOnAdd(column));
  }
});

export default connect(null, mapDispatchToProps)(BoardColumn);
