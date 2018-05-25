import { connect } from 'react-redux';
import VipPackagesManager from './VipPackagesManager.component';

import { getVipPackages, addVipPackage, editVipPackage, deleteVipPackage } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    vipPackages: ds9799_admin.vipPackages
  }),
  dispatch => ({
    onGetPackages() {
      dispatch(getVipPackages());
    },
    onAdd(formBody) {
      dispatch(addVipPackage(formBody));
    },
    onEdit(formBody) {
      dispatch(editVipPackage(formBody));
    },
    onDelete(id) {
      dispatch(deleteVipPackage(id));
    }
  })
)(VipPackagesManager);
