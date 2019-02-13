import { connect } from 'react-redux';
import DayEvents from './DayEvents.component';

import { setTimeValues } from './DayEvents.module';

export default connect(
  ({ dayEvents }) => ({ isLoading: !dayEvents.events }),
  dispatch => ({
    onSetTimeValues(values) {
      dispatch(setTimeValues(values));
    }
  })
)(DayEvents);
