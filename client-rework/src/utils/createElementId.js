export default (name, prefix) => {
  let id = name.toLowerCase().replace(/ /g, '');
  if (prefix) {
    id = `${prefix}_${id}`;
  }
  return id;
};
