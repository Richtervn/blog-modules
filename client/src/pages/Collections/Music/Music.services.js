import { serviceCaller } from 'helpers';

const { commonPostMultipleFile, commonGet, commonPut } = serviceCaller;

export default {
  addSongs({ formBody }) {
    const data = commonPostMultipleFile('music/add_songs', formBody);
    return data;
  },
  getSongs() {
    const data = commonGet('music/get_all');
    return data;
  },
  searchSong({ query }) {
    const data = commonGet('music/search', null, query);
    return data;
  },
  editSong({ formBody }) {
    const data = commonPut('music/update', formBody);
    return data;
  },
  deleteSongs({ ids }) {
    const data = commonPut('music/delete_songs', ids);
    return data;
  }
};
