import { serviceCaller } from 'helpers';

const { commonGet } = serviceCaller;

export default {
  getTables() {
    const data = commonGet('tools/content_mirror/get_tables');
    return data;
  },
  getDocuments(collection) {
    const data = commonGet('tools/content_mirror/get_documents', [collection]);
    return data;
  }
  // saveCode(body) {
  //   const data = commonPost('tools/content_mirror/save_code', body);
  //   return data;
  // },
  // getRecords(tableName) {
  //   const data = commonGet('tools/content_mirror/records', [tableName]);
  //   return data;
  // },
  // getRecordContent(tableName, id) {
  //   const data = commonGet('tools/content_mirror/record', [tableName, id]);
  //   return data;
  // }
};
