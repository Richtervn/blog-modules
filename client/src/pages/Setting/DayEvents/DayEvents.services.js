import { serviceCaller } from 'helpers';

const { commonGet, commonPost, commonDelete, commonPut } = serviceCaller;

export default {
  getEvents() {
    const data = commonGet('day_events/get_all');
    return data;
  },
  getEventDetail({ id }) {
    const data = commonGet('day_events/get_detail', [id]);
    return data;
  },
  editEvent({ formBody }) {
    const data = commonPut('day_events/edit', formBody);
    return data;
  },
  addEvent({ formBody }) {
    const data = commonPost('day_events/add', formBody);
    return data;
  },
  deleteEvent({ id }) {
    const data = commonDelete(`day_events/remove/${id}`);
    return data;
  }
};
