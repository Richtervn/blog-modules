import { connect } from 'react-redux';
import UnsavedMangas from './UnsavedMangas.component';
import { confirmUnsavedMangas } from '../MangasReading.module';

export default connect(
  ({ mangasReading }) => ({
    unsavedMangas: mangasReading.unsaved
  }),
  dispatch => ({
    onConfirm(formBody) {
      dispatch(confirmUnsavedMangas(formBody));
    }
  })
)(UnsavedMangas);
