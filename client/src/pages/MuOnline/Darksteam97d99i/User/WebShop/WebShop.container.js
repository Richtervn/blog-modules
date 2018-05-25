import { connect } from 'react-redux';
import WebShop from './WebShop.component';

export default connect(({ ds9799_webShop }) => ({
  categories: ds9799_webShop.categories
}))(WebShop);
