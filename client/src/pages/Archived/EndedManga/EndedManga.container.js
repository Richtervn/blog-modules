import { connect } from 'react-redux';
import { getMangas } from 'pages/Collections/MangasReading';
import EndedManga from './EndedManga.component';

export default connect(
  ({ endedManga }) => ({
    mangas: endedManga.mangas
  }),
  dispatch => ({
    onGetMangas() {
      dispatch(getMangas());
    }
  })
)(EndedManga);
