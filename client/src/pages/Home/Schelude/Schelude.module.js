import { actionCreator } from 'helpers';
import services from './Schelude.services';

const GET_EVENTS = 'schelude/GET_EVENTS';
const EDIT_EVENT = 'schelude/EDIT_EVENT';
const DELETE_EVENT = 'schelude/DELETE_EVENT';
const ADD_EVENT = 'schelude/ADD_EVENT';

const SET_TIME_VALUES = 'schelude/SET_TIME_VALUES';
const SET_SELECTED_EVENT = 'schelude/SET_SELECTED_EVENT';

export const getEvents = () => actionCreator(GET_EVENTS, services.getEvents)();
export const editEvent = formBody => actionCreator(EDIT_EVENT, services.editEvent, { payload: { formBody } })();
export const addEvent = formBody => actionCreator(ADD_EVENT, services.addEvent, { payload: { formBody } })();
export const deleteEvent = id => actionCreator(DELETE_EVENT, services.deleteEvent, { payload: { id } })();

export const setTimeValues = values => ({ type: SET_TIME_VALUES, values });
export const setSelectedEvent = event => ({ type: SET_SELECTED_EVENT, event });

const initialState = {
  events: null,
  timeValues: {},
  selectedEvent: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTS}_SUCCESS`:
      return { ...state, events: action.payload };
    case `${EDIT_EVENT}_SUCCESS`:
      state.events = state.events.map(event => {
        if (parseInt(event._id) === parseInt(action.payload._id)) {
          return action.payload;
        }
        return event;
      });
      return { ...state, events: state.events.slice(0) };
    case `${ADD_EVENT}_SUCCESS`:
      state.events.push(action.payload);
      return { ...state, events: state.events.slice(0) };
    case `${DELETE_EVENT}_SUCCESS`:
      state.events = state.events.filter(event => parseInt(event._id) !== parseInt(action.payload._id));
      return { ...state, events: state.events.slice(0) };

    case SET_TIME_VALUES:
      return { ...state, timeValues: action.values };
    case SET_SELECTED_EVENT:
      return { ...state, selectedEvent: action.event };
    default:
      return state;
  }
};
