import { connect } from 'react-redux';
import AppDiary from './AppDiary.component';

import { addLog, getLogs } from './AppDiary.module';

const mapStateToProps = ({ appDiary }) => ({ logs: appDiary.logs });

const mapDispatchToProps = dispatch => ({
  onAddLog(formBody) {
    dispatch(addLog(formBody));
  },
  onGetLogs() {
    dispatch(getLogs());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDiary);
