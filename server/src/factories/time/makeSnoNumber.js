export default birthday => {
  let data = new Date(birthday)
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  let yyyy = data.substring(0, 4);
  let mm = data.substring(5, 7);
  let dd = data.substring(8, 10);

  const sno__numb = yyyy + mm + dd;
  return sno__numb;
};
