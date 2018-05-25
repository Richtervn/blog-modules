import { connect } from 'react-redux';
import WebShop from './WebShop.component';

import { getPackages, setFocusCategory } from './WebShop.module';

export default connect(
  ({ ds9799_webShop }) => ({
    categories: ds9799_webShop.categories,
    focusCategory: ds9799_webShop.focusCategory,
    packages: ds9799_webShop.packages
  }),
  dispatch => ({
    onGetPackages(id) {
      dispatch(getPackages(id));
    },
    onSelectCategory(id) {
      dispatch(setFocusCategory(id));
      dispatch(getPackages(id));
    }
  })
)(WebShop);
