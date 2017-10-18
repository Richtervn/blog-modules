import UserPages from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages';
import { connect } from 'react-redux';

export default connect(({ ds9799_navigator }) => ({
  page: ds9799_navigator.userPage
}))(UserPages);
