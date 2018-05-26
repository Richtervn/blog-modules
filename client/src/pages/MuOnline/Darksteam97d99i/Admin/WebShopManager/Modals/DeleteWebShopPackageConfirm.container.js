import { connect } from 'react-redux';
import DeleteWebShopPackageConfirm from './DeleteWebShopPackageConfirm.component';

import { deleteWebShopPackage } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    pack: ds9799_admin.focusWebShopPackage
  }),
  dispatch => ({
    onDeletePackage(id, categoryId) {
      dispatch(deleteWebShopPackage(id, categoryId));
    }
  })
)(DeleteWebShopPackageConfirm);
