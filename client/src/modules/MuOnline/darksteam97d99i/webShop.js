import actionCreator from 'factories/actionCreator';
import { darksteam97d99i } from 'services';

const ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY = 'darksteam97d99i/webShop/ADMIN_SET_FOCUS_WEB_SHOP_CATEGORY';
const SET_FOCUS_CATEGORY = 'darksteam97d99i/webShop/SET_FOCUS_CATEGORY';

const ADMIN_ADD_PACKAGE_START = 'darksteam97d99i/webShop/ADMIN_ADD_PACKAGE_START';
const ADMIN_ADD_PACKAGE_SUCCESS = 'darksteam97d99i/webShop/ADMIN_ADD_PACKAGE_SUCCESS';
const ADMIN_ADD_PACKAGE_FAIL = 'darksteam97d99i/webShop/ADMIN_ADD_PACKAGE_FAIL';

const EDIT_PACKAGE_START = 'darksteam97d99i/webShop/EDIT_PACKAGE_START';
const EDIT_PACKAGE_SUCCESS = 'darksteam97d99i/webShop/EDIT_PACKAGE_SUCCESS';
const EDIT_PACKAGE_FAIL = 'darksteam97d99i/webShop/EDIT_PACKAGE_FAIL';

const DELETE_PACKAGE_START = 'darksteam97d99i/webShop/DELETE_PACKAGE_START';
const DELETE_PACKAGE_SUCCESS = 'darksteam97d99i/webShop/DELETE_PACKAGE_SUCCESS';
const DELETE_PACKAGE_FAIL = 'darksteam97d99i/webShop/DELETE_PACKAGE_FAIL';

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

export const editPackage = formBody =>
	actionCreator(
		EDIT_PACKAGE_START,
		EDIT_PACKAGE_SUCCESS,
		EDIT_PACKAGE_FAIL,
		darksteam97d99i.editWebShopPackage,
		formBody
	)();

export const deletePackage = id =>
	actionCreator(
		DELETE_PACKAGE_START,
		DELETE_PACKAGE_SUCCESS,
		DELETE_PACKAGE_FAIL,
		darksteam97d99i.deleteWebShopPackage,
		id
	)();

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
		case ADMIN_ADD_PACKAGE_SUCCESS:
			state.packages[state.focusWebShopCategory._id].push(action.data);
			return {
				...state,
				packages: {
					...state.packages,
					[state.focusWebShopCategory._id]: state.packages[state.focusWebShopCategory._id].slice(0)
				}
			};

		case GET_PACKAGE_SUCCESS:
			state.packages[action.id] = action.packages;
			return {
				...state,
				packages: { ...state.packages }
			};

		case EDIT_PACKAGE_SUCCESS: {
			console.log(action.data);
			state.packages[state.focusWebShopCategory._id] = state.packages[state.focusWebShopCategory._id].map(pack => {
				if (pack.id == action.data.id) {
					return action.data;
				}
				return pack;
			});
			return {
				...state,
				packages: {
					...state.packages,
					[state.focusWebShopCategory._id]: state.packages[state.focusWebShopCategory._id].slice(0).map(pack => {
						const refeshPack = {...pack}
						refeshPack.items = refeshPack.items.slice(0);
						return refeshPack;
					})
				}
			};
		}

		case DELETE_PACKAGE_SUCCESS: {
			state.packages[state.focusWebShopCategory._id] = state.packages[state.focusWebShopCategory._id].filter(
				pack => pack.id != action.data.id
			);
			return {
				...state,
				packages: {
					...state.packages,
					[state.focusWebShopCategory._id]: state.packages[state.focusWebShopCategory._id].slice(0)
				}
			};
		}

		case EDIT_PACKAGE_FAIL:
		case DELETE_PACKAGE_FAIL:
			console.log(action);
		default:
			return state;
	}
};
