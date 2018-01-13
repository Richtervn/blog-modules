import serviceCaller from 'factories/serviceCaller';

const { commonGet, commonPost } = serviceCaller;

export default {
  saveCode(body) {
    const data = commonPost('tools/content_mirror/save_code', body);
    return data;
  },
  getRecords(tableName) {
    const data = commonGet('tools/content_mirror/records', [tableName]);
    return data;
  },
  getRecordContent(tableName, id) {
    const data = commonGet('tools/content_mirror/record', [tableName, id]);
    return data;
  }
};
