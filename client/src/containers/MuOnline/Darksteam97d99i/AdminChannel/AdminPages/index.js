import AdminPages from 'components/MuOnline/Darksteam97d99i/AdminChannel/AdminPages';
import { connect } from 'react-redux';

export default connect(({ ds9799_navigator }) => ({
  page: ds9799_navigator.adminPage
}))(AdminPages);
