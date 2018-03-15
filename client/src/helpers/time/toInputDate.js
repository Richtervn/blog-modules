import moment from 'moment';

export default dateData => {
  return moment(dateData).format('YYYY-MM-DD');
};
