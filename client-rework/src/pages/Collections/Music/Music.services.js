import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonGet } = serviceCaller;

export default {
  add(formBody) {
    const data = commonPostMultiplePart('music/add_song', formBody);
    return data;
  },
  getAll() {
    const data = commonGet('music/get_all');
    return data;
  },
  search(query) {
    const data = commonGet('music/search', null, query);
    return data;
  }
};
