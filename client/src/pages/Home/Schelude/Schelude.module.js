import moment from 'moment';
import { actionCreator } from 'helpers';
import { toastStrong, toastSuccess } from 'common/Toast';

import services from './Schelude.services';
import dayEVentServices from 'pages/Setting/DayEvents/DayEvents.services';

const GET_EVENTS = 'schelude/GET_EVENTS';
const EDIT_EVENT = 'schelude/EDIT_EVENT';
const DELETE_EVENT = 'schelude/DELETE_EVENT';
const ADD_EVENT = 'schelude/ADD_EVENT';
const GET_EVENT_DETAIL = 'schelude/GET_EVENT_DETAIL';

const SET_TIME_VALUES = 'schelude/SET_TIME_VALUES';
const SET_SELECTED_EVENT = 'schelude/SET_SELECTED_EVENT';
const SET_SELECTED_DATE = 'schelude/SET_SELECTED_DATE';

export const getEvents = () => actionCreator(GET_EVENTS, services.getEvents)();
export const editEvent = formBody =>
  actionCreator(EDIT_EVENT, services.editEvent, {
    payload: { formBody },
    onAfterSuccess({ data }) {
      toastStrong(data.title, null, 'updated successfully');
    }
  })();
export const addEvent = formBody =>
  actionCreator(ADD_EVENT, services.addEvent, {
    payload: { formBody },
    onAfterSuccess() {
      toastSuccess('Added schelude event');
    }
  })();
export const deleteEvent = id =>
  actionCreator(DELETE_EVENT, services.deleteEvent, {
    payload: { id },
    onAfterSuccess() {
      toastSuccess('Event removed');
    }
  })();
export const getEventDetail = event =>
  actionCreator(
    GET_EVENT_DETAIL,
    ({ event }) => {
      if (event.eventType === 'day') {
        return dayEVentServices.getEventDetail({ id: event._id });
      } else {
        return services.getEventDetail({ id: event._id });
      }
    },
    { payload: { event } }
  )();

export const setTimeValues = values => ({ type: SET_TIME_VALUES, values });
export const setSelectedEvent = event => ({ type: SET_SELECTED_EVENT, event });
export const setSelectedDate = date => ({ type: SET_SELECTED_DATE, date: moment(date).toDate() });

const initialState = {
  events: null,
  timeValues: {},
  selectedEvent: {},
  selectedDate: moment().toDate(),
  eventDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTS}_SUCCESS`:
      return { ...state, events: action.payload };
    case `${EDIT_EVENT}_SUCCESS`:
      state.events = state.events.map(event => {
        if (parseInt(event._id, 10) === parseInt(action.payload._id, 10)) {
          return action.payload;
        }
        return event;
      });
      if (parseInt(state.eventDetail._id, 10) === parseInt(action.payload._id, 10)) {
        state.eventDetail = action.payload;
      }
      if (parseInt(state.selectedEvent._id, 10) === parseInt(action.payload._id, 10)) {
        state.selectedEvent = action.payload;
      }
      return {
        ...state,
        events: state.events.slice(0),
        eventDetail: { ...state.eventDetail },
        selectedEvent: { ...state.selectedEvent }
      };

    case `${ADD_EVENT}_SUCCESS`:
      state.events.push(action.payload);
      return { ...state, events: state.events.slice(0) };
    case `${DELETE_EVENT}_SUCCESS`:
      state.events = state.events.filter(event => parseInt(event._id) !== parseInt(action.payload._id));
      return { ...state, events: state.events.slice(0), eventDetail: {}, selectedEvent: {} };
    case `${GET_EVENT_DETAIL}_SUCCESS`:
      return { ...state, eventDetail: action.payload };

    case SET_TIME_VALUES:
      return { ...state, timeValues: action.values };
    case SET_SELECTED_EVENT:
      return { ...state, selectedEvent: action.event };
    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.date };
    default:
      return state;
  }
};
