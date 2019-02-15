import { actionCreator } from 'helpers';
import services from './DayEvents.services';
import { toastSuccess } from 'common/Toast';

const GET_EVENTS = 'dayEvents/GET_EVENTS';
const EDIT_EVENT = 'dayEvents/EDIT_EVENT';
const DELETE_EVENT = 'dayEvents/DELETE_EVENT';
const ADD_EVENT = 'dayEvents/ADD_EVENT';
const GET_EVENT_DETAIL = 'dayEvents/GET_EVENT_DETAIL';

const SET_TIME_VALUES = 'dayEvents/SET_TIME_VALUES';
const SET_SELECTED_EVENT = 'dayEvents/SET_SELECTED_EVENT';

export const getEvents = () => actionCreator(GET_EVENTS, services.getEvents)();
export const editEvent = formBody =>
  actionCreator(EDIT_EVENT, services.editEvent, {
    payload: { formBody },
    onAfterSuccess() {
      toastSuccess(`Updated ${formBody.title}`);
    }
  })();
export const addEvent = formBody =>
  actionCreator(ADD_EVENT, services.addEvent, {
    payload: { formBody },
    onAfterSuccess() {
      toastSuccess(`Added ${formBody.title}`);
    }
  })();
export const deleteEvent = id =>
  actionCreator(DELETE_EVENT, services.deleteEvent, {
    payload: { id },
    onAfterSuccess() {
      toastSuccess('Removed event');
    }
  })();
export const getEventDetail = id => actionCreator(GET_EVENT_DETAIL, services.getEventDetail, { payload: { id } })();

export const setTimeValues = values => ({ type: SET_TIME_VALUES, values });
export const setSelectedEvent = event => ({ type: SET_SELECTED_EVENT, event });

const initialState = {
  events: null,
  timeValues: {},
  selectedEvent: {},
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
    default:
      return state;
  }
};
