import QuestEditor from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages/QuestEditor';
import { connect } from 'react-redux';

import { getData } from 'modules/MuOnline/darksteam97d99i/data';

export default connect(
  ({ ds9799_data }) => ({ data: ds9799_data }),
  dispatch => ({
    onGetData(name) {
      dispatch(getData(name));
    }
  })
)(QuestEditor);
