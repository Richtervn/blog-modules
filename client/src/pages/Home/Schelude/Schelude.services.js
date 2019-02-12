import { serviceCaller } from 'helpers';

const { commonGet, commonPost, commonDelete, commonPut } = serviceCaller;

export default {
  getEvents() {
    const data = commonGet('schelude_events/get_all');
    return data;
  },
  editEvent({ formBody }) {
    const data = commonPut('schelude_events/edit', formBody);
    return data;
  },
  addEvent({ formBody }) {
    const data = commonPost('schelude_events/add', formBody);
    return data;
  },
  deleteEvent({ id }) {
    const data = commonDelete(`schelude_events/remove/${id}`);
    return data;
  }
};
