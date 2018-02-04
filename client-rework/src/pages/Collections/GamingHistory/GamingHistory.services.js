import { serviceCaller } from 'helpers';

const { commonGet, commonPostMultiplePart, commonPutMultiplePart, commonDelete, commonPut } = serviceCaller;

export default {
  getList() {
    const data = commonGet('gaming_history/get_list');
    return data;
  },
  addGame(formBody) {
    const data = commonPostMultiplePart('gaming_history/add_game', formBody);
    return data;
  },
  editGame(formBody) {
    const data = commonPutMultiplePart('gaming_history/edit_game', formBody);
    return data;
  },
  deleteGame(id) {
    const data = commonDelete('gaming_history/delete_game/' + id);
    return data;
  },
  getAbout(gameId) {
    const data = commonGet('gaming_history/get_about', [gameId]);
    return data;
  },
  editAbout(formBody) {
    const data = commonPut('gaming_history/edit_about', formBody);
    return data;
  }
};
