import { connect } from 'react-redux';
import MonsterSelector from './MonsterSelector.component';

import { getData } from '../Server/Server.module';

export default connect(
  ({ ds9799_server }) => ({
    data: ds9799_server.data.Monsters
  }),
  dispatch => ({
    onGetData() {
      dispatch(getData('Monsters'));
    }
  })
)(MonsterSelector);
