import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonGet, commonPut } = serviceCaller;

export default {
  addSong(formBody) {
    const data = commonPostMultiplePart('music/add_song', formBody);
    return data;
  },
  getSongs() {
    const data = commonGet('music/get_all');
    return data;
  },
  searchSong(query) {
    const data = commonGet('music/search', null, query);
    return data;
  },
  editSong(formBody) {
    const data = commonPut('music/update', formBody);
    return data;
  }
};
