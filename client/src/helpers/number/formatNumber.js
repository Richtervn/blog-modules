export default (number, seperator) => {
  let formatedNumber = number.toLocaleString();
  if (seperator) {
    formatedNumber = formatedNumber.replace(/./g, seperator);
  }
  return formatedNumber;
};
