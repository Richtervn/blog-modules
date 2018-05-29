import _ from 'underscore';

export default (category, itemId, itemLvl) => {
  const appendImageSrc = `/images/muonline/item/${category}/${itemId}-${itemLvl}.gif`;
  if (category === 'Misc') {
    if (parseInt(itemId, 10) === 11 && _.contains([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], parseInt(itemLvl, 10))) {
      return appendImageSrc;
    }
    if (parseInt(itemId, 10) === 12 && _.contains([1], parseInt(itemLvl, 10))) {
      return appendImageSrc;
    }
  }
  return `/images/muonline/item/${category}/${itemId}.gif`;
};
