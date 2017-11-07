import moment from 'moment'

export default {
	toInputDate(dateData){
		return moment(dateData).format('YYYY-MM-DD');
	}
}