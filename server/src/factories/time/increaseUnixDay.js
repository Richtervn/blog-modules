import moment from 'moment';

export default (unixNumber, dayToAdd) => {
  let startDay = unixNumber ? moment.unix(unixNumber) : moment();
  startDay.add(dayToAdd, 'days');
  return startDay.format('X');
};
