import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonPut, commonDelete } = serviceCaller;

export default {
  getMods() {
    const data = commonGet('diabloII/mods');
    return data;
  },
  getTools() {
    const data = commonGet('diabloII/tools');
    return data;
  },
  getSurvivalKits() {
    const data = commonGet('diabloII/survival_kits');
    return data;
  },
  getCharacters() {
    const data = commonGet('diabloII/characters');
    return data;
  },
  searchMods({ query }) {
    const data = commonGet('diabloII/search_mods', null, query);
    return data;
  },
  searchTools({ query }) {
    const data = commonGet('diabloII/search_tools', null, query);
    return data;
  },
  searchCharacters({ query }) {
    const data = commonGet('diabloII/search_characters', null, query);
    return data;
  },
  searchSurvivalKits({ query }) {
    const data = commonGet('diabloII/search_survial_kits', null, query);
    return data;
  },
  editMod({ formBody }) {
    const data = commonPutMultiplePart('diabloII/mod', formBody);
    return data;
  },
  editTool({ formBody }) {
    const data = commonPutMultiplePart('diabloII/tool', formBody);
    return data;
  },
  editCharacter({ formBody }) {
    const data = commonPutMultiplePart('diabloII/character', formBody);
    return data;
  },
  editSurvivalKit({ formBody }) {
    const data = commonPutMultiplePart('diabloII/survival_kit', formBody);
    return data;
  },
  addMod({ formBody }) {
    const data = commonPostMultiplePart('diabloII/mod', formBody);
    return data;
  },
  addCharacter({ formBody }) {
    const data = commonPostMultiplePart('diabloII/character', formBody);
    return data;
  },
  addTool({ formBody }) {
    const data = commonPostMultiplePart('diabloII/tool', formBody);
    return data;
  },
  addSurvivalKit({ formBody }) {
    const data = commonPostMultiplePart('diabloII/survival_kit', formBody);
    return data;
  },
  deleteMod({ id }) {
    const data = commonDelete('diabloII/mod/' + id);
    return data;
  },
  deleteTool({ id }) {
    const data = commonDelete('diabloII/tool/' + id);
    return data;
  },
  deleteCharacter({ id }) {
    const data = commonDelete('diabloII/character/' + id);
    return data;
  },
  deleteSurvivalKit({ id }) {
    const data = commonDelete('diabloII/survival_kit/' + id);
    return data;
  },
  getModDetail({ id }) {
    const data = commonGet('diabloII/mod', [id]);
    return data;
  },
  getToolDetail({ id }) {
    const data = commonGet('diabloII/tool', [id]);
    return data;
  },
  getExtraData() {
    const data = commonGet('diabloII/extra');
    return data;
  },
  extraLevel({ level }) {
    const data = commonGet('diabloII/extra/level', [level]);
    return data;
  },
  extraGold({ amount, type }) {
    const data = commonGet('diabloII/extra/gold', null, { amount, type });
    return data;
  },
  extraSkill({ amount, type }) {
    const data = commonGet('diabloII/extra/skill', null, { amount, type });
    return data;
  },
  editExtraData({ formBody }) {
    const data = commonPut('diabloII/extra', formBody);
    return data;
  }
};
