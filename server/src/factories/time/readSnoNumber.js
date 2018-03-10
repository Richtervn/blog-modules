export default sno__numb => {
  const yyyy = sno__numb.substring(0, 4);
  const mm = sno__numb.substring(4, 6);
  const dd = sno__numb.substring(6, 8);

  const birthday = yyyy + '-' + mm + '-' + dd;

  return birthday;
};
