import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonDelete } = serviceCaller;

export default {
  addMod(formBody) {
    const data = commonPostMultiplePart('yugioh_poc/mod', formBody);
    return data;
  },
  searchMod(query) {
    const data = commonGet('yugioh_poc/search_mod', null, query);
    return data;
  },
  addDeck(formBody) {
    const data = commonPostMultiplePart('yugioh_poc/deck', formBody);
    return data;
  },
  getMods() {
    const data = commonGet('yugioh_poc/mods');
    return data;
  },
  getDecks(modId) {
    const data = commonGet('yugioh_poc/decks', [modId]);
    return data;
  },
  editMod(formBody) {
    const data = commonPutMultiplePart('yugioh_poc/mod', formBody);
    return data;
  },
  editDeck(formBody) {
    const data = commonPutMultiplePart('yugioh_poc/deck', formBody);
    return data;
  },
  deleteMod(id) {
    const data = commonDelete('yugioh_poc/mod/' + id);
    return data;
  },
  deleteDeck(id) {
    const data = commonDelete('yugioh_poc/deck/' + id);
    return data;
  }
};
