export default (array, chunkSize) => {
  let results = [];
  while (array.length > 0) {
    results.push(array.splice(0, chunkSize));
  }
  if (results[results.length - 1].length < chunkSize) {
    for (let i = results[results.length - 1].length; i < chunkSize; i++) results[results.length - 1].push({});
  }
  return results;
};
