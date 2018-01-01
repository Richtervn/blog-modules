import numeral from 'numeral';

export default number => {
  const numer = numeral(number);
  const formatedNumber = numer.format('0,0');
  return formatedNumber;
};
