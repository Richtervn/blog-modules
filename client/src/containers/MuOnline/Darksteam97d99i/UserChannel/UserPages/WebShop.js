import WebShop from 'components/MuOnline/Darksteam97d99i/UserChannel/UserPages/WebShop';
import { connect } from 'react-redux';

import { getPackage, setFocusCategory, buyPackage } from 'modules/MuOnline/darksteam97d99i/webShop';
import { getCharacters } from 'modules/MuOnline/darksteam97d99i/character';

export default connect(
	({ ds9799_webShop, ds9799_character, ds9799_user }) => ({
		categories: ds9799_webShop.categories,
		packages: ds9799_webShop.packages,
		focusCategory: ds9799_webShop.focusCategory,
		characters: ds9799_character.characters,
		user: ds9799_user.user
	}),
	dispatch => ({
		onGetPackage(id) {
			dispatch(getPackage(id));
		},
		onSetFocusCategory(category) {
			dispatch(setFocusCategory(category));
		},
		onBuyPackage(packageId, characterName) {
			dispatch(buyPackage(packageId, characterName));
		},
		onGetCharacters(accountId) {
			dispatch(getCharacters(accountId));
		}
	})
)(WebShop);
