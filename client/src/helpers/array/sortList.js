import _ from 'underscore';

export default (collections, sortKey, sortOption) => {
  let sorted = collections;
  if (sortKey && sortOption) {
    sorted = _.sortBy(collections, sortKey);
    if (sortOption === 'DESC') {
      sorted = sorted.reverse();
    }
  }
  return sorted;
};
