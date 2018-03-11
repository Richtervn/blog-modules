import _ from 'underscore';
import { connect } from 'react-redux';
import GuideForm from './GuideForm.component';

import { addGuide, editGuide } from '../../MuOnline.module';

export default connect(
  ({ muOnline }) => ({
    guide: _.findWhere(muOnline.guides, { _id: muOnline.focusGuide })
  }),
  dispatch => ({
    onEditGuide(formBody) {
      dispatch(editGuide(formBody));
    },
    onAddGuide(formBody) {
      dispatch(addGuide(formBody));
    }
  })
)(GuideForm);
