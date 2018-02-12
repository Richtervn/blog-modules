import MangasReading from './MangasReading.component';
import { connect } from 'react-redux';

import { getMangas } from './MangasReading.module';

const mapStateToProps = ({ mangasReading }) => ({
  mangas: mangasReading.mangas
});

const mapDispatchToProps = dispatch => ({
  onGetMangas() {
    dispatch(getMangas());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MangasReading);
