import moment from 'moment';

export default {
	toInputDate(unixTime){
		return moment(unixTime).format('YYYY-MM-DD');
	},
	toOutputDate(dateData){
		return moment(dateData, 'YYYY-MM-DD').unix();
	}
}