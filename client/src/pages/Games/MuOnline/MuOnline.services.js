import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonDelete, commonPost, commonPut } = serviceCaller;

export default {
  getTools() {
    const data = commonGet('mu_online/tools');
    return data;
  },
  getVersions() {
    const data = commonGet('mu_online/versions');
    return data;
  },
  getGuides() {
    const data = commonGet('mu_online/guides');
    return data;
  },
  getCharacters() {
    const data = commonGet('mu_online/characters');
    return data;
  },
  getToolDetail(id) {
    const data = commonGet('mu_online/tool', [id]);
    return data;
  },
  getVersionDetail(id) {
    const data = commonGet('mu_online/version', [id]);
    return data;
  },
  getGuideDetail(id) {
    const data = commonGet('mu_online/guide', [id]);
    return data;
  },
  addTool(formBody) {
    const data = commonPostMultiplePart('mu_online/tool', formBody);
    return data;
  },
  addVersion(formBody) {
    const data = commonPostMultiplePart('mu_online/version', formBody);
    return data;
  },
  addGuide(formBody) {
    const data = commonPost('mu_online/guide', formBody);
    return data;
  },
  editTool(formBody) {
    const data = commonPutMultiplePart('mu_online/tool', formBody);
    return data;
  },
  editVersion(formBody) {
    const data = commonPutMultiplePart('mu_online/version', formBody);
    return data;
  },
  editGuide(formBody) {
    const data = commonPut('mu_online/guide', formBody);
    return data;
  },
  editCharacter(formBody) {
    const data = commonPut('mu_online/character', formBody);
    return data;
  },
  deleteTool(id) {
    const data = commonDelete('mu_online/tool/' + id);
    return data;
  },
  deleteVersion(id) {
    const data = commonDelete('mu_online/version/' + id);
    return data;
  },
  deleteCharacter(id) {
    const data = commonDelete('mu_online/character/' + id);
    return data;
  },
  deleteGuide(id) {
    const data = commonDelete('mu_online/guide/' + id);
    return data;
  }
};
