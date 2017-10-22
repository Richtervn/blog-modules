import VipSystem from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/VipSystem';
import { connect } from 'react-redux';

import {
  getVipSystems,
  addVipSystem,
  setFocusVipSystem,
  deleteVipSystem,
  editVipSystem
} from 'modules/MuOnline/darksteam97d99i/data';

export default connect(
  ({ ds9799_data, forms }) => ({
    VipSystems: ds9799_data.VipSystems,
    addFormBody: forms.AddDS9799VipSystem,
    editFormBody: forms.EditDS9799VipSystem,
    focusVipSystem: ds9799_data.focusVipSystem
  }),
  dispatch => ({
    onGetVipSystems() {
      dispatch(getVipSystems());
    },
    onAddVipSystem(id, formBody) {
      dispatch(addVipSystem(formBody));
    },
    onSetFocusVipSystem(system) {
      dispatch(setFocusVipSystem(system));
    },
    onDeleteVipSystem(id){
      dispatch(deleteVipSystem(id));
    },
    onEditVipSystem(id, formBody){
      dispatch(editVipSystem(formBody));
    }
  })
)(VipSystem);
