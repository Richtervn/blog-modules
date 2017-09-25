import serviceCaller from 'factories/serviceCaller';

const {
  commonPostMultiplePart,
  commonPutMultiplePart,
  commonGet,
  commonDelete
} = serviceCaller;

export default {
  getTools() {
    const data = commonGet('mu_online/list_tools');
    return data;
  },
  getVersions() {
    const data = commonGet('mu_online/list_versions');
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
  addTool(formBody) {
    const data = commonPostMultiplePart('mu_online/add_tool', formBody);
    return data;
  },
  addVersion(formBody) {
    const data = commonPostMultiplePart('mu_online/add_version', formBody);
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
  deleteTool(id) {
    const data = commonDelete('mu_online/remove_tool/' + id);
    return data;
  },
  deleteVersion(id) {
    const data = commonDelete('mu_online/remove_version/' + id);
    return data;
  }
};
