import { connect } from 'react-redux';
import WebShopPackageForm from './WebShopPackageForm.component';

import { addWebShopPackage, editWebShopPackage } from '../../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    pack: ds9799_admin.focusWebShopPackage,
    focusCategory: ds9799_admin.focusWebShopCategory
  }),
  dispatch => ({
    onAdd(formBody) {
      dispatch(addWebShopPackage(formBody));
    },
    onEdit(formBody) {
      dispatch(editWebShopPackage(formBody));
    }
  })
)(WebShopPackageForm);
