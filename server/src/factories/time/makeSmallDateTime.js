export default () => {
  let date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');
  return date;
};
