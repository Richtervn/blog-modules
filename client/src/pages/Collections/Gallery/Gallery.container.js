import { connect } from 'react-redux';
import Gallery from './Gallery.component';

import { getGallery } from './Gallery.module';

export default connect(
  ({ gallery }) => ({
    gallery: gallery.gallery
  }),
  dispatch => ({
    onGetGallery() {
      dispatch(getGallery());
    }
  })
)(Gallery);
