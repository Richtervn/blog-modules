import ServerPages from 'components/MuOnline/Darksteam97d99i/ServerChannel/ServerPages';
import { connect } from 'react-redux';

export default connect(({ ds9799_navigator }) => ({
  page: ds9799_navigator.serverPage
}))(ServerPages);
