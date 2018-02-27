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
  searchMods(query) {
    const data = commonGet('diabloII/search_mods', null, query);
    return data;
  },
  editMod(body) {
    const data = commonPutMultiplePart('diabloII/mod', body);
    return data;
  },
  editTool(body) {
    const data = commonPutMultiplePart('diabloII/tool', body);
    return data;
  },
  editCharacter(body) {
    const data = commonPutMultiplePart('diabloII/character', body);
    return data;
  },
  editSurvivalKit(body) {
    const data = commonPutMultiplePart('diabloII/survival_kit', body);
    return data;
  },
  addMod(body) {
    const data = commonPostMultiplePart('diabloII/mod', body);
    return data;
  },
  addCharacter(body) {
    const data = commonPostMultiplePart('diabloII/character', body);
    return data;
  },
  addTool(body) {
    const data = commonPostMultiplePart('diabloII/tool', body);
    return data;
  },
  addSurvivalKit(body) {
    const data = commonPostMultiplePart('diabloII/survival_kit', body);
    return data;
  },
  deleteMod(id) {
    const data = commonDelete('diabloII/mod/' + id);
    return data;
  },
  deleteTool(id) {
    const data = commonDelete('diabloII/tool/' + id);
    return data;
  },
  deleteCharacter(id) {
    const data = commonDelete('diabloII/character/' + id);
    return data;
  },
  deleteSurvivalKit(id) {
    const data = commonDelete('diabloII/survival_kit/' + id);
    return data;
  },
  getModDetail(id) {
    const data = commonGet('diabloII/mod', [id]);
    return data;
  },
  getToolDetail(id) {
    const data = commonGet('diabloII/tool', [id]);
    return data;
  },
  getExtraData() {
    const data = commonGet('diabloII/extra');
    return data;
  },
  extraLevel(level) {
    const data = commonGet('diabloII/extra/level', [level]);
    return data;
  },
  extraGold(amount, type) {
    const data = commonGet('diabloII/extra/gold', null, { amount, type });
    return data;
  },
  extraSkill(amount, type) {
    const data = commonGet('diabloII/extra/skill', null, { amount, type });
    return data;
  },
  editExtraData(body) {
    const data = commonPut('diabloII/extra', body);
    return data;
  }
};
