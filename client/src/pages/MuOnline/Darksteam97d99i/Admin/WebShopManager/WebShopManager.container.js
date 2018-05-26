import { connect } from 'react-redux';
import WebShopManager from './WebShopManager.component';

import { getWebShopPackages, setFocusWebShopPackage, setFocusWebShopCategory } from '../Admin.module';

export default connect(
  ({ ds9799_admin }) => ({
    categories: ds9799_admin.webShopCategories,
    packages: ds9799_admin.webShopPackages,
    focusCategory: ds9799_admin.focusWebShopCategory
  }),
  dispatch => ({
    onGetPackages(id) {
      dispatch(getWebShopPackages(id));
    },
    onSetFocusPackage(pack) {
      dispatch(setFocusWebShopPackage(pack));
    },
    onSetFocusCategory(categoryId) {
      dispatch(setFocusWebShopCategory(categoryId));
    }
  })
)(WebShopManager);
