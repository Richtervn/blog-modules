import { connect } from 'react-redux';
import VipManager from './VipManager.component';

import { getCharacters, setFocusCharacter } from '../CharacterManager/Character.module';
import { getPackages, buyPackage } from './Credit.module';

export default connect(
  ({ ds9799_user, ds9799_character, ds9799_credit }) => ({
    characters: ds9799_character.characters,
    user: ds9799_user.user,
    focusCharacter: ds9799_character.focusCharacter,
    packages: ds9799_credit.packages
  }),
  dispatch => ({
    onGetCharacters(id) {
      dispatch(getCharacters(id));
    },
    onSetFocusCharacter(name) {
      dispatch(setFocusCharacter(name));
    },
    onGetPackages() {
      dispatch(getPackages());
    },
    onBuy(query) {
      dispatch(buyPackage(query));
    }
  })
)(VipManager);
