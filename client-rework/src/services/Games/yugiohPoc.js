import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonDelete } = serviceCaller;

export default {
  addMod(formBody) {
    const data = commonPostMultiplePart('yugioh_poc/add_mod', formBody);
    return data;
  },
  addDeck(formBody) {
    const data = commonPostMultiplePart('yugioh_poc/add_deck', formBody);
    return data;
  },
  getModList() {
    const data = commonGet('yugioh_poc/mod_list');
    return data;
  },
  getDeckList(modId) {
    const data = commonGet('yugioh_poc/deck_list', [modId]);
    return data;
  },
  editMod(formBody) {
    const data = commonPutMultiplePart('yugioh_poc/edit_mod', formBody);
    return data;
  },
  editDeck(formBody) {
    const data = commonPutMultiplePart('yugioh_poc/edit_deck', formBody);
    return data;
  },
  deleteMod(id) {
    const data = commonDelete('yugioh_poc/remove_mod/' + id);
    return data;
  },
  deleteDeck(id) {
    const data = commonDelete('yugioh_poc/remove_deck/' + id);
    return data;
  }
};
