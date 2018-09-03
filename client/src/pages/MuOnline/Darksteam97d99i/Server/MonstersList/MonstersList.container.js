import { connect } from 'react-redux';
import MonstersList from './MonstersList.component';

import { getMonsters } from '../Server.module';

export default connect(
  ({ ds9799_server }) => ({
    monsters: ds9799_server.data.Monsters
  }),
  dispatch => ({
    onGetMonsters() {
      dispatch(getMonsters());
    }
  })
)(MonstersList);
