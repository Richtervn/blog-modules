import { connect } from 'react-redux';
import MonsterFileSelector from './MonsterFileSelector.component';

import { getData } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data.Monsters
  }),
  dispatch => ({
    onGetData() {
      dispatch(getData('Monsters'));
    }
  })
)(MonsterFileSelector);
