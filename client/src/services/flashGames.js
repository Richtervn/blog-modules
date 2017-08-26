import serviceCaller from 'factories/serviceCaller';

const { commonPostMultiplePart, commonGet } = serviceCaller;

export default {
  addGame(formBody) {
    const data = commonPostMultiplePart('flash_games/add_game', formBody);
    return data;
  },
  getGame(Name){
    const data = commonGet('flash_games/get_game', [Name]);
    return data;
  }
};
