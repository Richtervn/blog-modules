import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonGet, commonPutMultiplePart } = serviceCaller;

export default {
  addGame({ formBody }) {
    const data = commonPostMultiplePart('flash_games/add_game', formBody);
    return data;
  },
  getGame({ Name }) {
    const data = commonGet('flash_games/get_game', [Name]);
    return data;
  },
  editGame({ formBody }) {
    const data = commonPutMultiplePart('flash_games/edit_game', formBody);
    return data;
  }
};
