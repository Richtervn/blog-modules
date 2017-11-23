const SET_CURRENT_PAGE = 'darksteam97d99i/luxuryShop/SET_CURRENT_PAGE';

export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });

export default (
	state = {
		pages: ['Exchange', 'Receipts', 'Consumable'],
		currentPage: 'Exchange'
	},
	action
) => {
	switch (action.type) {
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.page };
		default:
			return state;
	}
};
