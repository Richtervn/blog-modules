import MuOnline from 'components/Games/MuOnline';
import { connect } from 'react-redux';

import {
  changeActiveView,
  getToolDetail,
  getVersionDetail,
  submitAddMuonlineTool,
  submitAddMuonlineVersion,
  submitEditMuonlineTool,
  submitEditMuonlineVersion,
  getTools,
  getVersions,
  deleteTool,
  deleteVersion
} from 'modules/Games/muonline';

export default connect(
  ({ muonline }) => ({
    tools: muonline.tools,
    versions: muonline.versions,
    focusTool: muonline.focusTool,
    focusVersion: muonline.focusVersion,
    activeView: muonline.viewControl.activeView
  }),
  dispatch => ({
    onSwitchView(view) {
      dispatch(changeActiveView(view));
    },
    onGetTools() {
      dispatch(getTools());
    },
    onGetVersions() {
      dispatch(getVersions());
    },
    onGetToolDetail(id) {
      dispatch(getToolDetail(id));
    },
    onGetVersionDetail(id) {
      dispatch(getVersionDetail(id));
    },
    onAddToolSubmit(id, formBody) {
      dispatch(submitAddMuonlineTool(formBody));
    },
    onAddVersionSubmit(id, formBody) {
      dispatch(submitAddMuonlineVersion(formBody));
    },
    onEditToolSubmit(id, formBody) {
      dispatch(submitEditMuonlineTool(formBody));
    },
    onEditVersionSubmit(id, formBody) {
      dispatch(submitEditMuonlineVersion(formBody));
    },
    onDeleteTool(id) {
      dispatch(deleteTool(id));
    },
    onDeleteVersion(id) {
      dispatch(deleteVersion(id));
    }
  })
)(MuOnline);
