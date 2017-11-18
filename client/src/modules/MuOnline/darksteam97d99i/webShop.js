import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY = 'darksteam97d99i/webShop/ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY';
const SET_FOCUS_CATEGORY = 'darksteam97d99i/webShop/SET_FOCUS_CATEGORY';

const ADMIN_ADD_PACKAGE_START = 'darksteam97d99i/webShop/ADMIN_ADD_PACKAGE_START';
const ADMIN_ADD_PACKAGE_SUCCESS = 'darksteam97d99i/webShop/ADMIN_ADD_PACKAGE_SUCCESS';
const ADMIN_ADD_PACKAGE_FAIL = 'darksteam97d99i/webShop/ADMIN_ADD_PACKAGE_FAIL';

const GET_PACKAGE_START = 'darksteam97d99i/webShop/GET_PACKAGE_START';
const GET_PACKAGE_SUCCESS = 'darksteam97d99i/webShop/GET_PACKAGE_SUCCESS';
const GET_PACKAGE_FAIL = 'darksteam97d99i/webShop/GET_PACKAGE_FAIL';

export const setFocusWebShopCategory = category => ({
	type: ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY,
	category
});
export const setFocusCategory = category => ({
	type: SET_FOCUS_CATEGORY,
	category
});

export const addPackage = formBody =>
	actionCreator(
		ADMIN_ADD_PACKAGE_START,
		ADMIN_ADD_PACKAGE_SUCCESS,
		ADMIN_ADD_PACKAGE_FAIL,
		darksteam97d99i.addWebShopPackage,
		formBody
	)();
export const getPackage = id => {
	const getPackageStart = () => ({ type: GET_PACKAGE_START });
	const getPackageSuccess = packages => ({ type: GET_PACKAGE_SUCCESS, packages, id });
	const getPackageFail = error => ({ type: GET_PACKAGE_FAIL, message: error.message });
	return async dispatch => {
		dispatch(getPackageStart());
		try {
			const data = await darksteam97d99i.getWebShopPackage(id);
			dispatch(getPackageSuccess(data, id));
		} catch (e) {
			dispatch(getPackageFail(e));
		}
	};
};

const initialState = {
	categories: [
		{ _id: 0, Name: 'Swords', Icon: 'ws-sword' },
		{ _id: 1, Name: 'Axes', Icon: 'ws-axe' },
		{ _id: 2, Name: 'Maces', Icon: 'ws-mace' },
		{ _id: 3, Name: 'Spears', Icon: 'ws-spear' },
		{ _id: 4, Name: 'Bows', Icon: 'ws-bow' },
		{ _id: 5, Name: 'Staffs', Icon: 'ws-staff' },
		{ _id: 6, Name: 'Shields', Icon: 'ws-shield' },
		{ _id: 7, Name: 'Wings', Icon: 'ws-wing' },
		{ _id: 8, Name: 'Sets', Icon: 'ws-set' }
	],
	focusWebShopCategory: { _id: 0, Name: 'Swords', Icon: 'ws-sword' },
	focusCategory: { _id: 0, Name: 'Swords', Icon: 'ws-sword' },
	packages: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY:
			return {
				...state,
				focusWebShopCategory: action.category
			};
		case SET_FOCUS_CATEGORY:
			return {
				...state,
				focusCategory: action.category
			};
		case GET_PACKAGE_SUCCESS:
			state.packages[action.id] = action.packages;
			return {
				...state,
				packages: { ...state.packages }
			};
		default:
			return state;
	}
};
