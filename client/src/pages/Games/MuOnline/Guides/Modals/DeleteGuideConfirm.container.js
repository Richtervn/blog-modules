import _ from 'underscore';
import { connect } from 'react-redux';
import DeleteGuideConfirm from './DeleteGuideConfirm.component';

import { deleteGuide } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    guide: _.findWhere(muOnline.guides, { _id: muOnline.focusGuide })
  }),
  dispatch => ({
    onDeleteGuide(id) {
      dispatch(deleteGuide(id));
    }
  })
)(DeleteGuideConfirm);
