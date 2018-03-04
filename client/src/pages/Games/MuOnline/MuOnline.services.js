import { serviceCaller } from 'helpers';

const { commonPostMultiplePart, commonPutMultiplePart, commonGet, commonDelete, commonPost, commonPut } = serviceCaller;

export default {
  getTools() {
    const data = commonGet('mu_online/list_tools');
    return data;
  },
  getVersions() {
    const data = commonGet('mu_online/list_versions');
    return data;
  },
  getGuides() {
    const data = commonGet('mu_online/list_guides');
    return data;
  },
  getCharacters() {
    const data = commonGet('mu_online/list_characters');
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
    const data = commonPostMultiplePart('mu_online/add_tool', formBody);
    return data;
  },
  addVersion(formBody) {
    const data = commonPostMultiplePart('mu_online/add_version', formBody);
    return data;
  },
  addCharacter(formBody) {
    const data = commonPost('mu_online/add_item', formBody);
    return data;
  },
  addGuide(formBody) {
    const data = commonPost('mu_online/add_guide', formBody);
    return data;
  },
  editTool(formBody) {
    const data = commonPutMultiplePart('mu_online/edit_tool', formBody);
    return data;
  },
  editVersion(formBody) {
    const data = commonPutMultiplePart('mu_online/edit_version', formBody);
    return data;
  },
  editGuide(formBody) {
    const data = commonPut('mu_online/edit_guide', formBody);
    return data;
  },
  editCharacter(formBody) {
    const data = commonPut('mu_online/edit_character', formBody);
    return data;
  },
  deleteTool(id) {
    const data = commonDelete('mu_online/remove_tool/' + id);
    return data;
  },
  deleteVersion(id) {
    const data = commonDelete('mu_online/remove_version/' + id);
    return data;
  },
  deleteCharacter(id) {
    const data = commonDelete('mu_online/remove_character/' + id);
    return data;
  },
  deleteGuide(id) {
    const data = commonDelete('mu_online/remove_guide/' + id);
    return data;
  }
};
