import UpgradeItems from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/UpgradeItems';
import { connect } from 'react-redux';

export default connect(
  ({ ds9799_user, ds9799_character }) => ({
    user: ds9799_user.user,
    characters: ds9799_character.characters
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    }
  })
)(UpgradeItems);
