import _ from 'underscore';

export default (category, itemId, itemLvl) => {
	const appendImageSrc = `/app_modules/images/muonline/item/${category}/${itemId}-${itemLvl}.gif`;
	if (category == 'Misc') {
		if (parseInt(itemId) == 11 && _.contains([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], parseInt(itemLvl))) {
			return appendImageSrc;
		}
		if (parseInt(itemId) == 12 && _.contains([1], parseInt(itemLvl))) {
			return appendImageSrc;
		}
	}
	return `/app_modules/images/muonline/item/${category}/${itemId}.gif`;
};
