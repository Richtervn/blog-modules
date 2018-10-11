import _ from 'underscore';
import Promise from 'bluebird';

export default async (query, getGameData) => {
  let fileNames;
  const result = {};
  if (query.fileNames) {
    fileNames = query.fileNames.split(',');
  } else {
    const categories = await getGameData('Categories');
    fileNames = _.pluck(categories, 'Name');
    result.Categories = categories;
  }
  await Promise.map(fileNames, async fileName => {
    result[fileName] = await getGameData(fileName);
  });
  return result;
};
